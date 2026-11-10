from pathlib import Path
p=Path(__file__).resolve().parents[1]
s=(p/'tests/fixtures/keiei-server-20261110.html').read_text(encoding='utf-8')
s=s.replace('12:30〜13:50','12:00〜14:00').replace('80分','120分')
s=s.replace('計画を立てて終わり、にはしません。','火曜は、前半に仲間のAI実践を知り、後半に自社の経営課題を手を動かして進めます。')
s=s.replace('<a class="cta-sub" href="#price">料金と中身を見る</a>', '<a class="cta-sub" href="#weekly">火曜の流れと参加準備を見る</a>\n      <a class="cta-sub" href="#price">料金と中身を見る</a>')
s=s.replace('昼活（経営者・AI学習者の交流会）を見学。','12時からの自己紹介・AI実践事例共有と、13時からの経営AIスキル実習を見学。')
s=s.replace('<!-- ═══ 毎週やること ═══ -->\n<section class="sec alt">','<!-- ═══ 毎週やること ═══ -->\n<section class="sec alt" id="weekly">')
s=s.replace('<h2>火曜のお昼、120分</h2>','<h2>火曜は「共有する1時間」と「実践する1時間」</h2>')
s=s.replace('毎週この2本立てです。出られない週はアーカイブで追いつけます。','毎週火曜 12:00〜14:00（日本時間）、Google Meetで開催します。前半は仲間から学び、後半は自分の会社に使える形にする2部制です。出られない週はアーカイブで追いつけます。')
start=s.index('    <div class="tt">',s.index('id="weekly"'))
end=s.index('    <h3 style="margin-top:40px">これからの実習', start)
s=s[:start]+'''    <div class="tt weekly-program">
      <div class="tt-row">
        <div class="tt-time">12:00〜13:00</div>
        <div class="tt-body">
          <b>第1部｜自己紹介と、仲間のAI実践事例を共有</b>
          <span>「みんなのボード」を見ながら自己紹介し、最近試したAIの使い方や、作ったアプリを紹介します。うまくいったことも、困ったことも持ち寄り、自分の仕事で試すヒントを見つけます。</span>
          <p class="weekly-action">参加前に：最近試したこと、または作ったアプリを1件、ボードに投稿してください。</p>
          <a class="cta-sub" href="https://myhou.co.jp/keiei/today/" target="_blank" rel="noopener">みんなのボードを開く →</a>
        </div>
      </div>
      <div class="tt-row">
        <div class="tt-time">13:00〜14:00</div>
        <div class="tt-body">
          <b>第2部｜64の経営者のAIスキルを実践</b>
          <span>「経営塾の道場」を開き、その日のテーマに沿って手を動かします。AIに相談しながら、自社の課題を整理し、経営に使える計画や成果物にまとめます。</span>
          <p class="weekly-action">参加前に：道場へログインできることを確かめてください。下の手順で準備できます。</p>
          <a class="cta-sub" href="https://ca.mandalachart.jp/dojo" target="_blank" rel="noopener">経営塾の道場を開く →</a>
        </div>
      </div>
    </div>

    <div class="weekly-prep">
      <h3>参加前に、この3つを準備</h3>
      <ol>
        <li><strong>ボードに1件投稿。</strong>最近試したAIの使い方や作ったアプリを、みんなのボードに載せます。</li>
        <li><strong>道場のログインを確認。</strong>申込時と同じメールアドレスのGoogleアカウントでログインします。本人確認が必要な場合は「メールの本人リンクで確認する」を選び、届いたメールのリンクで確認した後、もう一度「経営塾の道場」を開いてください。</li>
        <li><strong>参加案内メールを確認。</strong>当日はメールで届いたGoogle Meetの参加URLから入室します。参加URLはお申込みいただいた方にメールでお送りします。</li>
      </ol>
    </div>

''' + s[end:]
s=s.replace('これからの実習スケジュール（2026年）','実習テーマと日程（2026年）')
s=s.replace('13:00からの実習は、8部門の4マス目をA→Hの順に進めます。','13:00〜14:00の実習では、64の経営者のAIスキルのうち、8部門の4マス目をA→Hの順に進めます。')
s=s.replace('<b>E4｜階層別アクションプランの作成（火の用心モデル）</b><span>組織計画</span>','<b>E4｜階層別アクションプランの作成（火の用心モデル）</b><span>組織計画。会社の方針を、部門・チーム・一人ひとりの行動へ具体化する実習です。</span>')
css='''  /* 火曜2部制：時間帯と事前準備をまとめて表示 */
  #weekly{scroll-margin-top:24px}
  .weekly-program .tt-row{grid-template-columns:150px minmax(0,1fr)}
  .weekly-program .tt-time{white-space:nowrap}
  .weekly-program .cta-sub{display:inline-flex;margin-top:14px}
  .weekly-action{margin-top:14px;font-size:.9rem}
  .weekly-prep{margin-top:28px;padding:26px;background:var(--surface);border:1px solid var(--rule)}
  .weekly-prep ol{margin:18px 0 0;padding-left:1.5em;list-style:decimal}
  .weekly-prep li{margin-top:14px;line-height:1.9}
  @media(max-width:600px){.weekly-program .tt-row{grid-template-columns:1fr}.weekly-prep{padding:20px}}
'''
s=s.replace('</style>',css+'</style>',1)
(p/'live/keiei_new.html').write_text(s,encoding='utf-8',newline='\n')
print('Candidate built', len(s))
