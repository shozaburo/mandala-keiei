// ============================================================
//  MCQ コホートポータル（軽量・公開Webアプリ）
// ------------------------------------------------------------
//  目的:
//    朝活ページ（マイページ ?section=morning）の「今日のセッション＋参加ボタン」の
//    使い勝手を、コホート単位のページとして独立させる。
//
//  URL:
//    ?cohort=<cohortId>       コホート共通ページ（tokenなしで誰でも開ける＝配布用）
//    ?cohort=...&token=<tk>   メールから開いた時。マイページ直行ボタンが個人用になる
//    ?cohort=...&nocache=1    キャッシュを無視して最新を見る（確認用）
//    ?list=1                  コホート一覧（運営用の確認ページ）
//
//  ※ パラメータ名は cohort（別名 g も可）。
//     1文字の c はGoogle Apps Script側の予約パラメータで、付けると400エラーになる。
//
//  速さのための設計（マイページが重い原因を作らない）:
//    ・サーバー往復は1回だけ（google.script.run を使わない）
//    ・openById は1リクエストにつき1回
//    ・シート全走査（getSheets）はしない。必要な範囲だけ getRange
//    ・組み立てた結果を CacheService に5分キャッシュ
//
//  データの置き場所（すべて既存の管理SS。新しい入力先は増やさない）:
//    グループマスタ           … コホート名・Chat Space ID
//    コホート理念             … ページ上部のキャッチ
//    コホート研修スケジュール … 今日／次回のセッション・Zoom URL
//    コホートリンク           … オススメリンク（このシートに行を足すだけで増える）
//    グループメンバーシップ   … 参加人数・新規入会者
// ============================================================

var SS_ID = '12etquSKLCxHmLImok5NLN5yaIfoouOXY09k3lUxsmtQ';

var SHEET_GROUP_MASTER      = 'グループマスタ';
var SHEET_GROUP_MEMBERSHIP  = 'グループメンバーシップ';
var SHEET_COHORT_TRAINING   = 'コホート研修スケジュール';
var SHEET_COHORT_PHILOSOPHY = 'コホート理念';
var SHEET_COHORT_LINKS      = 'コホートリンク';
var SHEET_USER              = 'ユーザー';
var SHEET_FILE              = 'ファイル';

// ユーザーシート 列（gas_main / gas_admin と同期）
var COL_ID       = 1;   // A
var COL_NICK     = 3;   // C
var COL_AVATAR   = 11;  // K アバター画像URL（マイページと同じ列を使う）
var COL_TOKEN    = 12;  // L 個人トークン
//   ★ COL_TOKEN / COL_AVATAR は定義が無いまま _getViewer で参照されており、
//     try/catch に飲まれて「常に本人不明」になっていた（2026-08-10 修正）。
//     そのため会員限定リンクが誰にもひらかず、アバターも出せなかった。
var COL_MSTATUS  = 13;  // M
var COL_REG_DATE = 14;  // N

// ファイルシート 行
var FILE_ROW_ACTIVITY_FORM   = 9;   // B9  活動報告フォーム（回答用）
var FILE_ROW_MEMBERS_PAGE    = 17;  // B17 マイページ ベースURL

var CACHE_SEC   = 300;  // 5分
var NEW_DAYS    = 30;   // 「新規入会者」とみなす日数
var TZ          = 'Asia/Tokyo';

