// ============================================================
//  昼活「明日のこの時間は…」前日リマインドメールの予約投入
// ------------------------------------------------------------
//  毎週月曜12:00に、翌日（火曜）の昼活を案内するメールを予約する。
//
//  文面は「コホート研修スケジュール」から自動生成するので、
//  日程やテーマを直したあとに再実行すれば、内容も自動で合う。
//
//  ・対象コホート: mandala_business（会員・お試しの両方）
//  ・予約先: 「メール予約」シート（5分おきのトリガーが拾って送信）
//  ・同じ日時・同じ件名の予約が既にあればスキップ（重複送信しない）
//
//  メニュー: MCQ110管理 → ETA-T7 昼活・前日リマインド予約（月曜12時）
// ============================================================

var HK_MAIL_COHORT = 'mandala_business';
var HK_MAIL_HOUR   = 12;   // 月曜の何時に送るか
var HK_MAIL_MIN    = 0;

function menu_ETA_T7_昼活前日リマインド予約() {
  var ui = SpreadsheetApp.getUi();

  // 何月分を入れるか（既定: 8月）
  var res = ui.prompt('昼活 前日リマインドの予約',
    '予約したい月を入力してください（例: 2026-08）\n' +
    'その月の毎週月曜12:00に、翌日の昼活を案内するメールを予約します。',
    ui.ButtonSet.OK_CANCEL);
  if (res.getSelectedButton() !== ui.Button.OK) return;
  var ym = String(res.getResponseText() || '').trim();
  var m = ym.match(/^(\d{4})-(\d{1,2})$/);
  if (!m) { ui.alert('形式が違います。例: 2026-08'); return; }
  var year = Number(m[1]), month = Number(m[2]);

  // ① スケジュールを読み込む（日付 → セッション）
  var ss = SpreadsheetApp.openById(SS_ID);
  var sh = ss.getSheetByName(SHEET_COHORT_TRAINING);
  if (!sh || sh.getLastRow() < 2) { ui.alert('コホート研修スケジュールが空です。先に ETA-T6 を実行してください。'); return; }
  var byYmd = {};
  sh.getRange(2, 1, sh.getLastRow() - 1, 9).getValues().forEach(function(r) {
    if (String(r[0] || '').trim() !== HK_MAIL_COHORT) return;
    var d = r[2];
    if (!(d instanceof Date) || isNaN(d)) return;
    byYmd[Utilities.formatDate(d, 'Asia/Tokyo', 'yyyy/MM/dd')] = {
      date: d,
      no:    String(r[1] || '').trim(),
      theme: String(r[3] || '').trim(),
      body:  String(r[5] || '').trim(),
      goal:  String(r[6] || '').trim(),
      zoom:  String(r[7] || '').trim()
    };
  });

  // ② その月の月曜を全部拾い、翌日にセッションがあるものだけ予約
  var existing = _hkExistingReservations(ss);
  var made = [], skipped = [], noSession = [];
  var d = new Date(year, month - 1, 1);
  while (d.getMonth() === month - 1) {
    if (d.getDay() === 1) { // 月曜
      var next = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
      var key = Utilities.formatDate(next, 'Asia/Tokyo', 'yyyy/MM/dd');
      var s = byYmd[key];
      if (!s) {
        noSession.push(Utilities.formatDate(d, 'Asia/Tokyo', 'M/d'));
      } else {
        var sendAt = new Date(d.getFullYear(), d.getMonth(), d.getDate(), HK_MAIL_HOUR, HK_MAIL_MIN, 0);
        var subject = _hkSubject(s);
        var dupKey = Utilities.formatDate(sendAt, 'Asia/Tokyo', 'yyyy/MM/dd HH:mm') + '|' + subject;
        if (existing[dupKey]) {
          skipped.push(Utilities.formatDate(sendAt, 'Asia/Tokyo', 'M/d'));
        } else if (sendAt.getTime() < new Date().getTime()) {
          skipped.push(Utilities.formatDate(sendAt, 'Asia/Tokyo', 'M/d') + '(過去)');
        } else {
          var r2 = mailComposer_schedule({
            sendAt: sendAt,
            subject: subject,
            body: _hkBody(s),
            filter: { cohorts: [HK_MAIL_COHORT], mstatus: ['会員', 'お試し'] },
            options: {}
          });
          if (r2 && r2.ok) made.push(Utilities.formatDate(sendAt, 'Asia/Tokyo', 'M/d(E) HH:mm') + '　' + subject);
          else skipped.push(Utilities.formatDate(sendAt, 'Asia/Tokyo', 'M/d') + '(失敗)');
        }
      }
    }
    d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
  }

  var msg = '【予約しました】' + made.length + '件\n' + (made.join('\n') || '（なし）');
  if (skipped.length)   msg += '\n\n【スキップ】' + skipped.join('、');
  if (noSession.length) msg += '\n\n【翌日に昼活の予定なし】' + noSession.join('、');
  msg += '\n\n「予約一覧」タブで確認・編集できます。';
  ui.alert('昼活 前日リマインド予約', msg, ui.ButtonSet.OK);
  Logger.log(msg);
}

// 既存の pending 予約（日時＋件名）を集める
function _hkExistingReservations(ss) {
  var out = {};
  var q = ss.getSheetByName(SHEET_MAIL_QUEUE);
  if (!q || q.getLastRow() < 2) return out;
  q.getRange(2, 1, q.getLastRow() - 1, 7).getValues().forEach(function(r) {
    var when = r[1], subj = String(r[2] || '').trim(), st = String(r[6] || '').trim();
    if (!(when instanceof Date) || isNaN(when)) return;
    if (st && st !== 'pending') return;
    out[Utilities.formatDate(when, 'Asia/Tokyo', 'yyyy/MM/dd HH:mm') + '|' + subj] = true;
  });
  return out;
}

function _hkSubject(s) {
  return '【明日 昼活】' + s.theme;
}

function _hkBody(s) {
  var dateLabel = Utilities.formatDate(s.date, 'Asia/Tokyo', 'M月d日（E）');
  // スケジュールの「内容」に開催時間を入れてあれば拾う
  var timeText = '';
  var tm = s.body.match(/開催時間:\s*([^\n]+)/);
  if (tm) timeText = tm[1].trim();
  var bodyMain = s.body.replace(/\n*開催時間:\s*[^\n]+/, '').trim();

  if (!timeText && typeof ETA_HIRUKATSU_TIME !== 'undefined') timeText = ETA_HIRUKATSU_TIME;

  var lines = [];
  lines.push('{{nick}} さん');
  lines.push('');
  lines.push('こんにちは。松山です。');
  lines.push('明日のこの時間' + (timeText ? '（' + timeText + '）' : '') + 'は、昼活です。');
  lines.push('');
  lines.push('──────────────────');
  lines.push('■ ' + dateLabel + (timeText ? '　' + timeText : '') + (s.no ? '（第' + s.no + '回）' : ''));
  lines.push('　' + s.theme);
  if (s.zoom) lines.push('　' + s.zoom);
  lines.push('──────────────────');
  lines.push('');
  if (bodyMain) { lines.push(bodyMain); lines.push(''); }
  if (s.goal) {
    lines.push('▼ 明日の到達点');
    lines.push('　' + s.goal);
    lines.push('');
  }
  lines.push('聞くだけの参加も、途中入退室も歓迎です。');
  lines.push('カレンダーに入れておいてください。');
  lines.push('');
  lines.push('▼ これからの道のり・ツール一式はこちら（あなた専用リンク）');
  lines.push('{{portalUrl}}');
  lines.push('');
  lines.push('松山 将三郎');
  return lines.join('\n');
}
