// ============================================================
// MCQ126_eta_ai_announce.gs — 既存会員へ「AI3編が開きました」を一斉送信
// 2026-08-28 スレッドD発注
// ------------------------------------------------------------
// 経緯:
//   SYNC1（2026-08-28）で mandala_business の会員に θ/β/γ を付与した。
//   ウェルカムメールには _etaAiSkillsBlock() を足したので、
//   これから登録する人には自動で伝わる。
//   しかし「すでに登録済みの人」には届かないため、この一斉送信で1回だけ埋める。
//
// 作法（既存の便に合わせる）:
//   ・退会済み／配信停止（U列）は除外
//   ・宛先一覧を先に見せる（dry-run）→ OKで送信
//   ・本文は _etaAiSkillsBlock()（ウェルカムと同じ体裁）を再利用する
// ============================================================

function menu_ETA_T11_AI3編の案内を一斉送信() {
  var ui = SpreadsheetApp.getUi();
  var ss = SpreadsheetApp.openById(SS_ID);

  // 対象の指定：メンバーIDのカンマ区切り（推奨）、またはグループID
  var resp = ui.prompt('AI3編の案内メール（送信対象の指定）',
    '送りたい相手を入力してください。\n\n' +
    '① メンバーIDをカンマ区切り（例: 2061,2202,2203,2204,2205）… この人たちだけに送ります\n' +
    '② グループID（例: mandala_business）… そのグループ全員に送ります\n\n' +
    '※ 迷ったら①。指定した人以外には届きません。',
    ui.ButtonSet.OK_CANCEL);
  if (resp.getSelectedButton() !== ui.Button.OK) return;
  var input = String(resp.getResponseText() || '').trim();
  if (!input) return;

  var ids = {}, groupId = '';
  if (/^[0-9,\s]+$/.test(input)) {
    // ① メンバーID指定
    input.split(',').forEach(function(s) {
      var v = String(s).trim();
      if (v) ids[v] = true;
    });
    groupId = '（ID指定 ' + Object.keys(ids).length + '件）';
  } else {
    // ② グループ指定
    groupId = input;
    var gmSh = ss.getSheetByName(SHEET_GROUP_MEMBERSHIP);
    if (!gmSh || gmSh.getLastRow() < 2) { ui.alert('グループメンバーシップが空です'); return; }
    gmSh.getRange(2, 1, gmSh.getLastRow() - 1, 8).getValues().forEach(function(r) {
      var mid = String(r[0] || '').trim();
      var gid = String(r[1] || '').trim();
      var st  = String(r[7] || '').trim();
      if (mid && gid === groupId && st === 'active') ids[mid] = true;
    });
  }

  // ── ユーザー情報（メール・氏名・トークン・状態・配信停止）──
  var userSh = ss.getSheetByName(SHEET_USER);
  var fsh = ss.getSheetByName(SHEET_FILE);
  var membersPageBase = fsh ? String(fsh.getRange(FILE_ROW_MEMBERS_PAGE_URL, 2).getValue() || '').trim() : '';

  var targets = [], skipped = [];
  var lastCol = Math.max(COL_UNSUBSCRIBE, COL_TOKEN, COL_MSTATUS);
  userSh.getRange(2, 1, userSh.getLastRow() - 1, lastCol).getValues().forEach(function(r) {
    var mid = String(r[COL_ID - 1] || '').trim();
    if (!mid || !ids[mid]) return;
    var name  = String(r[COL_NAME - 1] || '').trim();
    var nick  = String(r[COL_NICK - 1] || '').trim() || name;
    var email = String(r[COL_EMAIL - 1] || '').trim();
    var mst   = String(r[COL_MSTATUS - 1] || '').trim();
    var token = String(r[COL_TOKEN - 1] || '').trim();

    if (!email || email.indexOf('@') < 0) { skipped.push(mid + ' ' + name + '（メール無し）'); return; }
    if (mst.indexOf('退会') === 0)        { skipped.push(mid + ' ' + name + '（退会済み）'); return; }
    if (_isUnsubscribed(r))               { skipped.push(mid + ' ' + name + '（配信停止）'); return; }

    targets.push({
      id: mid, name: name, nick: nick, email: email,
      mypage: (membersPageBase && token) ? (membersPageBase + '?token=' + encodeURIComponent(token)) : ''
    });
  });

  if (!targets.length) { ui.alert('送信対象が0名です'); return; }

  // ── dry-run ──
  var lines = targets.map(function(t) { return '・' + t.id + ' ' + t.name + ' <' + t.email + '>'; });
  var notFound = Object.keys(ids).filter(function(mid) {
    return !targets.some(function(t) { return t.id === mid; })
        && !skipped.some(function(s) { return s.indexOf(mid + ' ') === 0; });
  });
  var msg = '対象: ' + groupId + '\n\n【送信先 ' + targets.length + '名】\n' + lines.join('\n') +
            (skipped.length ? '\n\n【除外 ' + skipped.length + '名】\n' + skipped.join('\n') : '') +
            (notFound.length ? '\n\n⚠️ ユーザーシートに見つからないID: ' + notFound.join(', ') : '');
  var go = ui.alert('送信前の確認（まだ送っていません）',
    msg + '\n\nこの ' + targets.length + '名に送信しますか？', ui.ButtonSet.YES_NO);
  if (go !== ui.Button.YES) return;

  // ── 送信 ──
  var subject = '【マンダラ経営実践塾】マイページから、ChatGPTを触ってみてください';
  var sent = 0, failed = [];
  targets.forEach(function(t) {
    try {
      var html =
        '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>' +
        '<div style="font-family:\'Hiragino Sans\',\'Yu Gothic\',sans-serif;max-width:620px;margin:0 auto;background:#fff;border:1px solid #ddd;border-radius:10px;overflow:hidden">' +
          '<div style="background:linear-gradient(135deg,#4A148C,#311B92);color:#fff;padding:24px;text-align:center">' +
            '<div style="font-size:.8rem;letter-spacing:.2em;opacity:.85">MANDALA BUSINESS MASTER COURSE</div>' +
            '<div style="font-size:1.35rem;font-weight:bold;margin-top:6px">AIの64スキルが開きました</div>' +
          '</div>' +
          '<div style="padding:24px;color:#333;line-height:1.8">' +
            '<p>' + _escHtml(t.name) + ' 様</p>' +
            '<p>いつもありがとうございます。<br>' +
            'このたび、みなさまのマイページに <strong>ChatGPT編・Google編・Claude編</strong> を追加しました。' +
            'マンダラ経営編とあわせて、<strong>4つの編がすべて開いています</strong>。</p>' +
            _etaAiSkillsBlock() +
            '<div style="background:#FAFAFA;border-radius:6px;padding:14px 18px;margin:14px 0;line-height:1.8;color:#555">' +
              '<div style="font-weight:bold;margin-bottom:4px">&#x1F31F; ふだんの流れ</div>' +
              '・<strong>毎週火曜 ' + ETA_HIRUKATSU_TIME + '</strong>　昼活（経営計画をその場で進めます）<br>' +
              '・<strong>毎朝 6:00〜7:00</strong>　朝活（火〜日・出入り自由・画面オフOK）<br>' +
              '・<strong>すきま時間</strong>　64スキルを1日1マス' +
            '</div>' +
            (t.mypage
              ? '<div style="text-align:center;margin-top:22px">' +
                  '<a href="' + t.mypage + '" style="display:inline-block;padding:15px 38px;background:linear-gradient(135deg,#4A148C,#311B92);color:#fff;text-decoration:none;border-radius:32px;font-weight:bold;box-shadow:0 4px 14px rgba(74,20,140,.35)">&#x25B6; マイページを開く</a>' +
                '</div>'
              : '') +
            '<p style="margin-top:22px;color:#555;font-size:.9rem">' +
            '「何から手をつければいいか分からない」というときは、<strong>ChatGPT編のA1をひとつだけ</strong>。それで大丈夫です。<br>' +
            'ご不明な点は、このメールにそのままご返信ください。</p>' +
            '<p style="margin-top:24px;color:#666;font-size:.82rem;text-align:center;border-top:1px solid #eee;padding-top:14px">— 株式会社クローバ経営研究所 / マンダラ経営実践塾</p>' +
          '</div>' +
        '</div></body></html>';

      MailApp.sendEmail({ to: t.email, subject: subject, htmlBody: html });
      sent++;
      Utilities.sleep(300);
    } catch (e) {
      failed.push(t.id + ' ' + t.name + '（' + e.message + '）');
      Logger.log('ETA-T11 送信失敗: ' + t.id + ' → ' + e.message);
    }
  });

  var done = '📮 AI3編の案内メール 送信完了\nグループ: ' + groupId +
             '\n送信: ' + sent + '名' + (failed.length ? '\n失敗: ' + failed.length + '名\n' + failed.join('\n') : '');
  try { _notifyChat(ss, done); } catch (e) { Logger.log('ETA-T11 Chat通知失敗: ' + e.message); }
  ui.alert('送信完了', done, ui.ButtonSet.OK);
}