// ============================================================
//  エントリポイント
// ============================================================
function doGet(e) {
  var p = (e && e.parameter) || {};

  // ── 会員判定API（外部サイトから呼ぶ。経営マスターツールのお試し制限用）──
  //    GET ?api=plan&token=xxx [&callback=fn]
  //    返り値: {known, isMember, plan:'member'|'trial'|'guest', nick}
  //    ※ 返すのはニックネームのみ。token は会員ごとの秘密値なので扱いに注意
  if (String(p.api || '').trim() === 'plan') {
    var pv = _getViewer(String(p.token || '').trim());
    var json = JSON.stringify({
      known: pv.known,
      isMember: pv.isMember,
      plan: pv.isMember ? 'member' : (pv.known ? 'trial' : 'guest'),
      nick: pv.nick || ''
    });
    var cb = String(p.callback || '').trim();
    if (cb && /^[A-Za-z_$][A-Za-z0-9_$.]*$/.test(cb)) {
      return ContentService.createTextOutput(cb + '(' + json + ');')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
  }

  if (p.list) { return _pageCohortList(); }

  var cohortId = String(p.cohort || p.g || p.c || '').trim();
  var token    = String(p.token || '').trim();

  if (!cohortId) {
    return _pageSimple('コホートを指定してください',
      'URLの末尾に <code>?cohort=コホートID</code> を付けて開いてください。<br>' +
      '例: <code>?cohort=mandala_business</code><br><br>' +
      '<a href="?list=1">コホート一覧を見る</a>');
  }

  var D = _getCohortPageData(cohortId, !!p.nocache);
  if (!D) {
    return _pageSimple('見つかりません',
      'コホート「' + _esc(cohortId) + '」はグループマスタに登録されていません。');
  }

  // 閲覧者（tokenがある時だけ判定）。会員限定リンクの出し分けに使う
  var viewer = _getViewer(token);

  var t = HtmlService.createTemplateFromFile('cohort_page');
  t.D = D;
  t.viewer = viewer;
  t.token = token;
  // テンプレート内から使う判定関数（閲覧者を束ねておく）
  t.canSee = function(link) { return _canSee(link, viewer); };
  // 自社サイトのリンクには token を引き継ぐ。
  //   経営マスターツールなどが「本会員かどうか」を判定できるようにするため。
  //   （token は会員ごとの秘密値なので、自社ドメイン以外には絶対に付けない）
  t.linkUrl = function(link) {
    var url = String(link.url || '');
    if (!token) return url;
    if (!/^https:\/\/(mandalachart\.jp|re-gi\.jp|myhou\.co\.jp)\//i.test(url)) return url;
    if (url.indexOf('token=') >= 0) return url;
    return url + (url.indexOf('?') >= 0 ? '&' : '?') + 'token=' + encodeURIComponent(token);
  };
  t.lockMsg = function(link) {
    var scope = String(link.scope || '').trim();
    if (scope === '会員') {
      return viewer.known
        ? '本会員になるとご利用いただけます'
        : 'マイページのリンクから開くとご利用いただけます（本会員限定）';
    }
    return 'マイページのリンクから開くとご利用いただけます';
  };
  // token が付いていればマイページ直行URLを個人用に組み立てる
  t.mypageUrl = (D.mypageBase && token)
    ? D.mypageBase + (D.mypageBase.indexOf('?') >= 0 ? '&' : '?') + 'token=' + encodeURIComponent(token)
    : '';
  return t.evaluate()
    .setTitle(D.name + ' | マンダラチャート®クエスト')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// ============================================================
//  閲覧者の判定（token → ニックネーム・会員ステータス）
// ------------------------------------------------------------
//   token が無ければ {known:false}。誰か分からない人＝会員限定は見せない。
//   結果は5分キャッシュ（ページ表示のたびにユーザーシートを読まない）
// ============================================================
function _getViewer(token) {
  var none = { known: false, isMember: false, nick: '', avatar: '', mstatus: '' };
  if (!token) return none;
  var ck = 'viewer_v1_' + token;
  try {
    var hit = CacheService.getScriptCache().get(ck);
    if (hit) return JSON.parse(hit);
  } catch (_) {}
  try {
    var sh = SpreadsheetApp.openById(SS_ID).getSheetByName(SHEET_USER);
    if (!sh || sh.getLastRow() < 2) return none;
    var lastCol = Math.max(COL_NICK, COL_AVATAR, COL_TOKEN, COL_MSTATUS);
    var data = sh.getRange(2, 1, sh.getLastRow() - 1, lastCol).getValues();
    for (var i = 0; i < data.length; i++) {
      if (String(data[i][COL_TOKEN - 1] || '').trim() !== token) continue;
      var ms = String(data[i][COL_MSTATUS - 1] || '').trim();
      var v = {
        known: true,
        isMember: (ms === '会員'),
        nick: String(data[i][COL_NICK - 1] || '').trim(),
        avatar: String(data[i][COL_AVATAR - 1] || '').trim(),
        mstatus: ms
      };
      try { CacheService.getScriptCache().put(ck, JSON.stringify(v), CACHE_SEC); } catch (_) {}
      return v;
    }
  } catch (e) {
    Logger.log('_getViewer error: ' + e.message);
  }
  return none;
}

// リンク1件を、その閲覧者に見せてよいか判定する
//   公開範囲: ''／'全員' = 誰でも / 'お試し' = ログインしていれば可 / '会員' = 本会員のみ
function _canSee(link, viewer) {
  var scope = String(link.scope || '').trim();
  if (!scope || scope === '全員') return true;
  if (scope === 'お試し') return !!viewer.known;
  if (scope === '会員')   return !!viewer.isMember;
  return true; // 想定外の値は表示側に倒す（誤って隠さない）
}

// ============================================================
//  データ組み立て（openById は1回・結果は5分キャッシュ）
// ============================================================
function _getCohortPageData(cohortId, noCache) {
  var ck = 'cohortpage_v1_' + cohortId;
  if (!noCache) {
    try {
      var hit = CacheService.getScriptCache().get(ck);
      if (hit) { return JSON.parse(hit); }
    } catch (_) {}
  }

  var ss = SpreadsheetApp.openById(SS_ID);   // ← 1リクエストで1回だけ

  // ── ① グループマスタ（コホート名・Chat Space）──────────
  var conf = null;
  var gm = ss.getSheetByName(SHEET_GROUP_MASTER);
  if (gm && gm.getLastRow() >= 2) {
    // K列(11)=初期ゴール まで読みたいが、列が足りないシートもあるので実列数で頭打ちにする
    var gmCols = Math.min(11, Math.max(10, gm.getLastColumn()));
    var gv = gm.getRange(2, 1, gm.getLastRow() - 1, gmCols).getValues();
    for (var i = 0; i < gv.length; i++) {
      if (String(gv[i][0]).trim() === cohortId) {
        conf = {
          name:        String(gv[i][1] || cohortId).trim(),
          chatSpaceId: String(gv[i][3] || '').trim(),
          status:      String(gv[i][7] || '').trim(),
          note:        String(gv[i][9] || '').trim(),
          goalId:      String(gv[i][10] || '').trim()   // K列 初期ゴール（教材の引き当てに使う）
        };
        break;
      }
    }
  }
  if (!conf) { return null; }

  // ── ② コホート理念（ページ上部のキャッチ）──────────────
  var philosophy = '';
  var ph = ss.getSheetByName(SHEET_COHORT_PHILOSOPHY);
  if (ph && ph.getLastRow() >= 2) {
    var pv = ph.getRange(2, 1, ph.getLastRow() - 1, 3).getValues();
    for (var i2 = 0; i2 < pv.length; i2++) {
      if (String(pv[i2][0]).trim() === cohortId) {
        philosophy = String(pv[i2][2] || '').trim();
        break;
      }
    }
  }

  // ── ③ ファイルシート（活動報告フォーム・マイページURL）──
  var actUrl = '', mypageBase = '';
  var fsh = ss.getSheetByName(SHEET_FILE);
  if (fsh) {
    var fLast = Math.max(FILE_ROW_ACTIVITY_FORM, FILE_ROW_MEMBERS_PAGE);
    var fv = fsh.getRange(1, 2, fLast, 1).getValues();   // B1:B(必要行) だけ
    actUrl     = String(fv[FILE_ROW_ACTIVITY_FORM - 1][0] || '').trim();
    mypageBase = String(fv[FILE_ROW_MEMBERS_PAGE  - 1][0] || '').trim();
  }

  // ── ④ 参加メンバー（人数・新規入会者）───────────────────
  var memberIds = {}, joinedAt = {};
  var msh = ss.getSheetByName(SHEET_GROUP_MEMBERSHIP);
  if (msh && msh.getLastRow() >= 2) {
    var mv = msh.getRange(2, 1, msh.getLastRow() - 1, 8).getValues();
    for (var i3 = 0; i3 < mv.length; i3++) {
      var mid = String(mv[i3][0]).trim();
      var gid = String(mv[i3][1]).trim();
      var st  = String(mv[i3][7] || '').trim();
      if (!mid || gid !== cohortId) continue;
      if (st && st !== 'active') continue;
      memberIds[mid] = true;
      var jd = mv[i3][2];                       // C列 開始日（あれば）
      if (jd instanceof Date && !isNaN(jd)) joinedAt[mid] = jd.getTime();
    }
  }

  var count = 0, newcomers = [];
  var now = new Date().getTime();
  var limit = now - NEW_DAYS * 24 * 60 * 60 * 1000;
  var ush = ss.getSheetByName(SHEET_USER);
  if (ush && ush.getLastRow() >= 2) {
    var uv = ush.getRange(2, 1, ush.getLastRow() - 1, COL_REG_DATE).getValues();
    for (var i4 = 0; i4 < uv.length; i4++) {
      var uid = String(uv[i4][COL_ID - 1] || '').trim();
      if (!uid || !memberIds[uid]) continue;
      count++;
      // 加入日（グループメンバーシップ）優先。無ければ会員登録日
      var t0 = joinedAt[uid];
      if (!t0) {
        var rd = uv[i4][COL_REG_DATE - 1];
        if (rd instanceof Date && !isNaN(rd)) t0 = rd.getTime();
      }
      if (t0 && t0 >= limit) {
        newcomers.push({
          nick: String(uv[i4][COL_NICK - 1] || '').trim() || 'メンバー',
          when: Utilities.formatDate(new Date(t0), TZ, 'M/d')
        });
      }
    }
  }
  newcomers.sort(function(a, b) { return a.when < b.when ? 1 : -1; });
  if (newcomers.length > 12) newcomers = newcomers.slice(0, 12);

  // ── ⑤ セッション（今日／次回／今後）─────────────────────
  var today = null, upcoming = [];
  var tsh = ss.getSheetByName(SHEET_COHORT_TRAINING);
  if (tsh && tsh.getLastRow() >= 2) {
    var tv = tsh.getRange(2, 1, tsh.getLastRow() - 1, 9).getValues();
    var todayStr = Utilities.formatDate(new Date(), TZ, 'yyyy/MM/dd');
    var rows = [];
    for (var i5 = 0; i5 < tv.length; i5++) {
      if (String(tv[i5][0]).trim() !== cohortId) continue;
      var d = tv[i5][2];
      if (!(d instanceof Date) || isNaN(d)) continue;
      rows.push({
        no:      String(tv[i5][1] || '').trim(),
        ymd:     Utilities.formatDate(d, TZ, 'yyyy/MM/dd'),
        label:   Utilities.formatDate(d, TZ, 'M月d日（E）'),
        theme:   String(tv[i5][3] || '').trim(),
        skills:  String(tv[i5][4] || '').trim(),
        body:    String(tv[i5][5] || '').trim(),
        goal:    String(tv[i5][6] || '').trim(),
        zoom:    String(tv[i5][7] || '').trim(),
        teacher: String(tv[i5][8] || '').trim(),
        t:       d.getTime()
      });
    }
    rows.sort(function(a, b) { return a.t - b.t; });
    for (var i6 = 0; i6 < rows.length; i6++) {
      if (rows[i6].ymd === todayStr) { today = rows[i6]; }
      else if (rows[i6].ymd > todayStr) { upcoming.push(rows[i6]); }
    }
    if (upcoming.length > 8) upcoming = upcoming.slice(0, 8);
  }
  var next = today || (upcoming.length ? upcoming[0] : null);

  // ── ⑤b セッションの教材リンク ────────────────────────────
  //   「対象スキル」欄の頭にあるマス番号（例 C3）から、
  //   クエストマスタの「関連URL」列を引いて教材フォルダへ飛べるようにする。
  //   URLの入力先は1か所（クエストマスタ）に寄せる。ここでは読むだけ。
  //   紐付けは管理SSメニュー「ETA-M1 η 教材リンク一括紐付け」で行う。
  if (next && next.skills) {
    var cellMatch = String(next.skills).trim().match(/([A-H][1-8])/);
    if (cellMatch) {
      next.cell = cellMatch[1].toUpperCase();
      next.materialUrl = _lookupQuestMaterial(ss, conf.goalId, next.cell);
    }
  }

  // ── ⑥ オススメリンク（コホートリンク シート）─────────────
  //     groupId が '*' の行は全コホート共通リンクとして表示
  var links = [];
  var lsh = ss.getSheetByName(SHEET_COHORT_LINKS);
  if (lsh && lsh.getLastRow() >= 2) {
    var lv = lsh.getRange(2, 1, lsh.getLastRow() - 1, 8).getValues();
    for (var i7 = 0; i7 < lv.length; i7++) {
      var lgid = String(lv[i7][0]).trim();
      if (lgid !== cohortId && lgid !== '*') continue;
      var url = String(lv[i7][2] || '').trim();
      if (!url) continue;
      links.push({
        label:   String(lv[i7][1] || url).trim(),
        url:     url,
        note:    String(lv[i7][3] || '').trim(),
        order:   Number(lv[i7][4] || 999),
        icon:    String(lv[i7][5] || '🔗').trim(),
        primary: (lv[i7][6] === true || String(lv[i7][6]).trim().toUpperCase() === 'TRUE'),
        scope:   String(lv[i7][7] || '').trim()   // H列 公開範囲: 空/全員・お試し・会員
      });
    }
    links.sort(function(a, b) { return a.order - b.order; });
  }

  var out = {
    id:         cohortId,
    name:       conf.name,
    goalId:     conf.goalId || '',
    philosophy: philosophy,
    count:      count,
    newcomers:  newcomers,
    today:      today,
    next:       next,
    upcoming:   upcoming,
    links:      links,
    actUrl:     actUrl,
    mypageBase: mypageBase,
    chatUrl:    conf.chatSpaceId
      ? 'https://mail.google.com/chat/u/0/#chat/space/' + conf.chatSpaceId
      : '',
    updated:    Utilities.formatDate(new Date(), TZ, 'M/d HH:mm')
  };

  try { CacheService.getScriptCache().put(ck, JSON.stringify(out), CACHE_SEC); } catch (_) {}
  return out;
}

// ============================================================
//  補助ページ
// ============================================================
function _pageCohortList() {
  var ss = SpreadsheetApp.openById(SS_ID);
  var gm = ss.getSheetByName(SHEET_GROUP_MASTER);
  var rows = '';
  if (gm && gm.getLastRow() >= 2) {
    var gv = gm.getRange(2, 1, gm.getLastRow() - 1, 8).getValues();
    for (var i = 0; i < gv.length; i++) {
      var id = String(gv[i][0]).trim();
      if (!id) continue;
      var st = String(gv[i][7] || '').trim();
      if (st && st !== 'active') continue;
      rows += '<tr><td><code>' + _esc(id) + '</code></td><td>' + _esc(String(gv[i][1] || '')) +
              '</td><td><a href="?cohort=' + encodeURIComponent(id) + '" target="_blank">開く</a></td></tr>';
    }
  }
  return HtmlService.createHtmlOutput(
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<style>body{font-family:system-ui,sans-serif;padding:20px;background:#faf8f4}' +
    'table{border-collapse:collapse;width:100%;max-width:760px}' +
    'td,th{border:1px solid #e3ded3;padding:8px 10px;text-align:left;font-size:14px}' +
    'th{background:#1B5E20;color:#fff}code{background:#f0ece3;padding:2px 5px;border-radius:4px}</style>' +
    '<h2>コホート一覧</h2><table><tr><th>コホートID</th><th>名称</th><th>ページ</th></tr>' +
    rows + '</table>')
    .setTitle('コホート一覧');
}

function _pageSimple(title, body) {
  return HtmlService.createHtmlOutput(
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<style>body{font-family:system-ui,sans-serif;padding:32px;background:#faf8f4;color:#2b2a26}' +
    'code{background:#f0ece3;padding:2px 6px;border-radius:4px}</style>' +
    '<h2>' + _esc(title) + '</h2><p style="line-height:1.9">' + body + '</p>')
    .setTitle(title);
}

function _esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ============================================================
//  キャッシュ手動クリア（シートを直したのに反映されない時）
// ============================================================
function clearCohortPageCache() {
  var ss = SpreadsheetApp.openById(SS_ID);
  var gm = ss.getSheetByName(SHEET_GROUP_MASTER);
  var keys = [];
  if (gm && gm.getLastRow() >= 2) {
    gm.getRange(2, 1, gm.getLastRow() - 1, 1).getValues().forEach(function(r) {
      var id = String(r[0]).trim();
      if (id) keys.push('cohortpage_v1_' + id);
    });
  }
  try { CacheService.getScriptCache().removeAll(keys); } catch (_) {}
  Logger.log('キャッシュclear: ' + keys.length + '件');
  return keys.length;
}

// ============================================================
//  クエストマスタの「関連URL」を1マスだけ引く
// ------------------------------------------------------------
//  セッションカードの「教材を見る」ボタン用。
//  ・URLの入力先は クエストマスタ 1か所に寄せる（ここでは読むだけ）
//  ・紐付けは管理SSメニュー「ETA-M1 η 教材リンク一括紐付け」で行う
//  ・ページ全体は5分キャッシュされるので、毎回の走査にはならない
//  ・列はヘッダー名で探す（列が増減しても壊れない）
//  ・goalId が空のコホートは、記号一致の先頭行を使う
// ============================================================
function _lookupQuestMaterial(ss, goalId, cell) {
  try {
    if (!cell) return '';
    var sh = ss.getSheetByName('クエストマスタ');
    if (!sh || sh.getLastRow() < 2) return '';

    var lastCol = sh.getLastColumn();
    var headers = sh.getRange(1, 1, 1, lastCol).getValues()[0]
                    .map(function(h) { return String(h).trim(); });
    function col(names) {
      for (var n = 0; n < names.length; n++) {
        var i = headers.indexOf(names[n]);
        if (i >= 0) return i;
      }
      return -1;
    }
    var iGoal  = col(['ゴールID', 'ゴール', 'goalId']);
    var iQuest = col(['記号', 'クエストID', 'questId', 'ID']);
    // 教材＝マスごとのDriveフォルダ。関連URL（編共通のNotebookLM）とは別物なので
    // ここでは教材列だけを見る。教材が未登録のマスではボタンを出さない。
    var iUrl   = col(['教材', '教材URL', '教材リンク']);
    if (iQuest < 0 || iUrl < 0) return '';

    var range = sh.getRange(2, 1, sh.getLastRow() - 1, lastCol);
    var data  = range.getValues();
    // セルにリンクだけ貼られている場合（表示文字はラベル）も拾う
    var rich  = null;
    try { rich = range.getRichTextValues(); } catch (e) {}

    var want = String(cell).trim().toUpperCase();
    var goal = String(goalId || '').trim();
    for (var r = 0; r < data.length; r++) {
      if (String(data[r][iQuest] || '').trim().toUpperCase() !== want) continue;
      // ゴールが分かっているときは厳密に一致させる
      if (goal && iGoal >= 0 && String(data[r][iGoal] || '').trim() !== goal) continue;
      var v = String(data[r][iUrl] || '').trim();
      if (!/^https?:\/\//.test(v) && rich) {
        try {
          var u = rich[r][iUrl] && rich[r][iUrl].getLinkUrl && rich[r][iUrl].getLinkUrl();
          if (u) v = u;
        } catch (e2) {}
      }
      if (/^https?:\/\//.test(v)) return v;
      // ★ グループマスタK列(初期ゴール)が空のコホートだと goal が '' になる。
      //   その場合、記号だけで一致した最初の行＝別ゴール(Ω/α等)の空セルを
      //   掴んで「教材なし」と誤判定していた。教材が入っている行まで探し続ける。
      if (!goal) continue;
      return '';
    }
    return '';
  } catch (e) {
    Logger.log('_lookupQuestMaterial エラー: ' + e.message);
    return '';
  }
}
