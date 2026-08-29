// ============================================================
// MCQ110_eta_setup.gs — η ゴール「マンダラ経営マスターコース」専用
// 管理SS bound script に追加 (Phase 24)
// 生成日: 2026-05-04
// ============================================================
// 使い方:
//   ① ETA1 全セットアップ実行 で クエスト/称号/AI割当/グループ を一括追加
//   ② ETA2 η申込フォーム作成 でフォーム作成 → URL を会員に共有
//   ③ ETA3 η申込トリガー設定 で送信時自動処理を有効化
// ============================================================

// =============== η クエストマスタ 64件 ===============
var ETA_QUEST_V1 = [
  ["η","A1","第1部門 Purpose 経営理念","原則を学ぶ：空の知恵と相互依存",60,"マンダラ思考第1原則『相互依存』。空(くう)の知恵とは、すべての存在は固有の実体を持たず、関わり合いの中で立ち現れるという仏教の根本思想。経営理念は自社単独で成立せず、顧客・社員・取引先・地域・社会との縁の中で生まれる。\n\n【学び方】月次オンライン勉強会 第1原則セッション参加。マンダラ手帳・八元徳のページで理解を深める。"],
  ["η","A2","第1部門 Purpose 経営理念","創業の原点・承継の決意を言語化する",72,"なぜこの会社を始めたか/承継したか・誰のために存在するのか・取引先や地域社会への想いを、AIと対話を重ねて掘り下げ自分の言葉で書き出す。創業時の想いだけでなく、承継経営者の決意・ステークホルダーへの貢献意識まで含めて物語化する。\n\n【AI活用】Claudeに自分のキャリア・出来事・出会った人々を順に話し『私の経営者としての原点ストーリーを抽出。創業/承継の動機、関わってきた人たちへの想いまで物語化して』と依頼。"],
  ["η","A3","第1部門 Purpose 経営理念","経営理念マンダラ＋MVVを作成",82,"中心に経営理念(1文)、周囲8マスに行動指針を配置したマンダラを完成させ、合わせてMVV(Mission/Vision/Values)を定義する。理念の根・幹・枝を構造化することで現場で使える形にする。\n\n【AI活用】Claudeに『創業ストーリーから①Mission(使命)②Vision(10年後の姿)③Values(価値観5つ)を抽出し、行動指針8つも提案して』と依頼。"],
  ["η","A4","第1部門 Purpose 経営理念","【AI組織導入】NotebookLMで自社理念ノートを構築",90,"経営理念・社史・社長メッセージ・表彰事例をNotebookLMに集約し、社員誰でも『自社の理念について質問できる』ナレッジベースを構築。属人化していた創業者の想いを集合知化する。\n\n【関連クエスト】Google編 B7『第2の脳構築』、Google編 G2『ソースに忠実なQ&A』。組織として導入することで新人研修にも活用可能。"],
  ["η","A5","第1部門 Purpose 経営理念","理念を社員に語る朝礼を始める",95,"毎週1つの行動指針について、社長自身が自分の言葉で5分語る朝礼を導入。理念は書いてあるだけでは染み込まず、繰り返し語ることで組織文化となる。\n\n【AI活用】事前にClaudeで『今週の指針について社員に響く事例を5つ提案』。話す原稿の壁打ちをAIで。"],
  ["η","A6","第1部門 Purpose 経営理念","理念実現エピソード集の編纂",100,"理念が実現した瞬間の社内エピソードを社員から募集し、AIで物語化して『理念実現エピソード集』を蓄積する。年12〜24本を目標に。\n\n【AI活用】Slack/Teams投稿をClaudeに読ませて『理念に沿ったエピソードを抽出して物語化』。"],
  ["η","A7","第1部門 Purpose 経営理念","採用面接に理念を組み込む",105,"経営理念に共感する人を見抜く面接質問テンプレート8問を作成し全採用面接で活用。スキルだけでなく価値観の一致を最重視する採用に転換する。\n\n【AI活用】Claudeで『私の理念(添付)に共感する人かを見抜く面接質問を8問。回答の判定基準も』と依頼。"],
  ["η","A8","第1部門 Purpose 経営理念","【AI組織導入】10年ビジョンを画像生成AIで視覚化し発信",115,"10年後の自社・社員・顧客・地域の姿を画像生成AIで視覚化し、HP・LP・SNS・社内掲示で発信する。文字だけでなく『見える未来』として理念を浸透させる。\n\n【関連クエスト】Google編 F5『画像生成AI(Nano Banana)連携』、Claude編 D4『SNS投稿文を生成』。10年ビジョンの絵が朝礼・採用面接・営業の場で語られる文化を作る。"],
  ["η","B1","第2部門 Leadership 社長方針","原則を学ぶ：マンダラの知恵と統合力",68,"第2原則『統合力』。マンダラの知恵とは、全体と部分と関係性を同時に認識し、適切な行動をする視座。社長は8部門を一枚のマンダラとして見渡し、部分最適ではなく全体最適の判断を下す。\n\n【学び方】月次勉強会 第2原則セッション。8部門マンダラを毎日眺める習慣で全体観を養う。"],
  ["η","B2","第2部門 Leadership 社長方針","今期の最優先テーマを1つ決める ─ 自主経営と専業の視座",78,"『今期、社長として何を最優先するか』を1つに絞り覚悟と共に宣言する。判断基準として『自主経営(他社・他人に振り回されない)』『専業(本業に集中する)』というマンダラ経営計画特有のキーワードを意識する。\n\n【AI活用】Claudeに『今期の経営課題と機会を整理し、自主経営と専業の観点から最優先テーマ候補を3つ提案』。決断は社長自身。"],
  ["η","B3","第2部門 Leadership 社長方針","方針マンダラを作成＋部門間シナジーをAIシミュレーション＋KPI策定",90,"最優先テーマを中心に、8部門それぞれでの具体的方針を周囲8マスに配置した方針マンダラを完成させる。さらに各部門の方針が他部門に与える影響(シナジー・矛盾)をAIにシミュレートさせ、3つの重点KPIを設定する。\n\n【AI活用】Claudeで『方針マンダラ(添付)について①部門間のシナジー②矛盾やトレードオフ③重点KPI3つを提示』。机上で破綻を発見して修正できる。"],
  ["η","B4","第2部門 Leadership 社長方針","【AI組織導入】社長専用Projectsの構築",95,"Claudeの『Projects』機能に、自社の経営理念・方針・主要数字・過去の判断履歴を集約し、社長専用の『分身AI相談室』を構築。意思決定の壁打ち相手として常駐させる。\n\n【関連クエスト】Claude編 E4『ClaudeのProjectsに専門資料』。自分の判断軸を学ばせた相談AIを持つ。"],
  ["η","B5","第2部門 Leadership 社長方針","社長の時間配分を再設計",100,"経営者の1週間168時間の理想配分(経営判断/現場/家族/学び/健康)をAIと対話して再設計。緊急ではなく重要なことに時間を使う構造に転換。\n\n【AI活用】Claudeに『社長の時間の使い方の理想像と、私の現状との差分を可視化』。"],
  ["η","B6","第2部門 Leadership 社長方針","意思決定の判断基準を言語化",105,"社長として迷ったときの判断軸8つを書き出し自分の羅針盤にする。理念に沿うか/3年後に正しいか/社員が誇れるか、など。\n\n【AI活用】Claudeに『私の過去の意思決定例(添付)を分析して判断軸を抽出』。"],
  ["η","B7","第2部門 Leadership 社長方針","やらないことリストを作る",110,"社長が手放すべき業務・付き合い・会議・習慣をAIと棚卸しし、Stop Doing Listを作成。やることリストより、やらないことリストの方が経営を変える。\n\n【AI活用】Claudeに自分のスケジュールを見せて『社長として手放すべきものを優先度順に』。"],
  ["η","B8","第2部門 Leadership 社長方針","【AI組織導入】社長メッセージの週次発信",120,"全社員向けの社長メッセージを毎週1本発信する仕組みを構築。文字でも音声でも動画でも可。社長の覚悟と方針を継続的に組織に伝える。\n\n【関連クエスト】Claude編 D4『SNS投稿文』、Claude編 C6『議事録Word化』。Loomやポッドキャストとの組み合わせで効率化。"],
  ["η","C1","第3部門 Finance 財務","原則を学ぶ：苦集滅道・あるべき姿・逆算の発想(プル思考)",72,"第3原則『あるべき姿』。苦集滅道は結果を認識し(苦)・原因を発見し(集)・目標設定し(滅)・実践活動をする(道)というCAPDサイクル。財務はあるべき姿と現状の差を見抜き行動に変える領域。本部門の核は『経常利益から売上を逆算する(プル思考)』。先に利益・キャッシュの目標を立て、そこから逆算して売上・コスト・投資を導く。\n\n【学び方】月次勉強会 第3原則セッション。プル思考のシミュレーションを実践。"],
  ["η","C2","第3部門 Finance 財務","決算書PDFをAI財務分析にかけ、重点KPIを3つに絞る",84,"自社の決算書PDFをClaudeにアップし、18項目の財務分析を体験。さらに『今期最も改善すべき重点KPIを3つ』に絞り込ませる。18項目を眺めるだけでは行動できない、3つに絞ることで初めて動き始める。\n\n【AI活用】Claudeに決算書を添付し『18項目の財務分析を実施。経営課題と機会を抽出した上で、今期最優先で改善すべき重点KPIを3つに絞り根拠も』。"],
  ["η","C3","第3部門 Finance 財務","中期計画 ─ 3年後・5年後のP/L・B/Sを描く",95,"短期だけでなく中期視点で経営を見る。3年後・5年後の理想P/L・B/Sを描き、そこから逆算して今期の重点投資・人員計画・売上目標を導出する。LP記載の『中期/短期計画』の核心。\n\n【AI活用】Claudeに『現在のP/L・B/Sを起点に、3年後・5年後のあるべきP/L・B/Sを描いて。そこから今期の必要売上・利益・投資額を逆算』。"],
  ["η","C4","第3部門 Finance 財務","【AI組織導入】月次財務ダッシュボード自動化",102,"売上・粗利・営業利益・資金繰りを毎月AIで自動集計しダッシュボード化。社長が定点観測できる仕組みを構築。\n\n【関連クエスト】Claude編 C1『CSVデータ分析』、Claude編 C3『Excelレポート自動生成』、Claude編 G2『経費・売上を定期集計』。Scheduled Tasksで毎月1日に自動更新。"],
  ["η","C5","第3部門 Finance 財務","資金繰り表をAIで自動更新",108,"キャッシュフローを毎週見える化する仕組みを作る。黒字倒産を防ぐ最重要指標を、AIで管理コストゼロに近づける。\n\n【AI活用】Claude編 C8『月次レポートを統合』を応用。複数Excelを横断して資金繰り予測表を自動生成。"],
  ["η","C6","第3部門 Finance 財務","同業他社のベンチマーク比較",112,"AIで同業他社の財務指標と比較し、自社の立ち位置を把握する。あるべき姿の参照点を明確にする。\n\n【AI活用】Google編 B2『ディープリサーチ』で公開財務データを収集→Claudeで比較表化。"],
  ["η","C7","第3部門 Finance 財務","投資判断のマンダラ＋金融機関交渉シナリオ",118,"設備投資・人材投資・広告投資・事業投資の判断基準8つをマンダラ化し、それを支える資金対応力(=金融機関との交渉シナリオ)もAIで設計する。投資判断と資金調達はセットで初めて経営になる。\n\n【AI活用】Claudeで『過去の投資判断の成功例・失敗例から判断軸を抽出』。続けて『この投資について銀行/政策金融公庫向けの説明資料・想定Q&Aを作成』。"],
  ["η","C8","第3部門 Finance 財務","【AI組織導入】財務を社員と共有する仕組み",125,"経営数字を全社員に開示・教育する仕組みを構築する。NotebookLMで財務勉強用ノートを作り、社員が自分のペースで学べる環境を整える。\n\n【関連クエスト】Google編 G7『ノートブックガイドで要約・FAQ』、Google編 H2『理解度クイズ自動生成』。"],
  ["η","D1","第4部門 Growth 商品・顧客開発","原則を学ぶ：中道の知恵と守・破・離",78,"第4原則『開発力』。中道の知恵とは『限界まで考え抜いてから手放す』こと。極端を避けつつ強い意志を持つ姿勢が、ひらめきを生む。守(基本を守る)・破(発展させる)・離(独自に飛躍する)というプロセスで、商品・顧客開発を進化させる。\n\n【学び方】月次勉強会 第4原則セッション。守破離のフレームを商品開発に適用。"],
  ["η","D2","第4部門 Growth 商品・顧客開発","顧客マンダラを作成",88,"自社の主要顧客を8タイプに分類し、それぞれの特性・ニーズ・購買動機を言語化する。誰のために何を作るかを構造化する。\n\n【AI活用】顧客リストをClaudeに渡し『8タイプにクラスタリングして特性を要約』。"],
  ["η","D3","第4部門 Growth 商品・顧客開発","【AI組織導入】NotebookLMで顧客の声を集合知化",96,"アンケート・問い合わせ・SNSコメント・営業議事録をNotebookLMに集約し、『顧客の声』を会社の脳として蓄積する。新商品開発・営業トーク改善の根拠に。\n\n【関連クエスト】Google編 G5『営業プレイブックの自動生成』、Google編 H1『顧客ごとのNotebookLMとCRM』。"],
  ["η","D4","第4部門 Growth 商品・顧客開発","ペルソナをAIで深掘り",104,"主要顧客像をAIと対話して具体的な人物像に落とす。年齢・職業・1日の過ごし方・悩み・憧れまで描き切る。\n\n【AI活用】Claudeに既存顧客データを渡し『最も典型的なペルソナを3人、それぞれの1日と人生背景を物語化』。"],
  ["η","D5","第4部門 Growth 商品・顧客開発","SWOT・3C・PEST分析をAIで実施",112,"自社の強み弱み(SWOT)、市場・競合・自社(3C)に加え、マクロ環境(PEST=政治・経済・社会・技術)もAIで構造化する。森も見て木も見る視点で経営環境を把握。\n\n【AI活用】Claudeに『私の事業についてSWOT・3C・PEST分析を実施。各分析の関連性も指摘して』。"],
  ["η","D6","第4部門 Growth 商品・顧客開発","【AI組織導入】競合のディープリサーチ",120,"AIで国内外の競合・成功事例を継続的に収集し、自社戦略に応用する仕組みを構築する。マーケ担当が毎月レポートを出すルーティン化。\n\n【関連クエスト】Google編 B2『ディープリサーチ』、Claude編 G6『競合ページを定期監視』。"],
  ["η","D7","第4部門 Growth 商品・顧客開発","新商品アイデアの量産 ─ PPM分析×アンゾフの成長ベクトル",128,"既存商品をPPM分析(花形・金のなる木・問題児・負け犬)で評価し、捨てる商品を決める。アンゾフの成長マトリクスで新たな市場・商品への展開アイデアをAIに量産させる。中道の知恵=既存に固執せず新陳代謝。\n\n【AI活用】Claudeに『当社の商品ラインナップ(添付)をPPM分析。捨てるべき商品を提案。さらにアンゾフの成長ベクトルで新規市場・新規商品アイデアを各5案』。"],
  ["η","D8","第4部門 Growth 商品・顧客開発","ランチェスター戦略マンダラ ─ 商品顧客開発の8戦略",138,"ランチェスター戦略の8つの軸(商品・地域・客層・営業・顧客・組織・財務・時間)で売れ続ける仕組みをマンダラ化する。中道の知恵を経営戦略に落とし込んだ集大成。\n\n【AI活用】Claudeで『8戦略それぞれについて当社の現状と打ち手を提示』。8つを統合した行動計画を作成。"],
  ["η","E1","第5部門 Team Building 組織・社風","原則を学ぶ：唯識の知恵と感謝",82,"第5原則『感謝(環境整備)』。唯識の知恵とは『あなたの心が経営環境を作っている』という心の真理。組織の空気は社長の心の状態が作る。感謝の心が良い環境を生む。結果を素直な心で受け止める姿勢が組織を育てる。\n\n【学び方】月次勉強会 第5原則セッション。感謝の言葉を毎日10回口にする習慣化。"],
  ["η","E2","第5部門 Team Building 組織・社風","組織図と権限を可視化 ─ 市場とリンクする視点で",90,"現状の組織を1枚絵にし、役割と権限を整理する。誰が何を決めて良いかを明文化することで社長依存から脱却。さらに『各部署が市場のどこに繋がっているか』をAIで可視化し、内向き組織化を防ぐ。\n\n【AI活用】Claudeで『現組織を整理し、各部署が顧客・市場のどの接点を担っているか・どこが市場と切れているかを指摘』。"],
  ["η","E3","第5部門 Team Building 組織・社風","理想の社風を言語化 ─ 挑戦的な不安定さも含めて",98,"うちの会社らしさ8つの社風要素をマンダラに落とす。安心・安定だけでなく『挑戦的な不安定さ(イノベーションを起こす緊張感)』も社風要素として組み込む。\n\n【AI活用】Claudeで『理想の社風を表す8つのキーワードと行動例。安定要素5つと挑戦的不安定さ3つのバランスで』。"],
  ["η","E4","第5部門 Team Building 組織・社風","階層別アクションプランの作成 ─ 火の用心モデル",105,"社長方針を、役員→部長→課長→現場メンバーへと、階層別に具体的アクションへ落とし込む。火の用心の標語が町内に浸透するように、方針を現場の動作レベルに翻訳する。\n\n【AI活用】Claudeに『社長方針(添付)を、役員/部長/課長/現場の4階層それぞれの具体行動に翻訳。各階層10アクション』。"],
  ["η","E5","第5部門 Team Building 組織・社風","【AI組織導入】社内コミュニケーション設計",112,"朝礼・会議・1on1・Slack運用の型を統合的に設計。AIを活用した議事録・要約・タスク化の仕組みを組織に導入。市場の声(顧客フィードバック)が社内コミュニケーションに自然に流れる仕組みも組み込む。\n\n【関連クエスト】Google編 C5『会議の自動文字起こし』、Claude編 E3『Zoom会議を要約』、Claude編 E4『Slackを横断検索』。"],
  ["η","E6","第5部門 Team Building 組織・社風","【AI組織導入】社内ナレッジを集合知化",118,"業務ノウハウ・トラブル対応・FAQをAIで蓄積し、社員誰でも参照できる仕組みを作る。属人化解消の最有効策。\n\n【関連クエスト】Google編 H7『属人的な知識をチーム共有の資産に』、Google編 G7『ノートブックガイド』。"],
  ["η","E7","第5部門 Team Building 組織・社風","社員エンゲージメント測定 ─ 結果を素直な心で受け止める",125,"社員アンケートをAIで分析し改善ポイントを発見する。重要なのは結果を『言い訳せず、素直な心で受け止める』姿勢。耳の痛いフィードバックこそ感謝で迎える。\n\n【AI活用】Googleフォーム→Claudeで自由記述を感情分析→改善優先順位を抽出。社長コメントは『反論しない・言い訳しない』を厳守。"],
  ["η","E8","第5部門 Team Building 組織・社風","【AI組織導入】マンダラクエストを社内導入",130,"ゲーミフィケーション評価制度『マンダラクエスト』(各編で身につけるスキル群)を社員教育に導入し、組織全体のAIリテラシーを底上げする。\n\n【関連クエスト】各編ぜんぶ。社員ごとの進捗を可視化・表彰する仕組みを構築。"],
  ["η","F1","第6部門 People 人財育成","原則を学ぶ：縁起と主体性",88,"第6原則『主体性(自己実現)』。縁起の知恵とは『この世の全ては、あなたの関わり合いで出現する』。社員の成長は、本人の主体性を引き出すことなしに起きない。教育は『教える』のではなく『主体性を引き出す』こと。\n\n【学び方】月次勉強会 第6原則セッション。"],
  ["η","F2","第6部門 People 人財育成","【AI組織導入】採用要件マンダラ＋AI面接アシスト",96,"求める人材像を8観点(スキル・人柄・価値観・成長意欲など)で言語化し、採用面接に組み込む。さらに履歴書・面接記録をAIで分析する仕組みを構築し、客観データと社長判断を組み合わせる。\n\n【関連クエスト】Google編 B3『マルチモーダル活用』、Google編 H2『理解度テスト自動生成』。"],
  ["η","F3","第6部門 People 人財育成","成長シート(成果・能力・姿勢の12項目)をAIで構築",108,"評価制度の中核となる『成長シート』を作成する。成果・能力・姿勢の3軸×4項目=12項目で社員の成長を見える化。第5部門から移動した評価制度を、人財育成の文脈で再設計。\n\n【AI活用】Claudeに『成果4項目・能力4項目・姿勢4項目の評価シートを職種別に作成。各項目に評価基準と行動例も』。"],
  ["η","F4","第6部門 People 人財育成","新人オンボーディング設計",116,"入社3ヶ月の育成プログラムを8週マンダラで構造化する。何を、いつまでに、どのレベルまでを明確化。\n\n【AI活用】Claudeで『新人3ヶ月のオンボーディングを8週間プログラムに』。"],
  ["η","F5","第6部門 People 人財育成","AIキャリアマップの生成 ─ 強みにフォーカス",122,"社員一人ひとりの中長期キャリアマップをAIで生成。重要な視点は『弱みの克服』ではなく『強みの伸長』。本人の強みを活かしてどう成長していけるかを描く。\n\n【AI活用】1on1議事録・本人の自己分析をClaudeに渡し『この社員の強みを起点に、3年・5年・10年のキャリアマップを描く。弱みは無視して強みだけで伸ばす道筋』。"],
  ["η","F6","第6部門 People 人財育成","【AI組織導入】社員へのマンダラチャート研修",128,"社員自身が自分のマンダラを作れる教育プログラムを社内導入する。マンダラ思考を組織のOSにする。\n\n【関連クエスト】マンダラチャート協会のWS活用＋NotebookLMで自社用教材化(Google編 G7『ノートブックガイド』)。"],
  ["η","F7","第6部門 People 人財育成","1on1の型を確立 ─ AIで思考の癖・コンピテンシー抽出",138,"上司部下の月次1on1を『成長対話』として仕組み化。議事録・タスク化に加え、AIに『この社員のコンピテンシー(行動特性)・思考の癖』を継続的に抽出させ、育成方針に反映する。\n\n【AI活用】Claude編 E3『Zoom会議を要約』を応用。1on1議事録を蓄積し、Claudeで『この社員の行動特性・思考パターン・成長軌跡』を分析。"],
  ["η","F8","第6部門 People 人財育成","後継者・幹部候補の発掘",145,"次世代リーダー候補を5年計画で育てる仕組みを作る。縁起=関わり合いで人は育つ、その関わりを意図的に設計する。\n\n【AI活用】Claudeで『5年後の幹部に必要な経験・スキル・関係性』を構造化し計画的な配属に活かす。"],
  ["η","G1","第7部門 OKR 週次経営","原則を学ぶ：禅定と仮説検証 ─ PDCAではなくCAPDサイクル",92,"第7原則『仮説検証』。禅定の知恵とは『心を散らさず調えると世の中の変化の真相が得られる』。会議は心を調える場であり、仮説を立てて検証する場。重要な視点は『PDCAではなくCAPDサイクル』。Plan(計画)から始めるのではなく、Check(現状の差異の認識)から始める。\n\n【学び方】月次勉強会 第7原則セッション。"],
  ["η","G2","第7部門 OKR 週次経営","四半期OKRを設定",102,"Objective(目標)1つとKey Results(主要結果)3つを四半期ごとに設定する。OKRはマンダラチャートと相性抜群。\n\n【AI活用】Claudeに『今期の最優先テーマからOKRを3案』。決断は社長自身。"],
  ["η","G3","第7部門 OKR 週次経営","全社OKRを部門OKRに展開 ─ 顧客視点をAIで判定",114,"全社目標を各部門のOKRに落とし込む。マンダラ式に8部門へ自動展開。重要な視点として『各部門のOKRが顧客(市場)に向いているか』をAIに判定させ、内向きOKRを防ぐ。\n\n【AI活用】Claudeで『全社OKRを8部門それぞれのOKRに展開。各OKRが顧客のどの利益に繋がるかを明示。顧客に向いていないOKRは指摘』。"],
  ["η","G4","第7部門 OKR 週次経営","【AI組織導入】OKR週次サイクル＋音声日報＋CFR",122,"月曜OKR宣言・水曜中間チェック・金曜振り返り報告の週次サイクルを組織に導入。さらにAI音声日報(社員がスマホで音声録音→AIが文字化・要約)とCFR(Conversation対話・Feedbackフィードバック・Recognition承認)による『応援の仕組み化』を組み込む。\n\n【関連クエスト】Claude編 G1『ニュースを定期収集』、Claude編 G7『朝の予定を自動報告』、Claude編 E3『Zoom会議を要約』。Scheduled Tasksで自動化。"],
  ["η","G5","第7部門 OKR 週次経営","【AI組織導入】NotebookLMで会議体系を集合知化＋次回アジェンダ自動抽出",130,"全会議の議事録・決定事項・アクションをNotebookLMに集約し、過去の議論を即座に参照可能に。さらにAIに『次回会議のアジェンダを過去の流れから自動抽出』させる。衆知を集める準備が自動化される。\n\n【関連クエスト】Google編 G4『議事録から主要議題抽出』、Google編 C8『チャットログとNotebookLM解析』。"],
  ["η","G6","第7部門 OKR 週次経営","会議体系のマンダラ化",138,"経営会議・部門会議・1on1・朝礼・全体会議を8マスでマンダラ化し、目的・参加者・頻度・成果物を明確化する。\n\n【AI活用】Claudeで『現状の会議体を整理し、改善案をマンダラ形式で』。"],
  ["η","G7","第7部門 OKR 週次経営","OKRをAIで自動集計・可視化",144,"週次OKRデータをAIに集計させダッシュボード化。可視化されないOKRは続かない。\n\n【AI活用】Claude編 C3『Excelレポート自動生成』、Claude編 G2『経費・売上を定期集計』を応用。"],
  ["η","G8","第7部門 OKR 週次経営","四半期OKR振り返り ─ 社長が率先して矢面に立つ",152,"四半期末にOKRを総括し次期OKRを設計する型を確立。重要なのは、AIの分析結果に対して『社長自らが矢面に立ち、次のアクションを率先して引き受ける』姿勢。主体性の原則と仮説検証の原則の合流点。\n\n【AI活用】Claudeに四半期データを渡し『達成度分析と次期OKR提案。社長が率先すべきアクション3つを名指しで』。"],
  ["η","H1","第8部門 Kaizen 継続改革","原則を学ぶ：無常 ─ 経営は倒産が正常、継続は異常",100,"第8原則『継続改革』。無常の知恵とは『この世は日々新たであり、常に改革をもって対応する』。経営は倒産が正常、継続は異常 ── 無常を前提とした強烈な危機感が、継続改革の燃料となる。経営計画発表会は完成のセレモニーではなく、改革の継続を宣言する場。\n\n【学び方】月次勉強会 第8原則セッション。"],
  ["η","H2","第8部門 Kaizen 継続改革","毎週1つのKaizenを選ぶ",110,"改善の一手を毎週月曜に1つ選び、コミュニティに宣言する習慣を作る。小さな改善の積み重ねが組織を変える。\n\n【AI活用】Claudeに今週の課題を相談し『最も効果的な小さな改善案を1つ』。"],
  ["η","H3","第8部門 Kaizen 継続改革","【AI組織導入】Kaizen記録をAIで蓄積",120,"改善履歴をAIに溜め年次で振り返り可能にする。属人化していたKaizenの知恵を組織資産化。\n\n【関連クエスト】Google編 G4『議事録から主要議題抽出』、Google編 H7『属人知識を共有資産に』。"],
  ["η","H4","第8部門 Kaizen 継続改革","社員からの改善提案 ─ 3つのイノベーション軸でAI分類",130,"ボトムアップで改善案が上がる仕組みを構築。AIが提案を『3つのイノベーション(意識のイノベーション・仕組みのイノベーション・商品のイノベーション)』軸で分類・優先順位付けする。\n\n【AI活用】Googleフォーム→Claudeで『提案を意識/仕組み/商品の3軸で分類。各軸ごとに優先度ランキング』。月次で社長レビュー。"],
  ["η","H5","第8部門 Kaizen 継続改革","【AI組織導入】マンダラクエスト評価制度の運用 ─ 自走型データ組織の実現",140,"ゲーミフィケーション評価で改善文化を育てる。社員ごとのクエスト達成度を可視化し表彰するだけでなく、AIによるフィードバックと承認(CFR)が日常的に循環する『自走型データ組織』の実現を目指す。\n\n【関連クエスト】各編ぜんぶ。第5部門E8で導入したものを、循環する組織OSへと進化させるフェーズ。"],
  ["η","H6","第8部門 Kaizen 継続改革","経営計画発表会＋AI質疑応答予測＋Googleサイトで社内ポータル化",152,"年に1回、全社員・取引先・地域を巻き込んだ経営計画発表会を開催する。1年の改革を宣言する儀式。AIで想定質疑応答を事前に予測しておき、本番に備える。さらに発表内容をGoogleサイトで社内ポータル化し、社員がスマホで常に経営計画を見られる状態にする。\n\n【AI活用】Google編 F1『NotebookLMでスライド生成』、Google編 F4『スピーカーノート自動作成』。Claudeに『本発表で出そうな質問TOP30とその回答』を作成させ、社長が事前に頭に入れる。"],
  ["η","H7","第8部門 Kaizen 継続改革","【AI組織導入】月次Kaizen勉強会の主催",162,"月1回、全社で改善事例を共有する場を運営。OKRコミュニティの月次勉強会と連動させる。\n\n【関連クエスト】Claude編 F6『AI自己学習の仕組み化』、Google編 G7『ノートブックガイド』で勉強会資料を効率化。"],
  ["η","H8","第8部門 Kaizen 継続改革","Kaizenを地域経営者に伝える",175,"自社のKaizen文化を地域の経営者・後進経営者に共有・指導する。地域のリーダーとして無常の知恵を伝える。学んだ者が次に教える、これが完結の形。\n\n【AI活用】Google編 H3『書籍やSNS投稿用ドラフト』、Claude編 F4『スキルを自動作成』で教材化を効率化。"]
];

// =============== η 称号マスタ A〜H ===============
var ETA_AREA_TITLES = [
  ["η","A","敬天愛人","けいてんあいじん","天を敬い人を愛する経営。理念を社員一人ひとりに浸透させ、フィロソフィに基づいた判断を全社で共有することで、企業が世界規模に成長した事例があります。理念経営の到達点を象徴する四字熟語。"],
  ["η","B","世界一の覚悟","せかいいちのかくご","『世界一になる』と宣言した町工場が、世界ブランドへと成長した事例があります。社長方針とは戦略ではなく覚悟の宣言である ── そのことを示す称号。"],
  ["η","C","論語と算盤","ろんごとそろばん","『道徳と算盤(利益)は両立する』。明治期に約500社の設立に関わり、日本資本主義の基礎を築いた事例があります。財務とは数字管理ではなく、道徳と利益の両立であるという経営哲学を象徴。"],
  ["η","D","レールを敷く者","レールをしくもの","鉄道事業に住宅・百貨店・娯楽を組み合わせ、『沿線そのものに顧客を生み出す』ビジネスモデルを発明した事例があります。商品を売るのではなく、流れと需要を新たに創造する者の称号。"],
  ["η","E","文化醸成","ぶんかじょうせい","『自由闊達にして愉快なる理想工場』を社是に掲げ、企業文化を世界ブランドにまで昇華させた事例があります。組織文化を時間をかけて醸成する、その営みを象徴する称号。"],
  ["η","F","人をつくる","ひとをつくる","『物をつくる前に人をつくる』。家電量販を国民事業に育て、政経塾まで創設した事例があります。商売は人なり、企業は人財でしか持続的に強くならないという真理を象徴。"],
  ["η","G","挑戦と責任","ちょうせんとせきにん","夕食はメザシ、朝7時に出社、全社員に毎日の計画書を書かせて再建を実現した事例があります。挑戦と責任を毎日確認する規律 ── まさにOKRの先駆けとなった経営姿勢を象徴。"],
  ["η","H","苦集滅道","くしゅうめつどう","工場現場の小さな改善を繰り返し、世界語『KAIZEN』を生んだ事例があります。苦(現状) → 集(原因) → 滅(目標) → 道(実践) のサイクルを回し続ける、継続改革の真髄を象徴。"]
];

var ETA_SPECIAL_TITLES = [
  { threshold: 100, name: "経世済民", yomi: "けいせいさいみん", story: "世を経め民を済う、それが経営者の本懐。8部門の真髄をすべて修めた者の称号。" },
  { threshold: 150, name: "不世出の経営者", yomi: "ふせいしゅつのけいえいしゃ", story: "世にも稀な、何百年に一人の経営者。歴史に名を刻む経営の伝説。" }
];

// =============== η エリア仏教思想テーマ ===============
var ETA_AREA_THEMES = {
  "A": { category: "Purpose 経営理念", wisdom: "空の知恵", principle: "相互依存の原則", essence: "全てのものは実体がなく、関わり合いで出現する。理念は顧客・社員・取引先・地域との縁の中で生まれる。" },
  "B": { category: "Leadership 社長方針", wisdom: "マンダラの知恵", principle: "統合力の原則", essence: "全体と部分と関係性を同時に認識し、適切行動をする。社長は8部門を一枚のマンダラとして見渡し、全体最適を判断する。" },
  "C": { category: "Finance 財務", wisdom: "苦集滅道の知恵", principle: "あるべき姿の原則", essence: "結果を認識し、原因を発見し、目標設定し、実践活動をする。財務は逆算思考(プル思考)で経常利益から売上を導く。" },
  "D": { category: "Growth 商品・顧客開発", wisdom: "中道の知恵", principle: "開発力の原則", essence: "限界まで考え抜いてから手放す(守・破・離)。極端を避けつつ強い意志を持つ姿勢が、ひらめきを生む。" },
  "E": { category: "Team Building 組織・社風", wisdom: "唯識の知恵", principle: "感謝(環境整備)の原則", essence: "あなたの心が経営環境を作っているという心の真理。組織の空気は社長の心の状態が作る。素直な心で結果を受け止める。" },
  "F": { category: "People 人財育成", wisdom: "縁起の知恵", principle: "主体性(自己実現)の原則", essence: "この世の全ては、あなたの関わり合いで出現する。教育は教えるのではなく、強みを伸ばし主体性を引き出すこと。" },
  "G": { category: "OKR 週次経営", wisdom: "禅定の知恵", principle: "仮説検証の原則", essence: "心を散らさず調えると世の中の変化の真相が得られる。PDCAではなくCAPDサイクル。現状の差異の認識から始める。" },
  "H": { category: "Kaizen 継続改革", wisdom: "無常の知恵", principle: "継続改革の原則", essence: "経営は倒産が正常、継続は異常。日々新たであり、3つのイノベーション(意識・仕組み・商品)で改革し続ける。" }
};

// η ゴール定義
var ETA_GOAL_INFO = {
  id: "η",
  name: "マンダラ経営マスターコース",
  shortName: "経営計画",
  color: "#D81B60",
  theme: "経営計画書をマンダラで描き切る",
  target: "経営者・士業・コーチ"
};

// =============== η 8人の経営者キャラ（歴史に名を残した日本の経済人） ===============
// キャラマスタ列: [charaId, 名前, 肩書, iconURL(空), 役割, 思想プロンプト, Chat表示名,
//                  有効/無効, 審査スタンス, 登場演出URL, クリア演出URL, 称号演出URL, 登場固定セリフ]
// 各エリアの「称号」のモデルとなった経営者を割当（ETA_AREA_TITLES と対応）
//   A: 敬天愛人          → 稲盛和夫（京セラ・JAL再生）
//   B: 世界一の覚悟      → 本田宗一郎（ホンダ・町工場→世界）
//   C: 論語と算盤        → 渋沢栄一（日本資本主義の父・約500社）
//   D: レールを敷く者    → 小林一三（阪急東宝・沿線文化）
//   E: 文化醸成          → 井深大（ソニー・自由闊達にして愉快なる理想工場）
//   F: 人をつくる        → 松下幸之助（パナソニック・PHP・松下政経塾）
//   G: 挑戦と責任        → 土光敏夫（東芝・経団連・メザシの土光）
//   H: 苦集滅道          → 大野耐一（トヨタ生産方式・KAIZEN）
var ETA_BOSSES = [
  ['CH68','稲盛 和夫','京セラ創業者・経営の神様',         '','η-A エリア審査（Purpose 経営理念）',
    '京セラ・第二電電（KDDI）創業、JAL再生を成し遂げた経営者。「敬天愛人」「動機善なりや、私心なかりしか」を掲げ、フィロソフィに基づく判断を全社員に浸透させた。判断基準は常に「人間として何が正しいか」。',
    '稲盛 和夫','有効','厳しめ','','','','心を高め、経営を伸ばす。動機善なりや、私心なかりしか'],
  ['CH69','本田 宗一郎','ホンダ創業者・夢追い人',         '','η-B エリア審査（Leadership 社長方針）',
    '町工場から世界のホンダへ。「夢を実現する力」を会社の核に据え、F1参戦・マン島TT優勝・世界一の二輪メーカーへの覚悟を社長方針として宣言。「やってみもせんで」が口癖の現場主義者。',
    '本田 宗一郎','有効','熱血','','','','夢があるから、走れる。やってみもせんで何が分かるか'],
  ['CH70','渋沢 栄一','日本資本主義の父',                 '','η-C エリア審査（Finance 財務）',
    '明治期に約500社の設立に関わり、第一国立銀行・東京証券取引所・東京商法会議所など日本経済の基盤を築いた。「論語と算盤」を著し、道徳経済合一説を実践。利益は手段、社会への貢献が目的。',
    '渋沢 栄一','有効','標準','','','','道徳と算盤、これを両立してこそ事業なり'],
  ['CH71','小林 一三','阪急東宝グループ創業者',           '','η-D エリア審査（Growth 商品・顧客開発）',
    '阪急電鉄を中核に、沿線住宅・宝塚歌劇・百貨店・東宝映画と業態を横展開。「沿線そのものに顧客を生み出す」ビジネスモデルを発明した。商品ではなく、流れと需要を新たに創造する商人。',
    '小林 一三','有効','標準','','','','商品より、流れを創るのじゃ。沿線に文化を植え付けよ'],
  ['CH72','井深 大','ソニー創業者',                       '','η-E エリア審査（Team Building 組織・社風）',
    '盛田昭夫とともに東京通信工業（後のソニー）を創業。設立趣意書に「自由闊達にして愉快なる理想工場の建設」を掲げ、社員一人ひとりの自由な発想を引き出す組織文化を確立。トランジスタラジオ・ウォークマンを生んだ土壌の創設者。',
    '井深 大','有効','甘め','','','','自由闊達にして愉快なる理想工場。文化が革新を生む'],
  ['CH73','松下 幸之助','パナソニック創業者・経営の神様','','η-F エリア審査（People 人財育成）',
    '松下電器（パナソニック）創業者。「物をつくる前に人をつくる」を経営の根幹に据え、PHP研究所・松下政経塾を創設して人材育成と国家経営の哲学を残した。「商売は人なり」の真理を体現した経営の神様。',
    '松下 幸之助','有効','標準','','','','商売は人なり。物をつくる前に、人をつくる'],
  ['CH74','土光 敏夫','東芝再建・経団連会長・メザシの土光','','η-G エリア審査（OKR 週次経営）',
    '石川島播磨重工業・東芝の再建を成し遂げ、経団連会長・第二臨時行政調査会会長を歴任。朝7時出社・夕食はメザシの質素な生活を貫きつつ、全社員に毎日の計画書を書かせて挑戦と責任を毎日確認するOKRの先駆け。',
    '土光 敏夫','有効','厳しめ','','','','メシより仕事じゃ。挑戦と責任、自分が取れ'],
  ['CH75','大野 耐一','トヨタ生産方式の父・KAIZENの祖','','η-H エリア審査（Kaizen 継続改革）',
    'トヨタ自動車副社長として「トヨタ生産方式（TPS）」を体系化。ジャストインタイム・自働化・「なぜ」を5回繰り返す問題解決法を確立。世界語「KAIZEN」を生んだ現場改善の哲人。継続的改革の真髄を示す。',
    '大野 耐一','有効','厳しめ','','','','なぜ？を5回問え。改善は工場の床から生まれる']
];

// η 用 AI審査エリア割当（CH68-CH75 = ETA_BOSSES の8人を各エリアに割当）
var ETA_AI_AREA_ASSIGN = [
  ["η", "A", "CH68"],  // 稲盛 和夫
  ["η", "B", "CH69"],  // 本田 宗一郎
  ["η", "C", "CH70"],  // 渋沢 栄一
  ["η", "D", "CH71"],  // 小林 一三
  ["η", "E", "CH72"],  // 井深 大
  ["η", "F", "CH73"],  // 松下 幸之助
  ["η", "G", "CH74"],  // 土光 敏夫
  ["η", "H", "CH75"]   // 大野 耐一
];

// ============================================================
// [ETA-1] η クエストマスタへ 64件 追加（既存 η行は削除して上書き）
// ============================================================
function appendEtaQuests() {
  var ss = SpreadsheetApp.openById(SS_ID);
  var sh = ss.getSheetByName('クエストマスタ');
  if (!sh) {
    SpreadsheetApp.getUi().alert('クエストマスタが見つかりません');
    return;
  }
  if (sh.getLastRow() >= 2) {
    var data = sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
    var rowsToDelete = [];
    for (var i = data.length - 1; i >= 0; i--) {
      if (String(data[i][0]).trim() === 'η') rowsToDelete.push(i + 2);
    }
    rowsToDelete.forEach(function(rowNum) { sh.deleteRow(rowNum); });
    Logger.log('既存η行を削除: ' + rowsToDelete.length + '件');
  }
  var headers = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
  var colCount = headers.length;
  var rows = ETA_QUEST_V1.map(function(q) {
    var row = new Array(colCount).fill('');
    row[0] = q[0]; row[1] = q[1];
    if (colCount >= 3) row[2] = q[2];
    if (colCount >= 4) row[3] = q[3];
    if (colCount >= 5) row[4] = q[4];
    if (colCount >= 6) row[5] = q[5];
    return row;
  });
  sh.getRange(sh.getLastRow() + 1, 1, rows.length, colCount).setValues(rows);
  SpreadsheetApp.flush();
  Logger.log('appendEtaQuests 完了: ' + rows.length + '件追加');
  try { SpreadsheetApp.getUi().alert('η クエスト ' + rows.length + '件をクエストマスタに追加しました'); } catch(e) {}
}

// ============================================================
// [ETA-2] η 称号マスタへ 8件 追加
// ============================================================
function appendEtaAreaTitles() {
  var ss = SpreadsheetApp.openById(SS_ID);
  var sh = ss.getSheetByName('称号マスタ（エリア）');
  if (!sh) { SpreadsheetApp.getUi().alert('称号マスタ（エリア）が見つかりません。先に S10 を実行してください'); return; }
  if (sh.getLastRow() >= 2) {
    var data = sh.getRange(2, 1, sh.getLastRow() - 1, 4).getValues();
    var rowsToDelete = [];
    for (var i = data.length - 1; i >= 0; i--) {
      if (String(data[i][0]).trim() === 'η') rowsToDelete.push(i + 2);
    }
    rowsToDelete.forEach(function(rowNum) { sh.deleteRow(rowNum); });
  }
  var rows = ETA_AREA_TITLES.map(function(t) {
    return [t[0], t[1], t[2], '《' + t[2] + '》(' + t[3] + ') ' + (t[4] || '').substring(0, 100)];
  });
  sh.getRange(sh.getLastRow() + 1, 1, rows.length, 4).setValues(rows);
  sh.getRange(sh.getLastRow() - rows.length + 1, 1, rows.length, 4).setBackground('#FCE4EC');
  SpreadsheetApp.flush();
  Logger.log('appendEtaAreaTitles 完了: ' + rows.length + '件追加');
  try { SpreadsheetApp.getUi().alert('η 称号 ' + rows.length + '件を称号マスタ（エリア）に追加しました'); } catch(e) {}
}

// ============================================================
// [ETA-3a] η 8人の経営者キャラ をキャラマスタへ追加
//   既存ID（CH68-CH75）があれば iconURL以外を更新、無ければ新規追加
//   iconURL は後で REGI スクリプト等で Drive→re-gi.jp 取込時に埋める
// ============================================================
function appendEtaBosses() {
  var ss = SpreadsheetApp.openById(SS_ID);
  var sh = ss.getSheetByName(SHEET_CHARA_MASTER);
  if (!sh) { SpreadsheetApp.getUi().alert('キャラマスタが見つかりません'); return; }

  var lastCol = sh.getLastColumn();
  var existIds = [];
  if (sh.getLastRow() >= 2) {
    existIds = sh.getRange(2, 1, sh.getLastRow() - 1, 1).getValues()
      .map(function(r) { return String(r[0]).trim(); });
  }
  var added = 0, updated = 0;
  ETA_BOSSES.forEach(function(c) {
    if (existIds.indexOf(c[0]) >= 0) {
      // 既存 → 更新（iconURL列はスキップ）
      var rowIdx = existIds.indexOf(c[0]) + 2;
      for (var i = 0; i < c.length && i < lastCol; i++) {
        if (i === 3) continue;  // iconURL列は触らない
        sh.getRange(rowIdx, i + 1).setValue(c[i]);
      }
      updated++;
    } else {
      // 新規
      var row = new Array(lastCol).fill('');
      for (var i = 0; i < c.length && i < lastCol; i++) row[i] = c[i];
      sh.getRange(sh.getLastRow() + 1, 1, 1, lastCol).setValues([row]);
      added++;
    }
  });
  SpreadsheetApp.flush();
  Logger.log('appendEtaBosses 完了: 追加=' + added + ' 更新=' + updated);
  try {
    SpreadsheetApp.getUi().alert(
      'キャラマスタに η経済人8体 ' + added + '体追加 / ' + updated + '体更新\n\n' +
      '・CH68 稲盛 和夫（A）\n' +
      '・CH69 本田 宗一郎（B）\n' +
      '・CH70 渋沢 栄一（C）\n' +
      '・CH71 小林 一三（D）\n' +
      '・CH72 井深 大（E）\n' +
      '・CH73 松下 幸之助（F）\n' +
      '・CH74 土光 敏夫（G）\n' +
      '・CH75 大野 耐一（H）\n\n' +
      '次のステップ: アイコン画像を Driveフォルダに配置 →\n' +
      'REGI3D（既存）または ETA9（追加予定）で re-gi.jp に一括アップロード'
    );
  } catch(e) {}
}

// ============================================================
// [ETA-3] AI審査エリア割当 η×8 追加
// ============================================================
function appendEtaAIAreaAssign() {
  var ss = SpreadsheetApp.openById(SS_ID);
  var sh = ss.getSheetByName('AI審査エリア割当');
  if (!sh) { SpreadsheetApp.getUi().alert('AI審査エリア割当シートが見つかりません。先に AI2 を実行してください'); return; }
  if (sh.getLastRow() >= 2) {
    var data = sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
    var rowsToDelete = [];
    for (var i = data.length - 1; i >= 0; i--) {
      if (String(data[i][0]).trim() === 'η') rowsToDelete.push(i + 2);
    }
    rowsToDelete.forEach(function(rowNum) { sh.deleteRow(rowNum); });
  }
  var lastCol = sh.getLastColumn();
  var rows = ETA_AI_AREA_ASSIGN.map(function(t) {
    var row = new Array(lastCol).fill('');
    row[0] = t[0]; row[1] = t[1]; row[2] = t[2];
    return row;
  });
  sh.getRange(sh.getLastRow() + 1, 1, rows.length, lastCol).setValues(rows);
  SpreadsheetApp.flush();
  Logger.log('appendEtaAIAreaAssign 完了: ' + rows.length + '件追加');
  try {
    SpreadsheetApp.getUi().alert(
      'η AI審査割当 ' + rows.length + '件を追加しました\n' +
      '※ 全エリア CH01（大塚麗夏）にデフォルト設定。\n' +
      '  経営者向けキャラに変更したい場合はシートを直接編集してください。');
  } catch(e) {}
}

// ============================================================
// [ETA-4] グループマスタへ mandala_business 追加
// ============================================================
function appendEtaGroupMaster() {
  var ss = SpreadsheetApp.openById(SS_ID);
  var sh = ss.getSheetByName(SHEET_GROUP_MASTER);
  if (!sh) { SpreadsheetApp.getUi().alert('グループマスタが見つかりません。先に GR1 を実行してください'); return; }
  var data = sh.getRange(2, 1, Math.max(1, sh.getLastRow() - 1), sh.getLastColumn()).getValues();
  for (var i = 0; i < data.length; i++) {
    if (String(data[i][0]).trim() === 'mandala_business') {
      SpreadsheetApp.getUi().alert('mandala_business は既に登録済みです');
      return;
    }
  }
  var lastCol = sh.getLastColumn();
  var newRow = new Array(lastCol).fill('');
  newRow[0] = 'mandala_business';
  newRow[1] = 'マンダラ経営マスターコース';
  if (lastCol >= 3) newRow[2] = 'brand_sub';
  // 列: A groupId / B groupName / C 種別 / D chatSpaceId / E chatWebhookUrl
  //     F 開始日 / G 終了予定日 / H ステータス / I 親グループID / J 説明・備考
  //   ※ 配列は0始まり。以前ここが1列ずれており H(ステータス) に説明文が入って
  //     「非active」扱いとなり、コホート一覧から消える不具合があった（2026-07修正）
  if (lastCol >= 6)  newRow[5] = new Date();   // F 開始日
  if (lastCol >= 8)  newRow[7] = 'active';     // H ステータス
  if (lastCol >= 10) newRow[9] = 'η経営者向け申込制コース。Chat Space/Webhookは塾長手動設定'; // J 説明・備考
  sh.getRange(sh.getLastRow() + 1, 1, 1, lastCol).setValues([newRow]);
  SpreadsheetApp.flush();
  Logger.log('appendEtaGroupMaster 完了');
  try {
    SpreadsheetApp.getUi().alert('mandala_business グループを追加しました\n※ Chat Space/Webhookは別途塾長が手動設定してください');
  } catch(e) {}
}

// ============================================================
// [ETA-5] ゴール定義シートに η×8エリア を追加（既存α〜ζは保護）
// ============================================================
function appendEtaGoalDefinition() {
  var ss = SpreadsheetApp.openById(SS_ID);
  var sh = ss.getSheetByName('ゴール定義');
  if (!sh) {
    SpreadsheetApp.getUi().alert('ゴール定義シートが見つかりません。先に menu_11c (setupGoalDefinitions) を実行してください');
    return;
  }
  // 既存η行を削除して上書き
  if (sh.getLastRow() >= 2) {
    var data = sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
    var rowsToDelete = [];
    for (var i = data.length - 1; i >= 0; i--) {
      if (String(data[i][0]).trim() === 'η') rowsToDelete.push(i + 2);
    }
    rowsToDelete.forEach(function(rowNum) { sh.deleteRow(rowNum); });
    Logger.log('既存η行削除: ' + rowsToDelete.length + '件');
  }
  // η × 8エリアを追加（テーマ・称号は ETA_AREA_THEMES / ETA_AREA_TITLES から）
  var lastCol = sh.getLastColumn();
  var rows = [];
  ['A','B','C','D','E','F','G','H'].forEach(function(a) {
    var theme = ETA_AREA_THEMES[a] || {};
    var title = ETA_AREA_TITLES.filter(function(t) { return t[1] === a; })[0];
    var titleName = title ? title[2] : '';
    var row = new Array(lastCol).fill('');
    row[0] = 'η';
    row[1] = 'マンダラ経営マスターコース';
    row[2] = a;
    if (lastCol >= 4) row[3] = theme.category || '';      // テーマ
    if (lastCol >= 5) row[4] = 100;                        // 達成条件%
    if (lastCol >= 6) row[5] = '';                         // 獲得リザルト（任意）
    if (lastCol >= 7) row[6] = titleName ? '《' + titleName + '》' : ''; // 獲得称号
    rows.push(row);
  });
  sh.getRange(sh.getLastRow() + 1, 1, rows.length, lastCol).setValues(rows);
  sh.getRange(sh.getLastRow() - rows.length + 1, 1, rows.length, lastCol).setBackground('#FCE4EC');
  SpreadsheetApp.flush();
  Logger.log('appendEtaGoalDefinition 完了: ' + rows.length + '件追加');
  try {
    SpreadsheetApp.getUi().alert('ゴール定義シートに η×8エリア を追加しました');
  } catch(e) {}
}

// ============================================================
// [ETA-MASTER] η 全セットアップ実行
// ============================================================
function setupEtaAll() {
  var ui = SpreadsheetApp.getUi();
  var resp = ui.alert(
    'η マンダラ経営マスターコース セットアップ',
    '以下を一括実行します:\n' +
    '① クエストマスタへ 64件追加\n' +
    '② 称号マスタ（エリア）へ 8件追加\n' +
    '③ 8人の経営者キャラ（CH68-CH75）追加\n' +
    '④ AI審査エリア割当へ 8件追加\n' +
    '⑤ グループマスタに mandala_business 追加\n' +
    '⑥ ゴール定義に η×8 追加\n\n' +
    '既存の η行は削除して上書きします。実行しますか？',
    ui.ButtonSet.OK_CANCEL);
  if (resp !== ui.Button.OK) return;
  var report = [];
  try { appendEtaQuests();         report.push('① クエスト 64件 OK'); } catch(e) { report.push('① クエスト エラー: ' + e.message); }
  try { appendEtaAreaTitles();     report.push('② 称号 8件 OK');     } catch(e) { report.push('② 称号 エラー: ' + e.message); }
  try { appendEtaBosses();         report.push('③ 経営者キャラ 8体 OK'); } catch(e) { report.push('③ キャラ エラー: ' + e.message); }
  try { appendEtaAIAreaAssign();   report.push('④ AI割当 8件 OK');   } catch(e) { report.push('④ AI割当 エラー: ' + e.message); }
  try { appendEtaGroupMaster();    report.push('⑤ グループ追加 OK'); } catch(e) { report.push('⑤ グループ エラー: ' + e.message); }
  try { appendEtaGoalDefinition(); report.push('⑥ ゴール定義 8件 OK'); } catch(e) { report.push('⑥ ゴール定義 エラー: ' + e.message); }
  ui.alert('η セットアップ完了', report.join('\n'), ui.ButtonSet.OK);
}

// ============================================================
// [ETA-FORM-1] η申込フォーム作成
// ============================================================
function createEtaEnrollForm() {
  var ss = SpreadsheetApp.openById(SS_ID);
  var fileSheet = ss.getSheetByName(SHEET_FILE);
  var form = FormApp.create('η マンダラ経営マスターコース 申込フォーム');
  form.setDescription([
    '【マンダラ経営マスターコース 申込】',
    '',
    '対象: 経営者・士業・コーチ向けのオプションコース',
    '内容: 8部門×8マス = 64クエストで経営計画書をマンダラ化',
    '',
    'すでに みんなのAI実践塾 / マンダラチャート®協会 にご登録の方が対象です。',
    '送信後、自動でηゴールが追加されマンダラチャートが生成されます。'
  ].join('\n'));
  form.setCollectEmail(false);
  try { form.setRequireLogin(false); } catch(e) {}
  form.setLimitOneResponsePerUser(false);
  form.addTextItem().setTitle('メンバーID（必須）').setHelpText('登録時に発行された数字のID（例: 2001）').setRequired(true);
  form.addTextItem().setTitle('お名前（確認用）').setRequired(true);
  form.addParagraphTextItem().setTitle('意気込み・経営課題（任意）').setHelpText('現在の経営の関心事・解決したい課題などお気軽にどうぞ');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, SS_ID);
  var renamed = false;
  ss.getSheets().forEach(function(s) {
    if (s.getName().indexOf('フォームの回答') === 0 && !renamed) {
      s.setName('η申込_raw');
      renamed = true;
    }
  });
  fileSheet.getRange('A28').setValue('η申込フォームURL（編集）');
  fileSheet.getRange('B28').setValue(form.getEditUrl());
  fileSheet.getRange('A29').setValue('η申込フォームURL（回答）');
  fileSheet.getRange('B29').setValue(form.getPublishedUrl());
  SpreadsheetApp.flush();
  Logger.log('η申込フォーム作成完了: ' + form.getPublishedUrl());
  try {
    SpreadsheetApp.getUi().alert(
      'η申込フォーム作成完了\n\n回答URL（メンバー共有用）:\n' + form.getPublishedUrl() +
      '\n\n次の手順: ETA3 でトリガーを設定してください'
    );
  } catch(e) {}
}

// ============================================================
// [ETA-FORM-2] η申込フォーム トリガー設定
// ============================================================
function setupEtaFormTrigger() {
  var ss = SpreadsheetApp.openById(SS_ID);
  var fileSheet = ss.getSheetByName(SHEET_FILE);
  var editUrl = String(fileSheet.getRange('B28').getValue() || '').trim();
  if (!editUrl) {
    SpreadsheetApp.getUi().alert('η申込フォームURLがB28に未設定。先に ETA2 を実行してください');
    return;
  }
  ScriptApp.getProjectTriggers().forEach(function(t) {
    if (t.getHandlerFunction() === 'onEtaFormSubmit') ScriptApp.deleteTrigger(t);
  });
  var form = FormApp.openByUrl(editUrl);
  ScriptApp.newTrigger('onEtaFormSubmit').forForm(form).onFormSubmit().create();
  Logger.log('η申込フォームトリガー設定完了');
  try { SpreadsheetApp.getUi().alert('トリガー設定完了\nフォーム送信時に自動でηゴール追加されます'); } catch(e) {}
}

// ============================================================
// [ETA-FORM-3] η申込フォーム 送信時処理
// ============================================================
function onEtaFormSubmit(e) {
  try {
    var ss = SpreadsheetApp.openById(SS_ID);
    var resp = e.response;
    var ans = {};
    resp.getItemResponses().forEach(function(ir) {
      ans[ir.getItem().getTitle().split('（')[0].trim()] = ir.getResponse();
    });
    var memberId = String(ans['メンバーID'] || '').trim();
    if (!memberId) { Logger.log('η申込: メンバーID欠落'); return; }
    var userSh = ss.getSheetByName(SHEET_USER);
    if (!userSh || userSh.getLastRow() < 2) return;
    var member = null;
    var data = userSh.getRange(2, 1, userSh.getLastRow() - 1, COL_USER_LAST).getValues();
    for (var i = 0; i < data.length; i++) {
      if (String(data[i][COL_ID - 1]).trim() === memberId) { member = data[i]; break; }
    }
    if (!member) { Logger.log('η申込: メンバーID ' + memberId + ' が見つかりません'); return; }
    var nick      = String(member[COL_NICK - 1] || member[COL_NAME - 1] || '').trim() || 'メンバー';
    var statusUrl = String(member[COL_STATUS - 1] || '').trim();
    Logger.log('η申込処理: ' + memberId + ' / ' + nick);

    // 既にη参加済みかチェック（重複申込時の上書き防止）
    var alreadyEnrolled = _getEnrolledGoalIds(memberId);
    var isNewEnrollment = !alreadyEnrolled['η'];

    try { enrollMemberInGoal(memberId, nick, 'η', 'マンダラ経営マスターコース'); } catch(eE) { Logger.log('  ηゴール参加エラー: ' + eE.message); }
    // 新規参加の場合のみマンダラ生成（既存ηマンダラは保護）
    if (isNewEnrollment && statusUrl) {
      try { buildMandalaSheet(_extractDriveId(statusUrl), memberId, 'η'); } catch(eM) { Logger.log('  ηマンダラ生成エラー: ' + eM.message); }
    } else if (!isNewEnrollment) {
      Logger.log('  ηマンダラ生成スキップ（既参加・進捗保護）');
    }
    try { addMemberToGroup(memberId, 'mandala_business'); } catch(eG) { Logger.log('  mandala_business加入エラー: ' + eG.message); }
    // 新規参加時のみウェルカムメール（既参加なら送らない・スパム防止）
    if (isNewEnrollment) {
      try { sendEtaWelcomeEmail(memberId); } catch(eW) { Logger.log('  ηウェルカムメール エラー: ' + eW.message); }
    } else {
      // 既参加の場合は確認メール（ゴール名併記）
      try {
        var em = String(member[COL_EMAIL - 1] || '').trim();
        if (em && em.indexOf('@') > 0) {
          GmailApp.sendEmail(em,
            '[マンダラ経営マスターコース] 申込確認',
            nick + ' さん\n\n' +
            'マンダラ経営マスターコース（' + _formatGoalLabel('η') + '）への申込を受け付けました。\n\n' +
            '✅ 既にηゴールに参加中ですので、現在の進捗（活動記録・EXP・ご褒美）はそのまま維持されています。\n' +
            'マイページから引き続きクエストを進めてください。\n\n' +
            '— マンダラチャート®協会',
            { name: 'マンダラ経営マスターコース' });
        }
      } catch(eDup) { Logger.log('  η既参加確認メールエラー: ' + eDup.message); }
    }
    Logger.log('✅ η申込処理完了: ' + memberId + ' (新規=' + isNewEnrollment + ')');
  } catch(err) {
    Logger.log('onEtaFormSubmit ERROR: ' + err.stack);
  }
}

// ============================================================
// [ETA-FORM-4] η ウェルカムメール（HTML）
// ============================================================
function sendEtaWelcomeEmail(memberId) {
  if (!memberId) return;
  try {
    var ss = SpreadsheetApp.openById(SS_ID);
    var userSh = ss.getSheetByName(SHEET_USER);
    if (!userSh || userSh.getLastRow() < 2) return;
    var nick = '', email = '', avatar = '', token = '';
    var rc = Math.max(COL_TOKEN, COL_AVATAR, COL_STATUS, COL_NICK, COL_NAME, COL_EMAIL);
    userSh.getRange(2, 1, userSh.getLastRow() - 1, rc).getValues().forEach(function(r) {
      if (String(r[COL_ID - 1]).trim() === String(memberId).trim()) {
        nick   = String(r[COL_NICK - 1] || r[COL_NAME - 1] || '').trim() || 'メンバー';
        email  = String(r[COL_EMAIL - 1] || '').trim();
        avatar = String(r[COL_AVATAR - 1] || '').trim();
        token  = String(r[COL_TOKEN - 1] || '').trim();
      }
    });
    if (!email || email.indexOf('@') < 0) return;
    var fsh = ss.getSheetByName(SHEET_FILE);
    var membersPageBase = fsh ? String(fsh.getRange(FILE_ROW_MEMBERS_PAGE_URL, 2).getValue() || '').trim() : '';
    var membersPageUrl = (membersPageBase && token)
      ? membersPageBase + (membersPageBase.indexOf('?') >= 0 ? '&' : '?') + 'token=' + encodeURIComponent(token)
      : '';
    var avatarTag = avatar
      ? '<img src="'+avatar+'" alt="" style="width:120px;height:120px;border-radius:50%;border:4px solid #D81B60;object-fit:cover;display:block;margin:0 auto 10px;box-shadow:0 4px 14px rgba(216,27,96,0.25)">'
      : '<div style="width:120px;height:120px;border-radius:50%;background:#FCE4EC;color:#880E4F;font-size:54px;line-height:120px;text-align:center;margin:0 auto 10px">★</div>';
    var subject = '[マンダラ経営マスターコース] ようこそ！64クエスト解放のご案内';
    var areaRows = '';
    ['A','B','C','D','E','F','G','H'].forEach(function(a) {
      var t = ETA_AREA_THEMES[a];
      var title = ETA_AREA_TITLES.filter(function(x) { return x[1] === a; })[0];
      areaRows +=
        '<tr><td style="padding:8px 10px;border-bottom:1px solid #f0f0f0">'+
          '<strong style="color:#D81B60">η-'+a+'</strong> '+_escHtml(t.category)+
          '<div style="font-size:.78rem;color:#888;margin-top:2px">'+_escHtml(t.wisdom)+' / '+_escHtml(t.principle)+'</div>'+
          (title ? '<div style="font-size:.78rem;color:#7B1FA2;margin-top:2px">称号: 《'+_escHtml(title[2])+'》</div>' : '')+
        '</td></tr>';
    });
    var html =
      '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>'+
      '<div style="font-family:\'Hiragino Sans\',\'Yu Gothic\',sans-serif;max-width:620px;margin:0 auto;background:#fff;border:1px solid #eee;border-radius:14px;overflow:hidden">'+
        '<div style="background:linear-gradient(135deg,#D81B60,#880E4F);color:#fff;padding:24px;text-align:center">'+
          '<div style="font-size:.85rem;letter-spacing:.15em;opacity:0.92">MANDALA BUSINESS MASTER</div>'+
          '<div style="font-size:1.4rem;font-weight:bold;margin-top:6px">マンダラ経営マスターコース 開講</div>'+
          '<div style="font-size:.95rem;margin-top:6px;opacity:0.95">経営計画書をマンダラで描き切る・全64クエスト</div>'+
        '</div>'+
        '<div style="padding:24px;color:#333;line-height:1.7">'+
          '<p>'+_escHtml(nick)+' さん、ご参加ありがとうございます。</p>'+
          '<p>本日より <strong style="color:#D81B60">η マンダラ経営マスターコース</strong> が解放されました。<br>'+
          '8部門 × 8マス = 64クエストで、経営計画書をマンダラとして描き切る道のりです。</p>'+
          '<div style="text-align:center;margin:18px 0">'+avatarTag+
            '<div style="font-weight:bold">'+_escHtml(nick)+' さん</div>'+
            '<div style="font-size:.82rem;color:#666;margin-top:4px">マンダラ経営マスターコース 入門</div>'+
          '</div>'+
          '<table style="width:100%;border-collapse:collapse;margin:18px 0;background:#FFF8E1;border-radius:10px;overflow:hidden">'+
            '<thead><tr style="background:#D81B60;color:#fff"><th style="padding:8px 10px;text-align:left">8部門の歩み</th></tr></thead>'+
            '<tbody>'+areaRows+'</tbody>'+
          '</table>'+
          '<div style="background:#F3E5F5;border-left:4px solid #D81B60;border-radius:6px;padding:14px 16px;margin:14px 0;color:#4A148C;font-size:.92rem;line-height:1.7">'+
            '<div style="font-weight:bold;margin-bottom:4px">&#x1F5FA; 最初の一歩</div>'+
            '・<strong>η-A1「原則を学ぶ：空の知恵と相互依存」</strong> から始めましょう<br>'+
            '・全64クエスト達成で <strong>経世済民</strong> の称号<br>'+
            '・8部門それぞれに「敬天愛人」「論語と算盤」など歴史に名を残した経営者の道'+
          '</div>'+
          // ▼ 昼活Meet 参加CTA（経営者・AI学習者交流会）
          '<div style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);border-radius:8px;padding:18px 20px;margin:18px 0;text-align:center;border:1px solid #81C784">'+
            '<div style="font-size:.85rem;color:#2E7D32;font-weight:bold;letter-spacing:.05em;margin-bottom:4px">&#x1F31E; 昼活 オンライン交流会</div>'+
            '<div style="font-size:1rem;color:#1B5E20;font-weight:bold;margin-bottom:4px">マンダラ経営者・AI学習者の交流の場</div>'+
          '<div style="font-size:.9rem;color:#2E7D32;font-weight:bold;margin-bottom:4px">毎週火曜 '+ETA_HIRUKATSU_TIME+'</div>'+
            '<div style="font-size:.82rem;color:#558B2F;margin-bottom:12px">本コース会員も自由にご参加いただけます。経営者同士の対話の場へぜひ。</div>'+
            '<a href="'+ETA_HIRUKATSU_MEET_URL+'" style="display:inline-block;padding:13px 30px;background:linear-gradient(135deg,#2E7D32,#1B5E20);color:#fff;text-decoration:none;border-radius:28px;font-weight:bold;letter-spacing:.04em;box-shadow:0 3px 10px rgba(46,125,50,0.3)">&#x1F4F9; 昼活 Meet に参加する</a>'+
            '<div style="font-size:.75rem;color:#666;margin-top:8px;word-break:break-all">'+_escHtml(ETA_HIRUKATSU_MEET_URL)+'</div>'+
          '</div>'+
          // ▼ AI 3編の案内（2026-08-28 追加・D決定）
          _etaAiSkillsBlock()+
          (membersPageUrl
            ? '<div style="text-align:center;margin-top:22px">'+
                '<a href="'+membersPageUrl+'" style="display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#D81B60,#880E4F);color:#fff;text-decoration:none;border-radius:28px;font-weight:bold;box-shadow:0 4px 14px rgba(216,27,96,0.35)">&#x25B6; マイページを開く</a>'+
              '</div>'
            : '')+
          '<p style="margin-top:24px;color:#666;font-size:.82rem;text-align:center">— マンダラチャート®協会 / みんなのAI実践塾</p>'+
        '</div>'+
      '</div>'+
      '</body></html>';
    var plainBody =
      nick + ' さん\n\n' +
      'マンダラ経営マスターコース へのご参加ありがとうございます。\n' +
      '8部門 × 64クエストで経営計画書をマンダラ化する道のりです。\n\n' +
      '【最初の一歩】η-A1「原則を学ぶ：空の知恵と相互依存」\n' +
      '【最終目標】100% 経世済民 / 150% 不世出の経営者\n\n' +
      '━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
      '▼ 昼活 オンライン交流会（マンダラ経営者・AI学習者の交流の場）\n' +
      '  Google Meet: ' + ETA_HIRUKATSU_MEET_URL + '\n' +
      '  ※ 本コース会員も自由にご参加いただけます\n' +
      '━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
      (membersPageUrl ? '▶ マイページ\n' + membersPageUrl + '\n\n' : '') +
      '— マンダラチャート®協会';
    try {
      GmailApp.sendEmail(email, subject, plainBody, { htmlBody: html, name: 'マンダラ経営マスターコース' });
      Logger.log('η ウェルカムメール送信(HTML): ' + email);
    } catch(eS) {
      Logger.log('η HTML送信失敗→プレーン送信: ' + eS.message);
      MailApp.sendEmail(email, subject, plainBody);
    }
  } catch(e) {
    Logger.log('sendEtaWelcomeEmail エラー: ' + e.message);
  }
}

// ============================================================
// メニュー用ラッパー
// ============================================================
function menu_ETA1_全セットアップ実行()  { setupEtaAll(); }
function menu_ETA1b_経営者キャラ8体追加() { appendEtaBosses(); }
function menu_ETA2_η申込フォーム作成()    { createEtaEnrollForm(); }
function menu_ETA3_η申込トリガー設定()    { setupEtaFormTrigger(); }
function menu_ETA4_デバッグ_ηウェルカムメールテスト() {
  var ui = SpreadsheetApp.getUi();
  var resp = ui.prompt('η ウェルカムメール テスト', 'メンバーIDを入力', ui.ButtonSet.OK_CANCEL);
  if (resp.getSelectedButton() !== ui.Button.OK) return;
  sendEtaWelcomeEmail(String(resp.getResponseText() || '').trim());
  ui.alert('送信完了（実行ログ参照）');
}
function menu_ETA5_デバッグ_η申込手動処理() {
  var ui = SpreadsheetApp.getUi();
  var resp = ui.prompt('η申込 手動処理', 'メンバーIDを入力', ui.ButtonSet.OK_CANCEL);
  if (resp.getSelectedButton() !== ui.Button.OK) return;
  var memberId = String(resp.getResponseText() || '').trim();
  if (!memberId) return;
  var ss = SpreadsheetApp.openById(SS_ID);
  var userSh = ss.getSheetByName(SHEET_USER);
  var nick = memberId, statusUrl = '';
  userSh.getRange(2, 1, userSh.getLastRow() - 1, COL_STATUS).getValues().forEach(function(r) {
    if (String(r[COL_ID - 1]).trim() === memberId) {
      nick = String(r[COL_NICK - 1] || r[COL_NAME - 1] || memberId);
      statusUrl = String(r[COL_STATUS - 1] || '');
    }
  });
  try { enrollMemberInGoal(memberId, nick, 'η', 'マンダラ経営マスターコース'); } catch(e) {}
  if (statusUrl) {
    try { buildMandalaSheet(_extractDriveId(statusUrl), memberId, 'η'); } catch(e) {}
  }
  try { addMemberToGroup(memberId, 'mandala_business'); } catch(e) {}
  try { sendEtaWelcomeEmail(memberId); } catch(e) {}
  ui.alert('完了（ログ参照）');
}

// ============================================================================
// η お試しコース（2026-05追加）
//   経営理念マンダラ体験版（30日間・エリアAのみ8マス）
//   営業ツール：マンダラ協会お試し→入門編→η本コース の橋渡し
// ============================================================================
// η の本体コホート。お試しでもここに加入させる（お試し判定はM列＝会員ステータス）
const ETA_MAIN_GROUP_ID = 'mandala_business';
// ↓ 旧・お試し専用コホート。過去に加入した人が居るため参照は残すが、新規加入には使わない
//    （MERGE1/MERGE2 で mandala_business に統合する対象）
const ETA_TRIAL_GROUP_ID = 'mandala_business_trial';
const ETA_TRIAL_GROUP_NAME = 'マンダラ経営お試し';
// お試し設計（2026-07 見直し）
//   ・30日 → 7日。締切が遠いと着手されない（実績: 30日で報告0件）
//   ・エリアA全8マス → A1・A2 の2マスだけ。
//     A3で「経営理念マンダラ＋MVV」が完成してしまい、本コースの中核成果を
//     無料で渡す設計になっていたため。体験は「原則を知る→自分の原点を書く」まで。
const ETA_TRIAL_DAYS = 7;
const ETA_TRIAL_AREA = 'A';                  // 解放するエリア（Purpose 経営理念）
const ETA_TRIAL_QUESTS = ['A1', 'A2'];       // そのうち実際に解放するマス
// 期限リマインドを送るタイミング（残り何日か）。
//   ※ 体験が7日間なので「7日前」だと初日に飛んでしまう。必ず ETA_TRIAL_DAYS 未満にすること
const ETA_TRIAL_REMIND_DAYS = 3;
// ※ 本コースの価格・決済リンクは、このファイル下部の
//   「η 本コースの料金と決済リンク」ブロック（ETA_PRICE_MONTHLY 他）が唯一の出どころ。
//   金額をここに直書きしないこと（2か所に散ると必ず食い違う）。
const SHEET_ETA_TRIAL = 'η_お試し管理';
const FILE_ROW_ETA_TRIAL_FORM_EDIT = 36; // ファイルシートB36
const FILE_ROW_ETA_TRIAL_FORM_PUB  = 37; // ファイルシートB37
// 昼活Meet URL（マンダラ経営者・AI学習者交流会・お試し会員も参加可）
// 変更時はここを書き換えるだけでη関連メールに自動反映
const ETA_HIRUKATSU_MEET_URL = 'https://meet.google.com/rqa-rwib-piv';
// 昼活の開催時間（毎週火曜）。案内メール・ポータル・スケジュールで共通に使う
const ETA_HIRUKATSU_TIME = '12:30〜13:50';

// ============================================================
//  η 本コースの料金と決済リンク（2026-08-09 定数化）
// ------------------------------------------------------------
//  価格改定・決済リンクの差し替えは、必ずこのブロックだけを直すこと。
//  メール文面は下の定数から自動で組み立てるので、
//  「片方だけ直して金額が食い違う」事故が起きない。
//
//  ★ コード.gs の PAYMENT_LINKS / MEMBER_PRICE_* は
//    「みんなのAI実践塾（16,500円／紹介13,200円）」用。
//    η は別商品（別価格・別決済リンク）なので絶対に混ぜない。
//
//  ・月払い 19,800円/月（税込）  … Squareの支払いリンクで決済
//  ・年払い 198,000円/年（税込） … 個別相談（メール）。フォーム決済はしない
//    どちらも LP /keiei/（70_3ポータル化/live/keiei_new.html）の表記と一致させること
//
//  Squareリンクは Script Properties で上書きできる（コード修正・push不要）:
//    ETA_PAY_URL_MONTHLY … 月払いの支払いリンク
//  設定・確認はメニュー「ETA-T9 η 決済リンク設定」から。
//  未設定のうちは、昇格案内メールが自動で
//  「塾長までご連絡ください」の文面に切り替わる（空リンクを出さない）。
// ============================================================
const ETA_PRICE_MONTHLY = 19800;   // 月払い（税込）
const ETA_PRICE_YEARLY  = 198000;  // 年払い（税込・10ヶ月分）
const ETA_PAY_PROP_MONTHLY = 'ETA_PAY_URL_MONTHLY';
// 月払い19,800円/月「マンダラ経営実践塾 月額」2026-08-09 確定
//   Script Properties（ETA_PAY_URL_MONTHLY）が設定されていればそちらが優先される
const ETA_PAY_URL_MONTHLY_FALLBACK = 'https://square.link/u/QAihDdJ4';
// 年払い・その他の相談先
const ETA_CONTACT_MAIL = 'info@mandalachart.jp';
// 表示用の短い価格表記（旧 ETA_PRICE_TEXT。金額の直書きをやめて派生させた）
const ETA_PRICE_TEXT = '月額 ' + Number(ETA_PRICE_MONTHLY).toLocaleString('ja-JP') + '円';

// 金額の表示用（3桁区切り）
function _etaPriceText(yen) {
  return Number(yen || 0).toLocaleString('ja-JP');
}

// η 月払いの決済リンク。未設定なら空文字を返す
function _etaPayUrl() {
  var url = '';
  try {
    url = String(PropertiesService.getScriptProperties()
                  .getProperty(ETA_PAY_PROP_MONTHLY) || '').trim();
  } catch(e) { Logger.log('_etaPayUrl プロパティ読取エラー: ' + e.message); }
  return url || String(ETA_PAY_URL_MONTHLY_FALLBACK || '').trim();
}

// ------------------------------------------------------------
//  入会のご案内ブロック（プレーンテキストメール用）
//    決済リンクが未設定のうちは、従来どおり「塾長へご連絡」を案内する。
//    リンクを入れた瞬間に「そのまま決済できる案内」に自動で切り替わる。
// ------------------------------------------------------------
function _etaJoinOfferPlain() {
  var pay = _etaPayUrl();
  var L = [];
  L.push('▶ マンダラ経営実践塾 本コース');
  L.push('　月払い ¥' + _etaPriceText(ETA_PRICE_MONTHLY) + '／月（税込・1社3名まで・いつでも解約OK）');
  if (pay) {
    L.push('　' + pay);
    L.push('　クレジットカードで、そのままお申し込みいただけます。');
  } else {
    L.push('　お手続きのご案内をお送りします。塾長までご連絡ください。');
  }
  L.push('');
  L.push('　年払い ¥' + _etaPriceText(ETA_PRICE_YEARLY) + '／年（税込・1年分を10ヶ月分の料金で）');
  L.push('　年払いは個別にご案内しています。' + ETA_CONTACT_MAIL + ' までご相談ください。');
  L.push('');
  L.push('【お手続きの流れ】');
  L.push('　① 上記からお支払い（月払い）／年払いはメールでご相談');
  L.push('　② 事務局で確認しだい、残り7部門・全64クエストを解放します');
  L.push('　③ 解放が済みしだい、本会員のご案内メールをお送りします');
  return L.join('\n');
}

// ------------------------------------------------------------
//  入会のご案内ブロック（HTMLメール用）
// ------------------------------------------------------------
function _etaJoinOfferHtml() {
  var pay = _etaPayUrl();
  var btn = pay
    ? '<div style="text-align:center;margin:16px 0 6px">'+
        '<a href="'+pay+'" style="display:inline-block;padding:13px 30px;background:#4A148C;color:#fff;text-decoration:none;border-radius:26px;font-weight:bold">'+
        '本コースに申し込む（月額 ¥'+_etaPriceText(ETA_PRICE_MONTHLY)+'）</a>'+
        '<div style="font-size:.78rem;color:#888;margin-top:6px">クレジットカードで、そのままお申し込みいただけます</div>'+
      '</div>'
    : '<div style="text-align:center;margin:16px 0 6px;color:#4A148C;font-weight:bold">'+
        'お手続きのご案内をお送りします。塾長までご連絡ください。'+
      '</div>';
  return '' +
    '<div style="background:#F3E5F5;border-left:5px solid #4A148C;padding:18px 20px;border-radius:6px;margin:18px 0;line-height:1.8">'+
      '<div style="font-weight:bold;color:#4A148C;margin-bottom:8px">&#x1F4B0; 本コースのご案内</div>'+
      '<div><strong>月払い ¥'+_etaPriceText(ETA_PRICE_MONTHLY)+'／月</strong>（税込・1社3名まで・いつでも解約OK）</div>'+
      btn +
      '<div style="border-top:1px solid #E1BEE7;margin-top:14px;padding-top:12px;font-size:.9rem">'+
        '<strong>年払い ¥'+_etaPriceText(ETA_PRICE_YEARLY)+'／年</strong>（1年分を10ヶ月分の料金で）<br>'+
        '年払いは個別にご案内しています。'+
        '<a href="mailto:'+ETA_CONTACT_MAIL+'" style="color:#4A148C">'+ETA_CONTACT_MAIL+'</a> までご相談ください。'+
      '</div>'+
    '</div>'+
    '<div style="background:#FAFAFA;border:1px solid #eee;border-radius:6px;padding:14px 18px;margin:14px 0;line-height:1.9;font-size:.9rem;color:#555">'+
      '<div style="font-weight:bold;color:#333;margin-bottom:4px">お手続きの流れ</div>'+
      '① 上記からお支払い（月払い）／年払いはメールでご相談<br>'+
      '② 事務局で確認しだい、残り7部門・全64クエストを解放します<br>'+
      '③ 解放が済みしだい、本会員のご案内メールをお送りします'+
    '</div>';
}

// ------------------------------------------------------------
//  [ETA-T9] η 決済リンクの設定・確認（Script Properties）
//    塾長がSquareで支払いリンクを作ったら、ここに貼るだけでよい。
//    コードの修正も push も再デプロイも要らない。
// ------------------------------------------------------------
function menu_ETA_T9_決済リンク設定() {
  var ui = SpreadsheetApp.getUi();
  var props = PropertiesService.getScriptProperties();
  var cur = String(props.getProperty(ETA_PAY_PROP_MONTHLY) || '').trim();
  var resp = ui.prompt(
    'η 決済リンク設定（月払い ¥' + _etaPriceText(ETA_PRICE_MONTHLY) + '）',
    '現在の設定:\n' + (cur || '（未設定：コード側の値「' + (ETA_PAY_URL_MONTHLY_FALLBACK || 'なし') + '」を使用中）') + '\n\n' +
    'Squareの支払いリンク（https://square.link/... ）を貼って OK を押してください。\n' +
    '・空欄のまま OK … 変更しません\n' +
    '・clear と入力 … 設定を削除します',
    ui.ButtonSet.OK_CANCEL);
  if (resp.getSelectedButton() !== ui.Button.OK) return;

  var input = String(resp.getResponseText() || '').trim();
  if (!input) { ui.alert('変更しませんでした。\n\n現在の実効リンク:\n' + (_etaPayUrl() || '（未設定）')); return; }
  if (input.toLowerCase() === 'clear') {
    props.deleteProperty(ETA_PAY_PROP_MONTHLY);
    ui.alert('設定を削除しました。\n\n現在の実効リンク:\n' + (_etaPayUrl() || '（未設定）'));
    return;
  }
  if (input.indexOf('https://') !== 0) {
    ui.alert('https:// で始まるURLを入力してください。\n入力値: ' + input);
    return;
  }
  props.setProperty(ETA_PAY_PROP_MONTHLY, input);
  ui.alert('✅ 決済リンクを設定しました\n\n' + input + '\n\n' +
           '次にη お試しの期限当日案内メールから、このリンクが案内されます。');
}

// ------------------------------------------------------------
//  [ETA-T9b] 昇格案内メールのプレビュー（送信せずログに出す）
// ------------------------------------------------------------
function menu_ETA_T9b_決済案内プレビュー() {
  var pay = _etaPayUrl();
  Logger.log('【η 決済リンク】' + (pay || '（未設定）'));
  Logger.log('【プレーン版】\n' + _etaJoinOfferPlain());
  try {
    SpreadsheetApp.getUi().alert(
      'η 入会案内プレビュー',
      '決済リンク: ' + (pay || '（未設定 → 「塾長までご連絡ください」の文面になります）') + '\n\n' +
      _etaJoinOfferPlain() + '\n\n※ HTML版は実行ログを見てください',
      SpreadsheetApp.getUi().ButtonSet.OK);
  } catch(e) {}
}

// ============================================================
// [ETA-T0] η お試し管理シート作成
// ============================================================
function setupEtaTrialSheet() {
  var ss = SpreadsheetApp.openById(SS_ID);
  var sh = ss.getSheetByName(SHEET_ETA_TRIAL);
  if (!sh) sh = ss.insertSheet(SHEET_ETA_TRIAL);
  var headers = [
    'メンバーID', 'ニックネーム', 'メール', '申込日時', '期限日',
    'ステータス', '7日前リマインド送信日', '期限当日案内送信日', '本会員昇格日', '一言メッセージ'
  ];
  sh.getRange(1, 1, 1, headers.length).setValues([headers])
    .setBackground('#4A148C').setFontColor('#FFFFFF').setFontWeight('bold');
  sh.setFrozenRows(1);
  [80, 140, 240, 160, 110, 110, 160, 160, 110, 280].forEach(function(w, i) {
    sh.setColumnWidth(i + 1, w);
  });
  SpreadsheetApp.flush();
  try { SpreadsheetApp.getActiveSpreadsheet().toast('η お試し管理シート作成完了', 'ETA-T0', 5); } catch(e) {}
}

// ============================================================
// [ETA-T1] グループマスタに mandala_business_trial 追加
// ============================================================
function appendEtaTrialGroup() {
  var ss = SpreadsheetApp.openById(SS_ID);
  var sh = ss.getSheetByName(SHEET_GROUP_MASTER);
  if (!sh) { SpreadsheetApp.getUi().alert('グループマスタが見つかりません'); return; }
  var data = sh.getRange(2, 1, Math.max(1, sh.getLastRow() - 1), 1).getValues();
  for (var i = 0; i < data.length; i++) {
    if (String(data[i][0]).trim() === ETA_TRIAL_GROUP_ID) {
      SpreadsheetApp.getUi().alert(ETA_TRIAL_GROUP_ID + ' は既に登録済みです'); return;
    }
  }
  var lastCol = sh.getLastColumn();
  var row = new Array(lastCol).fill('');
  row[0] = ETA_TRIAL_GROUP_ID;
  row[1] = ETA_TRIAL_GROUP_NAME;
  row[2] = 'brand_sub';
  if (lastCol >= 6) row[5] = new Date();
  if (lastCol >= 8) row[7] = 'active';
  if (lastCol >= 10) row[9] = 'η経営計画 お試し30日コース。エリアAのみ解放。営業ツール。';
  if (lastCol >= 11) row[10] = 'η';
  if (lastCol >= 12) row[11] = ETA_TRIAL_DAYS;
  sh.getRange(sh.getLastRow() + 1, 1, 1, lastCol).setValues([row]);
  SpreadsheetApp.flush();
  try { SpreadsheetApp.getUi().alert(ETA_TRIAL_GROUP_ID + ' をグループマスタに追加しました'); } catch(e) {}
}

// ============================================================
// [ETA-T2] η お試し申込フォーム作成
// ============================================================
// ------------------------------------------------------------
//  お試し申込フォームの説明文（作成時・更新時で同じ文面を使う）
//    ・価格は書かない（体験前に金額が出ると申込のハードルになる）
//    ・「完成」ではなく「入口の2ステップ」であることを明示
// ------------------------------------------------------------
function _etaTrialFormDescription() {
  return [
    '【マンダラ経営マスターコース ' + ETA_TRIAL_DAYS + '日間 無料体験】',
    '',
    '「なぜ、この会社をやっているのか」',
    'その問いに、あなた自身の言葉で答えるところから経営は始まります。',
    '',
    '■ 対象',
    '経営者・士業・コーチ・後継者の方',
    '',
    '■ 体験できること（' + ETA_TRIAL_DAYS + '日間）',
    'マンダラ経営の入口となる2つのステップに取り組んでいただきます。',
    '　A1　原則を学ぶ：空の知恵と相互依存',
    '　A2　創業の原点・承継の決意を言語化する',
    '',
    '経営理念は、自社だけで成り立つものではありません。',
    'お客様・社員・取引先・地域とのご縁の中で生まれます。',
    'まずはその原則に触れ、ご自身の原点を言葉にしてみてください。',
    '',
    '■ 進め方',
    '・お申込み後、あなた専用のマイページをメールでお送りします',
    '・マイページからA1・A2に取り組み、活動を報告できます',
    '・オンライン交流会「昼活」にもご参加いただけます（体験中の方も歓迎）',
    '',
    '■ 体験期間終了後',
    '続きに取り組みたい方には、本コースのご案内をお送りします。',
    '（体験期間が終わっても、昼活やお便りは引き続きご参加いただけます）',
    '',
    'すでに みんなのAI実践塾 / マンダラチャート®協会 にご登録の方も申込可能です。'
  ].join('\n');
}

// ------------------------------------------------------------
//  [ETA-T5] 既存のお試し申込フォームの説明文を今の仕様に更新
//    フォームを作り直さずに、文面だけ差し替える
// ------------------------------------------------------------
function menu_ETA_T5_お試しフォーム文面更新() {
  var ui = SpreadsheetApp.getUi();
  var ss = SpreadsheetApp.openById(SS_ID);
  var fileSheet = ss.getSheetByName(SHEET_FILE);
  var editUrl = fileSheet
    ? String(fileSheet.getRange(FILE_ROW_ETA_TRIAL_FORM_EDIT, 2).getValue() || '').trim() : '';
  if (!editUrl) {
    ui.alert('お試しフォームの編集URL（ファイルシート B' + FILE_ROW_ETA_TRIAL_FORM_EDIT + '）が未設定です');
    return;
  }
  var form;
  try {
    form = FormApp.openByUrl(editUrl);
  } catch (e) {
    ui.alert('フォームを開けませんでした:\n' + e.message);
    return;
  }
  var before = form.getDescription();
  var ok = ui.alert('お試しフォームの説明文を更新',
    '「' + form.getTitle() + '」の説明文を、現在の仕様（' + ETA_TRIAL_DAYS + '日間・' +
    ETA_TRIAL_QUESTS.join('と') + '・価格表記なし）に差し替えます。\n\n' +
    '※ 質問項目や既存の回答には触れません。よろしいですか？',
    ui.ButtonSet.OK_CANCEL);
  if (ok !== ui.Button.OK) return;

  form.setDescription(_etaTrialFormDescription());
  Logger.log('【更新前の説明文】\n' + before);
  ui.alert('更新しました',
    '説明文を差し替えました。\n（更新前の文面は実行ログに記録してあります）\n\n' +
    '公開URL:\n' + form.getPublishedUrl(),
    ui.ButtonSet.OK);
}

function createEtaTrialEnrollForm() {
  var ss = SpreadsheetApp.openById(SS_ID);
  var fileSheet = ss.getSheetByName(SHEET_FILE);
  var form = FormApp.create('η マンダラ経営マスターコース お試し申込フォーム');
  form.setDescription(_etaTrialFormDescription());
  form.setCollectEmail(false);
  try { form.setRequireLogin(false); } catch(e) {}
  form.setLimitOneResponsePerUser(false);

  form.addTextItem().setTitle('お名前').setHelpText('例: 山田 太郎').setRequired(true);
  form.addTextItem().setTitle('ニックネーム').setHelpText('Chat等で呼ばれたい名前').setRequired(true);
  form.addTextItem().setTitle('メールアドレス').setHelpText('登録完了メール・期限通知メールの受信用').setRequired(true);
  form.addTextItem().setTitle('会社名').setHelpText('任意');
  form.addParagraphTextItem().setTitle('現在の経営課題・期待（任意）').setHelpText('解決したい経営課題やこのお試しに期待することをお書きください');

  form.setDestination(FormApp.DestinationType.SPREADSHEET, SS_ID);
  var renamed = false;
  ss.getSheets().forEach(function(s) {
    if (s.getName().indexOf('フォームの回答') === 0 && !renamed) {
      s.setName('η_お試し申込_raw');
      renamed = true;
    }
  });
  fileSheet.getRange(FILE_ROW_ETA_TRIAL_FORM_EDIT, 1, 2, 2).setValues([
    ['η お試し申込フォームURL（編集）', form.getEditUrl()],
    ['η お試し申込フォームURL（回答）', form.getPublishedUrl()]
  ]);
  SpreadsheetApp.flush();
  Logger.log('η お試しフォーム作成完了: ' + form.getPublishedUrl());
  try {
    SpreadsheetApp.getUi().alert(
      'η お試しフォーム作成完了\n\n回答URL（経営者向け案内に使用）:\n' + form.getPublishedUrl() +
      '\n\n次の手順: ETA-T3 でトリガー設定'
    );
  } catch(e) {}
}

// ============================================================
// [ETA-T3] η お試し申込フォーム トリガー設定
// ============================================================
function setupEtaTrialFormTrigger() {
  var ss = SpreadsheetApp.openById(SS_ID);
  var fileSheet = ss.getSheetByName(SHEET_FILE);
  var editUrl = String(fileSheet.getRange(FILE_ROW_ETA_TRIAL_FORM_EDIT, 2).getValue() || '').trim();
  if (!editUrl) {
    SpreadsheetApp.getUi().alert('η お試しフォームURL未設定。先に ETA-T2 を実行してください'); return;
  }
  ScriptApp.getProjectTriggers().forEach(function(t) {
    if (t.getHandlerFunction() === 'onEtaTrialFormSubmit') ScriptApp.deleteTrigger(t);
  });
  var form = FormApp.openByUrl(editUrl);
  ScriptApp.newTrigger('onEtaTrialFormSubmit').forForm(form).onFormSubmit().create();
  try { SpreadsheetApp.getUi().alert('η お試しフォーム トリガー設定完了'); } catch(e) {}
}

// ============================================================
// [ETA-T4] η お試しフォーム送信ハンドラ
// ============================================================
function onEtaTrialFormSubmit(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var ss = SpreadsheetApp.openById(SS_ID);
    var resp = e.response;
    var ans = {};
    resp.getItemResponses().forEach(function(ir) {
      ans[ir.getItem().getTitle()] = ir.getResponse();
    });
    var name      = String(ans['お名前'] || '').trim();
    var nickname  = String(ans['ニックネーム'] || '').trim();
    var email     = String(ans['メールアドレス'] || '').trim();
    var company   = String(ans['会社名'] || '').trim();
    var message   = String(ans['現在の経営課題・期待（任意）'] || ans['現在の経営課題・期待'] || '').trim();

    if (!name || !email) { Logger.log('η お試し: 必須欠落'); return; }

    Logger.log('η お試し申込: ' + name + ' / ' + email);

    // 既存メンバー検索
    var userSh = ss.getSheetByName(SHEET_USER);
    var emailLower = email.toLowerCase();
    var existingRow = -1;
    var existingMemberId = '';
    if (userSh && userSh.getLastRow() >= 2) {
      var data = userSh.getRange(2, 1, userSh.getLastRow() - 1, COL_EMAIL).getValues();
      for (var i = 0; i < data.length; i++) {
        var rowEmail = String(data[i][COL_EMAIL - 1] || '').trim().toLowerCase();
        if (rowEmail === emailLower) {
          existingRow = i + 2;
          existingMemberId = String(data[i][COL_ID - 1]).trim();
          break;
        }
      }
    }

    var memberId, statusUrl = '';
    if (existingMemberId) {
      memberId = existingMemberId;
      statusUrl = String(userSh.getRange(existingRow, COL_STATUS).getValue() || '').trim();
      Logger.log('  既会員として申込受付: ' + memberId);
    } else {
      memberId = generateMemberId();
      var destRow = _nextEmptyRow(userSh);
      userSh.getRange(destRow, COL_ID).setValue(memberId);
      userSh.getRange(destRow, COL_NAME).setValue(name);
      userSh.getRange(destRow, COL_NICK).setValue(nickname || name);
      userSh.getRange(destRow, COL_EMAIL).setValue(email);
      userSh.getRange(destRow, COL_REG_DATE).setValue(new Date());
      // 新規 → お試しステータス
      try { userSh.getRange(destRow, COL_MSTATUS).setValue(MSTATUS_TRIAL); } catch(eS) {}
      // ★ 2026-08-08 無料お試しの段階では個人フォルダを作らない。
      //   以前はここで createMemberFolder → addEditor(email) までやっていたため、
      //   お支払い前に個人フォルダとステータスSSが本人のものになり、
      //   お試し満了後も開けるままだった。
      //   作るのは「U1a 会員に昇格」のとき（provisionMissingSetup）。
      if (TRIAL_MAKE_FOLDER) {
        var folderUrl = '';
        try { folderUrl = createMemberFolder(memberId, name, email); } catch(fe) {}
        userSh.getRange(destRow, COL_FOLDER).setValue(folderUrl);
        try { statusUrl = copyStatusTemplate(name, folderUrl, email); } catch(se) {}
        userSh.getRange(destRow, COL_STATUS).setValue(statusUrl);
      } else {
        Logger.log('  お試しのためフォルダは作らない: ' + memberId);
      }
      // トークン
      try { userSh.getRange(destRow, COL_TOKEN).setValue(Utilities.getUuid()); } catch(eT) {}
      SpreadsheetApp.flush();
      Logger.log('  新規ID採番: ' + memberId);
    }

    // コホートは「組織・プログラムの識別」だけに使う方針のため、
    // お試しでも本体コホート mandala_business に加入させる。
    //   お試し／本会員の区別 = ユーザーシート M列（会員ステータス）
    //   お試し期限の管理     = 「η お試し管理」シート（コホートIDには依存しない）
    // ※ 以前は mandala_business_trial に入れていたため、
    //   状態とコホートの二重管理になり、統合対象になっていた（2026-07修正）
    try { addMemberToGroup(memberId, ETA_MAIN_GROUP_ID); } catch(eG) { Logger.log('  グループ加入エラー: ' + eG.message); }

    // η ゴール参加（既参加でもskip OK）
    try { enrollMemberInGoal(memberId, nickname || name, 'η', 'マンダラ経営マスターコース'); } catch(eE) {}

    // エリアAのみの お試しマンダラ生成
    if (statusUrl) {
      var tSsId = _extractDriveId(statusUrl);
      try {
        buildTrialMandalaSheet(tSsId, memberId, 'η', [ETA_TRIAL_AREA], ETA_TRIAL_QUESTS);
        Logger.log('  η お試しマンダラ生成 OK（' + ETA_TRIAL_QUESTS.join('・') + ' のみ）');
      } catch(eM) { Logger.log('  η お試しマンダラ生成エラー: ' + eM.message); }
    }

    // η お試し管理シートに記録
    var trialSh = ss.getSheetByName(SHEET_ETA_TRIAL);
    if (!trialSh) {
      setupEtaTrialSheet();
      trialSh = ss.getSheetByName(SHEET_ETA_TRIAL);
    }
    var startDate = new Date();
    var endDate = new Date(startDate.getTime() + ETA_TRIAL_DAYS * 24 * 60 * 60 * 1000);
    trialSh.appendRow([
      memberId, nickname || name, email, startDate, endDate,
      'active', '', '', '', (company ? '【' + company + '】' : '') + message
    ]);

    // 顧客マスターにも流入元を記録（片方向・失敗しても申込処理は続行）
    try { _etaPushToCustomerMaster(memberId, name, nickname || name, email); }
    catch(eC) { Logger.log('  顧客マスター記録エラー: ' + eC.message); }

    // ウェルカムメール
    try { sendEtaTrialWelcomeEmail(memberId, email, name, nickname || name, endDate); }
    catch(eW) { Logger.log('  η お試しウェルカムメールエラー: ' + eW.message); }

    // 統合イベントログ
    try {
      _appendEventLog(ss, {
        ts: new Date(), eventType: 'REGISTER',
        memberId: memberId, nick: nickname || name,
        text: 'η お試し申込 ' + (company ? '【' + company + '】 ' : '') + (message ? message.substring(0, 80) : ''),
        flag: 'REGISTER:eta_trial'
      });
    } catch(eEv) {}

    Logger.log('✅ η お試し受付完了: ' + memberId + ' (期限: ' + Utilities.formatDate(endDate, 'Asia/Tokyo', 'yyyy/MM/dd') + ')');
  } catch(err) {
    Logger.log('onEtaTrialFormSubmit ERROR: ' + (err.stack || err.message));
  } finally {
    try { lock.releaseLock(); } catch(_e) {}
  }
}

// ============================================================
// [ETA-T4b] η お試し申込を 顧客マスター にも記録する（片方向のみ）
// ------------------------------------------------------------
//   顧客マスター（MCQ_顧客マスター）へは _cmSyncAll が毎朝4時に
//   ユーザーシート全行をコピーしている（MCQ110_customer_master.gs）。
//   ただし「流入元」列だけは顧客マスター側の手入力を温存する設計なので、
//   自動同期では永遠に空のまま＝誰がηのお試しから来たのか分からない。
//
//   ここでやるのは、申込の瞬間に 流入元 = 'η_お試し' を立てることだけ。
//   ・行が無ければ最小限の行を足す（残りの列は次回の _cmSyncAll が埋める）
//   ・既に流入元が入っていれば上書きしない（手入力を壊さない）
//   ・顧客マスター → 管理SS の逆方向同期は作らない
//   ・失敗しても申込処理そのものは止めない
// ============================================================
var ETA_CM_SOURCE_LABEL = 'η_お試し';

function _etaPushToCustomerMaster(memberId, name, nick, email) {
  try {
    if (typeof _getCustomerSSId !== 'function') return false;
    var cmSsId = _getCustomerSSId();
    if (!cmSsId) { Logger.log('  顧客マスター未設定（CM0未実行）→スキップ'); return false; }
    var cSh = SpreadsheetApp.openById(cmSsId).getSheetByName(CM_SHEET_CUSTOMER);
    if (!cSh) { Logger.log('  顧客マスターに「' + CM_SHEET_CUSTOMER + '」シートが無い→スキップ'); return false; }

    var tz = Session.getScriptTimeZone();
    var id = String(memberId || '').trim();
    if (!id) return false;

    // 既存行があれば 流入元 だけ立てる
    if (cSh.getLastRow() >= 2) {
      var ids = cSh.getRange(2, CM_COL_ID, cSh.getLastRow() - 1, 1).getValues();
      for (var i = 0; i < ids.length; i++) {
        if (String(ids[i][0] || '').trim() !== id) continue;
        var row = i + 2;
        var cur = String(cSh.getRange(row, CM_COL_SOURCE).getValue() || '').trim();
        if (cur) {
          Logger.log('  顧客マスター 流入元は既存値を温存: ' + id + ' = ' + cur);
        } else {
          cSh.getRange(row, CM_COL_SOURCE).setValue(ETA_CM_SOURCE_LABEL);
          cSh.getRange(row, CM_COL_UPDATED)
             .setValue(Utilities.formatDate(new Date(), tz, 'yyyy/MM/dd HH:mm'));
          Logger.log('  顧客マスター 流入元を記録: ' + id);
        }
        SpreadsheetApp.flush();
        return true;
      }
    }

    // 行が無い → 最小限の行を足す（ID昇順の並べ替えは _cmSyncAll がやる）
    var newRow = new Array(CM_LASTCOL).fill('');
    newRow[CM_COL_ID - 1]      = id;
    newRow[CM_COL_NAME - 1]    = String(name || '').trim();
    newRow[CM_COL_NICK - 1]    = String(nick || '').trim();
    newRow[CM_COL_EMAIL - 1]   = String(email || '').trim().toLowerCase();
    newRow[CM_COL_REGDATE - 1] = Utilities.formatDate(new Date(), tz, 'yyyy/MM/dd');
    newRow[CM_COL_STATUS - 1]  = (typeof MSTATUS_TRIAL !== 'undefined' ? MSTATUS_TRIAL : 'お試し');
    newRow[CM_COL_PRIMARY_COHORT - 1] = ETA_MAIN_GROUP_ID;
    newRow[CM_COL_SOURCE - 1]  = ETA_CM_SOURCE_LABEL;
    newRow[CM_COL_UPDATED - 1] = Utilities.formatDate(new Date(), tz, 'yyyy/MM/dd HH:mm');
    cSh.appendRow(newRow);
    SpreadsheetApp.flush();
    Logger.log('  顧客マスターに新規行を追加: ' + id + '（流入元 ' + ETA_CM_SOURCE_LABEL + '）');
    return true;
  } catch(e) {
    Logger.log('_etaPushToCustomerMaster エラー: ' + e.message);
    return false;
  }
}

// ------------------------------------------------------------
//  [ETA-T10] 過去のη お試し申込者にも 流入元 をまとめて反映（冪等）
//    η_お試し管理シートに載っている全員が対象。
//    既に流入元が入っている人は触らない。
// ------------------------------------------------------------
function menu_ETA_T10_顧客マスターに流入元を反映() {
  var ui = SpreadsheetApp.getUi();
  if (typeof _getCustomerSSId !== 'function' || !_getCustomerSSId()) {
    ui.alert('顧客マスターSSが未設定です。先に「CM0 顧客マスターSS 作成」を実行してください。');
    return;
  }
  var ss = SpreadsheetApp.openById(SS_ID);
  var sh = ss.getSheetByName(SHEET_ETA_TRIAL);
  if (!sh || sh.getLastRow() < 2) { ui.alert('η お試し管理シートが空です'); return; }

  var ok = ui.alert('顧客マスターに流入元を反映',
    'η_お試し管理シートに載っている方の「流入元」を、顧客マスターに ' +
    ETA_CM_SOURCE_LABEL + ' として記録します。\n' +
    '（すでに流入元が入っている方は触りません）\n\n実行しますか？',
    ui.ButtonSet.OK_CANCEL);
  if (ok !== ui.Button.OK) return;

  var rows = sh.getRange(2, 1, sh.getLastRow() - 1, 3).getValues();
  var done = 0, fail = 0, seen = {};
  rows.forEach(function(r) {
    var id = String(r[0] || '').trim();
    if (!id || seen[id]) return;
    seen[id] = true;
    if (_etaPushToCustomerMaster(id, '', String(r[1] || '').trim(), String(r[2] || '').trim())) done++;
    else fail++;
  });
  ui.alert('✅ 完了\n\n処理: ' + done + ' 件 / 失敗・スキップ: ' + fail + ' 件\n' +
           '※ 氏名など他の列は毎朝4時の CM 差分同期が埋めます。');
}

// ============================================================
// [ETA-T5] η お試しウェルカムメール（HTML・経営者向け）
// ============================================================
// ============================================================
// [ETA-AI] AI 3編（ChatGPT/Google/Claude）の案内ブロック
//   2026-08-28 スレッドD決定。お試し・本会員の両ウェルカムメールで共用する。
//   経緯: 経営編だけを案内しており、同時に開いている θ/β/γ が伝わっていなかった。
//   文言を直すときはここ1か所を直せば両方に反映される。
// ============================================================
function _etaAiSkillsBlock() {
  return '' +
    '<div style="background:linear-gradient(135deg,#E3F2FD,#BBDEFB);border-radius:8px;padding:18px 20px;margin:18px 0;border:1px solid #64B5F6">' +
      '<div style="font-size:.85rem;color:#1565C0;font-weight:bold;letter-spacing:.05em;margin-bottom:4px">&#x1F5FA; AIの64スキルも、今日から開いています</div>' +
      '<div style="font-size:1rem;color:#0D47A1;font-weight:bold;margin-bottom:8px">ChatGPT編・Google編・Claude編</div>' +
      '<div style="font-size:.9rem;color:#1565C0;line-height:1.8">' +
        'マイページ &rarr;「クエスト詳細」から、3つの編を切り替えて学べます。<br>' +
        'まずは <strong>ChatGPT編の A1</strong> を1マスだけ。<strong>1日5分</strong>で十分です。<br>' +
        '<span style="font-size:.82rem;color:#42A5F5">すべてのマスに動画とスライドがついています。</span>' +
      '</div>' +
    '</div>';
}

function sendEtaTrialWelcomeEmail(memberId, email, name, nick, endDate) {
  if (!email || email.indexOf('@') < 0) return;
  var ss = SpreadsheetApp.openById(SS_ID);
  var fsh = ss.getSheetByName(SHEET_FILE);
  var membersPageBase = fsh ? String(fsh.getRange(FILE_ROW_MEMBERS_PAGE_URL, 2).getValue() || '').trim() : '';
  var userSh = ss.getSheetByName(SHEET_USER);
  var token = '', avatar = '';
  if (userSh && userSh.getLastRow() >= 2) {
    var rc = Math.max(COL_TOKEN, COL_AVATAR);
    userSh.getRange(2, 1, userSh.getLastRow() - 1, rc).getValues().forEach(function(r) {
      if (String(r[COL_ID - 1]).trim() === String(memberId).trim()) {
        token = String(r[COL_TOKEN - 1] || '').trim();
        avatar = String(r[COL_AVATAR - 1] || '').trim();
      }
    });
  }
  var mypageUrl = (membersPageBase && token) ? (membersPageBase + '?token=' + encodeURIComponent(token)) : '';
  var endDateStr = Utilities.formatDate(endDate, 'Asia/Tokyo', 'yyyy年M月d日');
  var avatarTag = avatar
    ? '<img src="'+avatar+'" alt="" style="width:96px;height:96px;border-radius:50%;border:3px solid #4A148C;object-fit:cover;display:block;margin:0 auto 10px">'
    : '<div style="width:96px;height:96px;border-radius:50%;background:#E1BEE7;color:#4A148C;font-size:42px;line-height:96px;text-align:center;margin:0 auto 10px;font-weight:bold">★</div>';
  var subject = '[マンダラ経営マスターコース] ' + ETA_TRIAL_DAYS + '日間お試しスタート 経営理念マンダラへようこそ';
  var html =
    '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>'+
    '<div style="font-family:\'Hiragino Mincho ProN\',\'Yu Mincho\',serif;max-width:620px;margin:0 auto;background:#fff;border:1px solid #ddd;border-radius:10px;overflow:hidden">'+
      '<div style="background:linear-gradient(135deg,#4A148C,#311B92);color:#fff;padding:28px 24px;text-align:center">'+
        '<div style="font-size:.8rem;letter-spacing:.2em;opacity:0.85">MANDALA BUSINESS MASTER COURSE</div>'+
        '<div style="font-size:1.5rem;font-weight:bold;margin-top:6px;letter-spacing:.05em">経営理念マンダラ ' + ETA_TRIAL_DAYS + '日間お試し</div>'+
        '<div style="font-size:.9rem;margin-top:6px;opacity:0.95">マンダラ経営マスターコース 体験版</div>'+
      '</div>'+
      '<div style="padding:26px 24px;color:#333;line-height:1.75;font-family:\'Hiragino Sans\',\'Yu Gothic\',sans-serif">'+
        '<p>'+_escHtml(name)+' 様</p>'+
        '<p>このたびは <strong>マンダラ経営マスターコース</strong> '+ ETA_TRIAL_DAYS +'日間お試しにお申込みいただき、誠にありがとうございます。</p>'+
        '<div style="text-align:center;margin:20px 0">'+avatarTag+
          '<div style="font-weight:bold;color:#4A148C">'+_escHtml(nick)+' 様</div>'+
          '<div style="font-size:.8rem;color:#888;margin-top:4px">マンダラ経営マスターコース 体験生</div>'+
        '</div>'+
        '<div style="background:#F3E5F5;border-left:5px solid #4A148C;border-radius:6px;padding:16px 18px;margin:18px 0;color:#4A148C;line-height:1.8">'+
          '<div style="font-weight:bold;margin-bottom:6px;font-size:1.05rem">&#x1F4D6; お試し期間中に体験いただける内容</div>'+
          '・<strong>A1 原則を学ぶ：空の知恵と相互依存</strong><br>'+
          '・<strong>A2 創業の原点・承継の決意を言語化する</strong><br>'+
          '・AI（大塚麗夏）による経営理念のフィードバック<br>'+
          '・昼活オンライン交流会への参加（体験中の方も歓迎）'+
        '</div>'+
        '<div style="background:#FFF8E1;border-left:4px solid #FFB300;border-radius:6px;padding:14px 18px;margin:14px 0;line-height:1.8;color:#333">'+
          '<div style="font-weight:bold;color:#E65100;font-size:1rem">&#x23F3; お試し期限</div>'+
          '<div style="font-size:1.1rem;margin-top:4px"><strong>'+_escHtml(endDateStr)+'</strong>（'+ETA_TRIAL_DAYS+'日間）</div>'+
          '<div style="font-size:.85rem;color:#666;margin-top:6px">残り'+ETA_TRIAL_REMIND_DAYS+'日でリマインドを、期限当日にご案内をお送りします。</div>'+
        '</div>'+
        '<div style="background:#FAFAFA;border-radius:6px;padding:14px 18px;margin:14px 0;line-height:1.8;color:#555">'+
          '<div style="font-weight:bold;margin-bottom:4px">&#x1F31F; 最初の一歩</div>'+
          '<strong style="color:#4A148C">η-A1「原則を学ぶ：空の知恵と相互依存」</strong> から始めてください。<br>'+
          '<span style="font-size:.85rem;color:#888">経営理念は自社単独で成立せず、顧客・社員・取引先・地域・社会との縁の中で生まれます。</span>'+
        '</div>'+
        // ▼ 昼活Meet 参加CTA（経営者・AI学習者交流会）
        '<div style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);border-radius:8px;padding:18px 20px;margin:18px 0;text-align:center;border:1px solid #81C784">'+
          '<div style="font-size:.85rem;color:#2E7D32;font-weight:bold;letter-spacing:.05em;margin-bottom:4px">&#x1F31E; 昼活 オンライン交流会</div>'+
          '<div style="font-size:1rem;color:#1B5E20;font-weight:bold;margin-bottom:4px">マンダラ経営者・AI学習者の交流の場</div>'+
          '<div style="font-size:.9rem;color:#2E7D32;font-weight:bold;margin-bottom:4px">毎週火曜 '+ETA_HIRUKATSU_TIME+'</div>'+
          '<div style="font-size:.82rem;color:#558B2F;margin-bottom:12px">お試し会員もご参加いただけます。ぜひ顔出しでお越しください。</div>'+
          '<a href="'+ETA_HIRUKATSU_MEET_URL+'" style="display:inline-block;padding:13px 30px;background:linear-gradient(135deg,#2E7D32,#1B5E20);color:#fff;text-decoration:none;border-radius:28px;font-weight:bold;letter-spacing:.04em;box-shadow:0 3px 10px rgba(46,125,50,0.3)">&#x1F4F9; 昼活 Meet に参加する</a>'+
          '<div style="font-size:.75rem;color:#666;margin-top:8px;word-break:break-all">'+_escHtml(ETA_HIRUKATSU_MEET_URL)+'</div>'+
        '</div>'+
        // ▼ AI 3編の案内（2026-08-28 追加・D決定）
        //   経営編だけを案内していたため、同時に開いている θ/β/γ が伝わっていなかった。
        _etaAiSkillsBlock()+
        (mypageUrl
          ? '<div style="text-align:center;margin-top:24px">'+
              '<a href="'+mypageUrl+'" style="display:inline-block;padding:15px 38px;background:linear-gradient(135deg,#4A148C,#311B92);color:#fff;text-decoration:none;border-radius:32px;font-weight:bold;letter-spacing:.04em;box-shadow:0 4px 14px rgba(74,20,140,0.35)">&#x25B6; マイページを開く</a>'+
            '</div>'
          : '')+
        '<p style="margin-top:26px;color:#666;font-size:.82rem;text-align:center;border-top:1px solid #eee;padding-top:14px">— マンダラチャート®協会 / マンダラ経営マスターコース 事務局</p>'+
      '</div>'+
    '</div>'+
    '</body></html>';
  var plain =
    name + ' 様\n\n' +
    'マンダラ経営マスターコース ' + ETA_TRIAL_DAYS + '日間お試しへのお申込みありがとうございます。\n\n' +
    '【お試し期限】 ' + endDateStr + '\n' +
    '【内容】 経営理念マンダラ（エリアA・8マス）への挑戦\n' +
    '【最初の一歩】 η-A1「原則を学ぶ：空の知恵と相互依存」\n\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
    '▼ 昼活 オンライン交流会（マンダラ経営者・AI学習者の交流の場）\n' +
    '  Google Meet: ' + ETA_HIRUKATSU_MEET_URL + '\n' +
    '  ※ お試し会員もご参加いただけます\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
    (mypageUrl ? '▶ マイページ\n' + mypageUrl + '\n\n' : '') +
    '— マンダラチャート®協会';
  try {
    GmailApp.sendEmail(email, subject, plain, { htmlBody: html, name: 'マンダラ経営マスターコース' });
  } catch(eS) {
    Logger.log('η お試しHTML送信失敗→プレーン送信: ' + eS.message);
    try { MailApp.sendEmail(email, subject, plain); } catch(eS2) {}
  }
}

// ============================================================
// [ETA-T6] η お試し期限通知（毎朝チェック）
//   ・期限リマインド（残りETA_TRIAL_REMIND_DAYS日） → リマインドメール
//   ・期限当日 → 本会員昇格案内メール
// ============================================================
function checkEtaTrialExpiry() {
  var ss = SpreadsheetApp.openById(SS_ID);
  var sh = ss.getSheetByName(SHEET_ETA_TRIAL);
  if (!sh || sh.getLastRow() < 2) { Logger.log('η お試し管理シート空'); return; }
  var data = sh.getRange(2, 1, sh.getLastRow() - 1, 10).getValues();
  var now = new Date();
  var todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  var reminderCount = 0, finalCount = 0;
  data.forEach(function(r, idx) {
    var row = idx + 2;
    var memberId = String(r[0] || '').trim();
    var nick     = String(r[1] || '').trim();
    var email    = String(r[2] || '').trim();
    var endDate  = r[4] instanceof Date ? r[4] : (r[4] ? new Date(r[4]) : null);
    var status   = String(r[5] || '').trim();
    var remindSent = r[6];
    var finalSent  = r[7];

    if (!memberId || !email || !endDate || status !== 'active') return;
    var endDay = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    var daysLeft = Math.round((endDay.getTime() - todayStart.getTime()) / (24 * 60 * 60 * 1000));

    // 期限リマインド（残り ETA_TRIAL_REMIND_DAYS 日）
    if (daysLeft === ETA_TRIAL_REMIND_DAYS && !remindSent) {
      try {
        sendEtaTrialReminderEmail(memberId, email, nick, endDate, daysLeft);
        sh.getRange(row, 7).setValue(new Date());
        reminderCount++;
      } catch(e) { Logger.log('  期限リマインド失敗 ' + memberId + ': ' + e.message); }
    }
    // 期限当日案内
    if (daysLeft <= 0 && !finalSent) {
      try {
        sendEtaTrialFinalEmail(memberId, email, nick, endDate);
        sh.getRange(row, 8).setValue(new Date());
        sh.getRange(row, 6).setValue('expired');
        finalCount++;
      } catch(e) { Logger.log('  期限当日案内失敗 ' + memberId + ': ' + e.message); }
    }
  });
  Logger.log('η お試し期限通知: 期限リマインド ' + reminderCount + ' 件 / 期限当日案内 ' + finalCount + ' 件');
}

function sendEtaTrialReminderEmail(memberId, email, nick, endDate, daysLeft) {
  var endDateStr = Utilities.formatDate(endDate, 'Asia/Tokyo', 'yyyy年M月d日');
  var subject = '[マンダラ経営マスターコース] お試し期限まであと' + daysLeft + '日 ─ 経営理念マンダラの仕上げを';
  var ss = SpreadsheetApp.openById(SS_ID);
  var fsh = ss.getSheetByName(SHEET_FILE);
  var membersPageBase = fsh ? String(fsh.getRange(FILE_ROW_MEMBERS_PAGE_URL, 2).getValue() || '').trim() : '';
  var userSh = ss.getSheetByName(SHEET_USER);
  var token = '';
  if (userSh && userSh.getLastRow() >= 2) {
    userSh.getRange(2, 1, userSh.getLastRow() - 1, COL_TOKEN).getValues().forEach(function(r) {
      if (String(r[COL_ID - 1]).trim() === String(memberId).trim()) token = String(r[COL_TOKEN - 1] || '').trim();
    });
  }
  var mypageUrl = (membersPageBase && token) ? (membersPageBase + '?token=' + encodeURIComponent(token)) : '';
  var html =
    '<div style="font-family:\'Hiragino Sans\',sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #ddd;border-radius:10px;overflow:hidden">'+
      '<div style="background:linear-gradient(135deg,#FF9800,#F57C00);color:#fff;padding:20px;text-align:center">'+
        '<div style="font-size:1.2rem;font-weight:bold">&#x23F3; お試し期限まで残り' + daysLeft + '日</div>'+
      '</div>'+
      '<div style="padding:24px;color:#333;line-height:1.7">'+
        '<p>'+_escHtml(nick)+' 様</p>'+
        '<p>マンダラ経営マスターコース お試し期間の終了まで、あと <strong style="color:#E65100">' + daysLeft + '日</strong>となりました。</p>'+
        '<p>期限: <strong>'+_escHtml(endDateStr)+'</strong></p>'+
        '<div style="background:#FFF8E1;border-left:4px solid #FFB300;padding:14px 18px;margin:14px 0;border-radius:6px">'+
          '経営理念マンダラ（エリアA）はもう完成しましたか？<br>'+
          'まだのマスがあれば、ぜひ仕上げて<strong>1年間の経営の柱</strong>にしてください。'+
        '</div>'+
        (mypageUrl
          ? '<div style="text-align:center;margin:20px 0"><a href="'+mypageUrl+'" style="display:inline-block;padding:12px 28px;background:#4A148C;color:#fff;text-decoration:none;border-radius:24px;font-weight:bold">マイページで進捗確認</a></div>'
          : '')+
        '<p style="font-size:.85rem;color:#666">期間終了後、続きに取り組みたい方には本コースのご案内をお送りします。</p>'+
      '</div>'+
    '</div>';
  var plain =
    nick + ' 様\n\nマンダラ経営マスターコース お試し期限まで残り' + daysLeft + '日です。\n期限: ' + endDateStr + '\n\n' +
    (mypageUrl ? '▶ マイページ\n' + mypageUrl + '\n\n' : '') +
    '— マンダラチャート®協会';
  try { GmailApp.sendEmail(email, subject, plain, { htmlBody: html, name: 'マンダラ経営マスターコース' }); }
  catch(e) { try { MailApp.sendEmail(email, subject, plain); } catch(e2) {} }
}

function sendEtaTrialFinalEmail(memberId, email, nick, endDate) {
  var subject = '[マンダラ経営マスターコース] お試し期間 終了 ─ 本コース（残り7部門）のご案内';
  var html =
    '<div style="font-family:\'Hiragino Sans\',sans-serif;max-width:620px;margin:0 auto;background:#fff;border:1px solid #ddd;border-radius:10px;overflow:hidden">'+
      '<div style="background:linear-gradient(135deg,#4A148C,#311B92);color:#fff;padding:24px;text-align:center">'+
        '<div style="font-size:.8rem;letter-spacing:.2em;opacity:0.85">CONGRATULATIONS</div>'+
        '<div style="font-size:1.4rem;font-weight:bold;margin-top:6px">経営理念マンダラ お試し完了</div>'+
      '</div>'+
      '<div style="padding:26px 24px;color:#333;line-height:1.7">'+
        '<p>'+_escHtml(nick)+' 様</p>'+
        '<p>'+_escHtml(ETA_TRIAL_DAYS)+'日間のお試し期間が終了しました。お疲れさまでした。</p>'+
        '<p>第1部門 <strong>Purpose 経営理念</strong> は、マンダラ経営の8部門の出発点に過ぎません。</p>'+
        '<div style="background:#F3E5F5;border-left:5px solid #4A148C;padding:16px 18px;border-radius:6px;margin:18px 0;line-height:1.8">'+
          '<div style="font-weight:bold;color:#4A148C;margin-bottom:6px">&#x1F3AF; 本コースで開放される残り7部門</div>'+
          '・第2部門 Leadership（社長方針）<br>'+
          '・第3部門 Finance（財務）<br>'+
          '・第4部門 Growth（商品・顧客開発）<br>'+
          '・第5部門 Team Building（組織・社風）<br>'+
          '・第6部門 People（人財育成）<br>'+
          '・第7部門 OKR（週次経営）<br>'+
          '・第8部門 Kaizen（継続改革）<br>'+
        '</div>'+
        '<div style="background:#FFF8E1;border-left:4px solid #FFB300;padding:14px 18px;margin:14px 0;border-radius:6px;line-height:1.8">'+
          '<div style="font-weight:bold;color:#E65100;margin-bottom:4px">&#x1F381; 本コース申込特典</div>'+
          '・お試しで完成した <strong>経営理念マンダラの進捗をそのまま引き継ぎ</strong><br>'+
          '・全64クエスト＋AI審査キャラ16体との対話<br>'+
          '・完走で「経世済民」「不世出の経営者」の称号<br>'+
        '</div>'+
        // 決済リンク・料金・手続きの流れ（_etaJoinOfferHtml が唯一の出どころ）
        _etaJoinOfferHtml()+
        '<p style="font-size:.85rem;color:#666;margin-top:18px;border-top:1px solid #eee;padding-top:12px">— マンダラチャート®協会 / マンダラ経営マスターコース 事務局</p>'+
      '</div>'+
    '</div>';
  var plain =
    nick + ' 様\n\n' + ETA_TRIAL_DAYS + '日間のお試し期間が終了しました。\n\n' +
    'お試しで完成した経営理念マンダラの進捗は、そのまま引き継がれます。\n\n' +
    _etaJoinOfferPlain() + '\n\n' +
    '— マンダラチャート®協会';
  try { GmailApp.sendEmail(email, subject, plain, { htmlBody: html, name: 'マンダラ経営マスターコース' }); }
  catch(e) { try { MailApp.sendEmail(email, subject, plain); } catch(e2) {} }
}

// ============================================================
// [ETA-T7] η お試し期限通知トリガー設定（毎朝8:00）
// ============================================================
function setupEtaTrialExpiryTrigger() {
  ScriptApp.getProjectTriggers().forEach(function(t) {
    if (t.getHandlerFunction() === 'checkEtaTrialExpiry') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('checkEtaTrialExpiry').timeBased().everyDays(1).atHour(8).create();
  Logger.log('η お試し期限トリガー設定完了（毎朝8:00）');
  try { SpreadsheetApp.getUi().alert('η お試し期限トリガー設定完了\n毎朝8:00に走査します'); } catch(e) {}
}

// ============================================================
// [ETA-T7b] η お試し期限切れ 週次まとめ通知（Chat・admin_info）
// ------------------------------------------------------------
//   checkEtaTrialExpiry が付けた 'expired' は η_お試し管理シートに
//   溜まるだけで、誰の目にも触れていなかった（AUDIT2時点で滞留7名）。
//   週1で Chat に一覧を流し、塾長が「追いかける／閉じる」を判断できるようにする。
//
//   ★ ユーザーシート M列（会員ステータス）はここでは絶対に触らない。
//     ステータス値の定義・遷移はスレッドA管轄。ここは読むだけ。
//   ★ 専用トリガーは作らない（GASトリガーが20枠しかなく逼迫しているため）。
//     runDailyStepupBatch（毎朝8:00）の中で「月曜だけ」実行される。
//     手動で流したいときは ETA-T8 メニューから。
// ============================================================
var ETA_EXPIRED_NOTIFY_MAX = 30;   // Chatに名前を並べる上限（超えたら件数だけ出す）

function notifyEtaTrialExpiredWeekly(opts) {
  opts = opts || {};
  var ss = SpreadsheetApp.openById(SS_ID);
  var sh = ss.getSheetByName(SHEET_ETA_TRIAL);
  if (!sh || sh.getLastRow() < 2) {
    Logger.log('notifyEtaTrialExpiredWeekly: η お試し管理シートが空');
    return { total: 0, fresh: 0, sent: false };
  }

  // ── ユーザーシートの M列（会員ステータス）を読むだけ読む ──
  var statusById = {};
  try {
    var userSh = ss.getSheetByName(SHEET_USER);
    if (userSh && userSh.getLastRow() >= 2) {
      userSh.getRange(2, 1, userSh.getLastRow() - 1, COL_MSTATUS).getValues().forEach(function(r) {
        var id = String(r[COL_ID - 1] || '').trim();
        if (id) statusById[id] = String(r[COL_MSTATUS - 1] || '').trim();
      });
    }
  } catch(e) { Logger.log('  会員ステータス読取エラー: ' + e.message); }

  var now = new Date();
  var todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var rows = sh.getRange(2, 1, sh.getLastRow() - 1, 10).getValues();
  var list = [];
  rows.forEach(function(r) {
    if (String(r[5] || '').trim() !== 'expired') return;   // F列 ステータス
    var memberId = String(r[0] || '').trim();
    if (!memberId) return;
    var endDate = r[4] instanceof Date ? r[4] : (r[4] ? new Date(r[4]) : null);
    var daysAgo = '';
    if (endDate) {
      var endDay = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
      daysAgo = Math.round((todayStart.getTime() - endDay.getTime()) / (24 * 60 * 60 * 1000));
    }
    // 一言メッセージ（J列）の先頭に 【会社名】 が入っている
    var memo = String(r[9] || '').trim();
    var company = '';
    var m = memo.match(/^【([^】]+)】/);
    if (m) company = m[1];
    list.push({
      memberId: memberId,
      nick:     String(r[1] || '').trim() || memberId,
      company:  company,
      endDate:  endDate,
      daysAgo:  daysAgo,
      mstatus:  statusById[memberId] || '（ユーザーシートに無し）'
    });
  });

  // 期限が新しい順（放置日数の少ない順）
  list.sort(function(a, b) {
    var da = (a.daysAgo === '' ? 99999 : a.daysAgo);
    var db = (b.daysAgo === '' ? 99999 : b.daysAgo);
    return da - db;
  });
  var fresh = list.filter(function(x) { return x.daysAgo !== '' && x.daysAgo <= 7; }).length;

  if (list.length === 0) {
    Logger.log('notifyEtaTrialExpiredWeekly: expired 0件');
    if (!opts.force) return { total: 0, fresh: 0, sent: false };
  }

  // ── Chat本文 ──
  var lines = [];
  lines.push('*🕰 η マンダラ経営 お試し期限切れ 週次まとめ*');
  lines.push('期限切れ ' + list.length + ' 名（うち直近7日 ' + fresh + ' 名）');
  if (list.length === 0) {
    lines.push('');
    lines.push('現在、期限切れのまま残っている方はいません。');
  } else {
    lines.push('');
    var shown = list.slice(0, ETA_EXPIRED_NOTIFY_MAX);
    shown.forEach(function(x) {
      var endStr = x.endDate
        ? Utilities.formatDate(x.endDate, 'Asia/Tokyo', 'M/d')
        : '日付不明';
      lines.push(
        (x.daysAgo !== '' && x.daysAgo <= 7 ? '🆕 ' : '・') +
        x.nick + (x.company ? '（' + x.company + '）' : '') +
        ' [' + x.memberId + ']' +
        ' … ' + endStr + ' 期限' +
        (x.daysAgo === '' ? '' : '（' + x.daysAgo + '日経過）') +
        ' / 会員ステータス: ' + x.mstatus
      );
    });
    if (list.length > shown.length) {
      lines.push('…ほか ' + (list.length - shown.length) + ' 名（続きは「' + SHEET_ETA_TRIAL + '」シートで）');
    }
    lines.push('');
    lines.push('▶ 入会される方: ETA-T7「η お試し→本会員 昇格（ID指定）」で全64クエストを解放');
    lines.push('▶ 会員ステータス（M列）はこの通知では変更していません');
  }

  try {
    _notifyChat(ss, lines.join('\n'), null, undefined, { notifyType: 'admin_info' });
    Logger.log('notifyEtaTrialExpiredWeekly: Chat通知 ' + list.length + '件');
    return { total: list.length, fresh: fresh, sent: true };
  } catch(e) {
    Logger.log('notifyEtaTrialExpiredWeekly Chat通知エラー: ' + e.message);
    return { total: list.length, fresh: fresh, sent: false, error: e.message };
  }
}

// 手動実行（0件でも結果を出す）
function menu_ETA_T8_期限切れ一覧をChatへ() {
  var res = notifyEtaTrialExpiredWeekly({ force: true });
  try {
    SpreadsheetApp.getUi().alert(
      'η お試し期限切れ 週次まとめ',
      '期限切れ: ' + res.total + ' 名（うち直近7日 ' + res.fresh + ' 名）\n' +
      'Chat送信: ' + (res.sent ? '成功' : '失敗' + (res.error ? '（' + res.error + '）' : '')) + '\n\n' +
      '※ 自動では毎週月曜の朝バッチ（runDailyStepupBatch）で流れます。',
      SpreadsheetApp.getUi().ButtonSet.OK);
  } catch(e) {}
}

// ============================================================
// [ETA-T8] η お試し本会員昇格処理（手動メニュー）
//   既にηゴール参加済みなので、グループ移動 + マンダラ全エリア解放 + 管理シート状態更新
// ============================================================
function upgradeEtaTrialToMember() {
  var ui = SpreadsheetApp.getUi();
  var resp = ui.prompt('η お試し → 本会員 昇格', 'メンバーIDを入力', ui.ButtonSet.OK_CANCEL);
  if (resp.getSelectedButton() !== ui.Button.OK) return;
  var memberId = String(resp.getResponseText() || '').trim();
  if (!memberId) return;

  var ss = SpreadsheetApp.openById(SS_ID);
  // mandala_business_trial から外す（手動推奨）+ mandala_business 加入
  try { addMemberToGroup(memberId, 'mandala_business'); } catch(e) { Logger.log('mandala_business加入: ' + e.message); }
  // 全エリアマンダラ生成
  var userSh = ss.getSheetByName(SHEET_USER);
  var statusUrl = '', nick = memberId;
  userSh.getRange(2, 1, userSh.getLastRow() - 1, COL_STATUS).getValues().forEach(function(r) {
    if (String(r[COL_ID - 1]).trim() === memberId) {
      statusUrl = String(r[COL_STATUS - 1] || '');
      nick = String(r[COL_NICK - 1] || r[COL_NAME - 1] || memberId);
    }
  });
  if (statusUrl) {
    try { buildMandalaSheet(_extractDriveId(statusUrl), memberId, 'η'); }
    catch(e) { Logger.log('全エリアマンダラ生成エラー: ' + e.message); }
  }
  // 管理シート状態更新
  var trialSh = ss.getSheetByName(SHEET_ETA_TRIAL);
  if (trialSh && trialSh.getLastRow() >= 2) {
    var data = trialSh.getRange(2, 1, trialSh.getLastRow() - 1, 9).getValues();
    for (var i = 0; i < data.length; i++) {
      if (String(data[i][0]).trim() === memberId) {
        trialSh.getRange(i + 2, 6).setValue('upgraded');
        trialSh.getRange(i + 2, 9).setValue(new Date());
        break;
      }
    }
  }
  // ウェルカム（本コース版）
  try { sendEtaWelcomeEmail(memberId); } catch(e) {}
  ui.alert('✅ ' + memberId + ' を本会員に昇格しました\n全64クエスト解放・全7部門マンダラ生成完了');
}

// ============================================================
// [ETA-T-MASTER] η お試し全セットアップ実行
// ============================================================
function setupEtaTrialAll() {
  var ui = SpreadsheetApp.getUi();
  var resp = ui.alert(
    'η お試し（営業ツール）セットアップ',
    '以下を一括実行します:\n' +
    '① η お試し管理シート作成\n' +
    '② グループマスタに mandala_business_trial 追加\n' +
    '③ η お試し申込フォーム作成\n' +
    '④ フォーム送信トリガー設定\n' +
    '⑤ 期限通知トリガー設定（毎朝8:00）\n\n' +
    '実行しますか？',
    ui.ButtonSet.OK_CANCEL);
  if (resp !== ui.Button.OK) return;
  var report = [];
  try { setupEtaTrialSheet();         report.push('① 管理シート OK'); } catch(e) { report.push('① 管理シート エラー: ' + e.message); }
  try { appendEtaTrialGroup();        report.push('② グループ追加 OK'); } catch(e) { report.push('② グループ追加: ' + e.message); }
  try { createEtaTrialEnrollForm();   report.push('③ フォーム作成 OK'); } catch(e) { report.push('③ フォーム作成 エラー: ' + e.message); }
  try { setupEtaTrialFormTrigger();   report.push('④ フォームトリガー OK'); } catch(e) { report.push('④ フォームトリガー エラー: ' + e.message); }
  try { setupEtaTrialExpiryTrigger(); report.push('⑤ 期限トリガー OK'); } catch(e) { report.push('⑤ 期限トリガー エラー: ' + e.message); }
  ui.alert('η お試し セットアップ完了', report.join('\n'), ui.ButtonSet.OK);
}

// メニューwrapper
function menu_ETA_T0_全セットアップ実行()  { setupEtaTrialAll(); }
function menu_ETA_T1_管理シート作成()      { setupEtaTrialSheet(); }
function menu_ETA_T2_グループ追加()        { appendEtaTrialGroup(); }
function menu_ETA_T3_フォーム作成()        { createEtaTrialEnrollForm(); }
function menu_ETA_T4_フォームトリガー()    { setupEtaTrialFormTrigger(); }
function menu_ETA_T5_期限トリガー()        { setupEtaTrialExpiryTrigger(); }
function menu_ETA_T6_期限通知手動実行()    { checkEtaTrialExpiry(); }
function menu_ETA_T7_本会員昇格()           { upgradeEtaTrialToMember(); }

// ============================================================
// [ETA-D] η 加入漏れメンバー診断・自動修正
//   ・経営マスターコース に入会したはずなのに mandala_business
//     グループや η ゴール参加が漏れているメンバーを救済
//   ・ID または メアドで特定
//   ・D1: 読取専用診断 / D2: 自動修正実行
// ============================================================
// ============================================================
// [ETA-D5] メンバーのマイページURL取得
//   コーチ番号 or master_id を入力すると、そのメンバーの
//   マイページURL（webappBase + ?token=xxx）を返す。
//   ステータスSS URL も併記。
// ============================================================
function menu_ETA_D5_マイページURL取得() {
  var ui = SpreadsheetApp.getUi();
  var resp = ui.prompt(
    'メンバーのマイページURL取得',
    'メンバーID（4桁）または 認定コーチ番号（1〜999）を入力\n\n例:\n2016（master_id）\n111（coach_no）',
    ui.ButtonSet.OK_CANCEL);
  if (resp.getSelectedButton() !== ui.Button.OK) return;
  var input = String(resp.getResponseText() || '').trim();
  if (!input) return;

  try {
    // ID解決
    var resolved = (typeof _findMemberByIdOrCoachNo === 'function')
      ? _findMemberByIdOrCoachNo(input)
      : null;
    if (!resolved || !resolved.masterId) {
      ui.alert('該当メンバーが見つかりません: ' + input);
      return;
    }

    var ss = SpreadsheetApp.openById(SS_ID);
    var userSh = ss.getSheetByName(SHEET_USER);
    if (!userSh) throw new Error('ユーザーシートが見つかりません');
    var lastCol = Math.max(COL_TOKEN, COL_STATUS, COL_COACH_NO);
    var data = userSh.getRange(2, 1, userSh.getLastRow() - 1, lastCol).getValues();
    var found = null;
    for (var i = 0; i < data.length; i++) {
      if (String(data[i][COL_ID - 1]).trim() === String(resolved.masterId).trim()) {
        found = data[i];
        break;
      }
    }
    if (!found) throw new Error('ユーザーシート行未発見');

    var memberId  = String(found[COL_ID - 1] || '').trim();
    var name      = String(found[COL_NAME - 1] || '').trim();
    var nickname  = String(found[COL_NICK - 1] || name).trim();
    var email     = String(found[COL_EMAIL - 1] || '').trim();
    var statusUrl = String(found[COL_STATUS - 1] || '').trim();
    var token     = String(found[COL_TOKEN - 1] || '').trim();
    var coachNo   = String(found[COL_COACH_NO - 1] || '').trim();

    // Webappベース取得
    var fileSh = ss.getSheetByName(SHEET_FILE);
    var base = fileSh ? String(fileSh.getRange(FILE_ROW_MEMBERS_PAGE_URL, 2).getValue() || '').trim() : '';
    var myPageUrl = (base && token) ? (base + '?token=' + encodeURIComponent(token)) : '(トークンorベースURL未設定)';

    ui.alert(
      '🔍 ' + memberId + ' ' + nickname + ' のマイページURL',
      'メンバーID: ' + memberId + '\n' +
      '氏名: ' + name + '\n' +
      'ニックネーム: ' + nickname + '\n' +
      'コーチ番号: ' + (coachNo || '(なし)') + '\n' +
      'メール: ' + email + '\n\n' +
      '【マイページURL】\n' + myPageUrl + '\n\n' +
      '【ステータスSS URL】\n' + (statusUrl || '(未設定)') + '\n\n' +
      'コピーしてご利用ください。',
      ui.ButtonSet.OK);
    Logger.log('マイページURL: ' + memberId + ' → ' + myPageUrl);
  } catch(e) {
    ui.alert('エラー: ' + e.message);
  }
}

// ============================================================
// [ETA-D4] η ウェルカムメール手動送信
//   手動登録などで sendMandalaSchoolWelcomeEmail が呼ばれていない
//   メンバーに対して、後付けでウェルカムメールを送る。
//   コースは MSCHOOL_COURSE_BUSINESS（η単独）をデフォルト。
//   塾長確認ステップ付き（誤送防止）
// ============================================================
function menu_ETA_D4_ウェルカムメール送信() {
  var ui = SpreadsheetApp.getUi();
  // Step 1: メンバーID入力
  var idResp = ui.prompt(
    'η ウェルカムメール送信（マンダラ協会 入会メール）',
    '対象メンバーID（4桁）を1行1人で入力してください。\n\n' +
    '例:\n2018\n2116\n2115\n2119\n2016',
    ui.ButtonSet.OK_CANCEL);
  if (idResp.getSelectedButton() !== ui.Button.OK) return;
  var raw = String(idResp.getResponseText() || '').trim();
  if (!raw) return;
  var ids = raw.split(/[\r\n,、，\s]+/).map(function(s){ return s.trim(); }).filter(Boolean);

  // Step 2: コース選択
  var courseResp = ui.alert(
    'コース選択',
    'どのコースのウェルカムメールを送りますか？\n\n' +
    '【はい】 🌸 マンダラ経営マスター単独（η）  ← 推奨\n' +
    '【いいえ】 🌟 完全コース（α〜η全部）\n' +
    '【キャンセル】 中止',
    ui.ButtonSet.YES_NO_CANCEL);
  if (courseResp === ui.Button.CANCEL) return;
  var course = (courseResp === ui.Button.YES) ? MSCHOOL_COURSE_BUSINESS : MSCHOOL_COURSE_FULL;

  // Step 3: 最終確認
  var confirm = ui.alert(
    '送信確認',
    '対象: ' + ids.length + '名\n' +
    'コース: ' + course + '\n\n' +
    ids.join('\n') + '\n\n本当に送信しますか？',
    ui.ButtonSet.OK_CANCEL);
  if (confirm !== ui.Button.OK) return;

  // Step 4: 実行
  var ss = SpreadsheetApp.openById(SS_ID);
  var userSh = ss.getSheetByName(SHEET_USER);
  if (!userSh || userSh.getLastRow() < 2) {
    ui.alert('ユーザーシート空');
    return;
  }
  var lastCol = userSh.getLastColumn();
  var data = userSh.getRange(2, 1, userSh.getLastRow() - 1, lastCol).getValues();
  var sent = 0, failed = 0, notFound = 0;
  var summary = [];

  ids.forEach(function(input) {
    var matched = null;
    for (var i = 0; i < data.length; i++) {
      var rowId    = String(data[i][COL_ID - 1] || '').trim();
      var rowEmail = String(data[i][COL_EMAIL - 1] || '').trim().toLowerCase();
      if (rowId === input || rowEmail === input.toLowerCase()) {
        matched = data[i];
        break;
      }
    }
    if (!matched) {
      Logger.log('❌ ' + input + ' → 未発見');
      summary.push(input + ': NOT FOUND');
      notFound++;
      return;
    }
    var memberId  = String(matched[COL_ID - 1] || '').trim();
    var name      = String(matched[COL_NAME - 1] || '').trim();
    var nickname  = String(matched[COL_NICK - 1] || name || memberId).trim();
    var email     = String(matched[COL_EMAIL - 1] || '').trim();
    var statusUrl = String(matched[COL_STATUS - 1] || '').trim();
    var token     = String(matched[COL_TOKEN - 1] || '').trim();
    if (!email) {
      Logger.log('⚠ ' + memberId + ' メールアドレスなし');
      summary.push(memberId + ' ' + nickname + ': NO EMAIL');
      failed++;
      return;
    }
    try {
      sendMandalaSchoolWelcomeEmail(memberId, email, name, nickname, course, '', statusUrl, token);
      Logger.log('✓ ' + memberId + ' ' + nickname + ' → ' + email);
      summary.push(memberId + ' ' + nickname + ': SENT');
      sent++;
      Utilities.sleep(500); // レート制限回避
    } catch(e) {
      Logger.log('❌ ' + memberId + ' エラー: ' + e.message);
      summary.push(memberId + ' ' + nickname + ': ERROR ' + e.message);
      failed++;
    }
  });

  ui.alert(
    'η ウェルカムメール送信 完了',
    summary.join('\n') +
    '\n\n--- 集計 ---\n' +
    '送信: ' + sent + ' / 失敗: ' + failed + ' / 未発見: ' + notFound,
    ui.ButtonSet.OK);
}

// ============================================================
// [ETA-D3] 個別ホームシート更新（ステータスSS「(自動入力)」問題対応）
//   メンバーIDを指定して、その人のステータスSSだけを更新
//   2119 のように「マイページOKだがステータスSSが空欄」のケースに有効
// ============================================================
function menu_ETA_D3_個別ホームシート更新() {
  var ui = SpreadsheetApp.getUi();
  var resp = ui.prompt(
    '個別ホームシート更新（ステータスSS）',
    'メンバーID（4桁）もしくはコーチ番号を入力してください\n\n' +
    '例: 2119  もしくは 111\n\n' +
    'そのメンバーの個人ステータスSSを最新化します（EXP/ニックネーム/称号など）。',
    ui.ButtonSet.OK_CANCEL);
  if (resp.getSelectedButton() !== ui.Button.OK) return;
  var input = String(resp.getResponseText() || '').trim();
  if (!input) return;

  try {
    // ID/コーチ番号 どちらでも解決
    var resolved = (typeof _findMemberByIdOrCoachNo === 'function') ? _findMemberByIdOrCoachNo(input) : null;
    var memberId = resolved ? resolved.masterId : input;
    var statusUrl = resolved ? resolved.statusUrl : '';
    var nick = resolved ? (resolved.nick || resolved.name || memberId) : '';

    // resolver で見つからない場合はフォールバック（A列直接検索）
    if (!resolved) {
      var ss = SpreadsheetApp.openById(SS_ID);
      var userSh = ss.getSheetByName(SHEET_USER);
      if (!userSh || userSh.getLastRow() < 2) throw new Error('ユーザーシート空');
      var data = userSh.getRange(2, 1, userSh.getLastRow() - 1, COL_STATUS).getValues();
      for (var i = 0; i < data.length; i++) {
        if (String(data[i][COL_ID - 1]).trim() === input) {
          memberId = input;
          statusUrl = String(data[i][COL_STATUS - 1] || '').trim();
          nick = String(data[i][COL_NICK - 1] || data[i][COL_NAME - 1] || input).trim();
          break;
        }
      }
    }
    if (!statusUrl) throw new Error('入力「' + input + '」のステータスURL（G列）が見つからない');
    var idMatch = statusUrl.match(/\/d\/([a-zA-Z0-9_-]{20,})/);
    if (!idMatch) throw new Error('ステータスURLからSSID抽出失敗: ' + statusUrl);
    var ssId = idMatch[1];
    refreshHomeSheet(ssId, memberId);
    ui.alert(
      '✅ ホームシート更新完了',
      '対象: ' + memberId + ' ' + nick + '\n' +
      'ステータスSS: ' + statusUrl + '\n\n' +
      'スプシをリロードして確認してください。',
      ui.ButtonSet.OK);
  } catch(e) {
    ui.alert('❌ エラー: ' + e.message);
  }
}

function menu_ETA_D1_加入漏れ診断() {
  var ui = SpreadsheetApp.getUi();
  var resp = ui.prompt(
    'η 経営マスター 加入漏れ診断',
    '対象メンバーを 1行1人で入力（ID 4桁 or メアド）\n\n' +
    '例:\n2018\n2116\nsano@kanae-keiei.co.jp',
    ui.ButtonSet.OK_CANCEL);
  if (resp.getSelectedButton() !== ui.Button.OK) return;
  var raw = String(resp.getResponseText() || '').trim();
  if (!raw) return;
  var inputs = raw.split(/[\r\n,、，\s]+/).map(function(s){ return s.trim(); }).filter(Boolean);
  _etaDiagnoseList(inputs, false);
}

function menu_ETA_D2_加入漏れ自動修正() {
  var ui = SpreadsheetApp.getUi();
  var resp = ui.prompt(
    'η 経営マスター 加入漏れ自動修正',
    '⚠️ データ変更が伴います。\n\n' +
    '対象メンバーを 1行1人で入力（ID 4桁 or メアド）\n\n' +
    '実行内容:\n' +
    '・mandala_school + mandala_business グループに加入\n' +
    '・η ゴールに参加追加\n' +
    '・トークンなしなら自動発行\n' +
    '・既に加入済みは何もしない（冪等）',
    ui.ButtonSet.OK_CANCEL);
  if (resp.getSelectedButton() !== ui.Button.OK) return;
  var raw = String(resp.getResponseText() || '').trim();
  if (!raw) return;
  var inputs = raw.split(/[\r\n,、，\s]+/).map(function(s){ return s.trim(); }).filter(Boolean);

  var confirm = ui.alert(
    '実行確認',
    inputs.length + '名を η に加入登録します。\n\n' +
    inputs.join('\n') + '\n\n実行しますか？',
    ui.ButtonSet.OK_CANCEL);
  if (confirm !== ui.Button.OK) return;
  _etaDiagnoseList(inputs, true);
}

// 内部実装: 診断（autoFix=trueなら修正も実施）
function _etaDiagnoseList(inputs, autoFix) {
  var ss = SpreadsheetApp.openById(SS_ID);
  var userSh = ss.getSheetByName(SHEET_USER);
  if (!userSh || userSh.getLastRow() < 2) {
    SpreadsheetApp.getUi().alert('ユーザーシートが空');
    return;
  }
  var lastCol = userSh.getLastColumn();
  var userData = userSh.getRange(2, 1, userSh.getLastRow() - 1, lastCol).getValues();

  // グループメンバーシップ読込
  var gms = ss.getSheetByName(SHEET_GROUP_MEMBERSHIP);
  var groupsByMid = {};
  if (gms && gms.getLastRow() >= 2) {
    gms.getRange(2, 1, gms.getLastRow() - 1, 9).getValues().forEach(function(r) {
      var mid = String(r[0]).trim();
      var gid = String(r[1]).trim();
      var st  = String(r[7] || '').trim();
      if (!mid || !gid || st !== 'active') return;
      if (!groupsByMid[mid]) groupsByMid[mid] = [];
      groupsByMid[mid].push(gid);
    });
  }
  // ゴール参加読込
  var enrollSh = ss.getSheetByName(SHEET_ENROLL);
  var goalsByMid = {};
  if (enrollSh && enrollSh.getLastRow() >= 2) {
    enrollSh.getRange(2, 1, enrollSh.getLastRow() - 1, 8).getValues().forEach(function(r) {
      var mid = String(r[0]).trim();
      var goal = String(r[2]).trim();
      var status = String(r[7] || '').trim();
      if (!mid || !goal) return;
      if (status && status.indexOf('退会') >= 0) return;
      if (!goalsByMid[mid]) goalsByMid[mid] = {};
      goalsByMid[mid][goal] = true;
    });
  }

  Logger.log('=== η 加入漏れ ' + (autoFix ? '修正' : '診断') + ' ' + inputs.length + '名 ===');
  var summary = [];
  var fixed = 0, ok = 0, notFound = 0;

  inputs.forEach(function(input) {
    var matchedRow = -1;
    for (var i = 0; i < userData.length; i++) {
      var rowId    = String(userData[i][COL_ID - 1] || '').trim();
      var rowEmail = String(userData[i][COL_EMAIL - 1] || '').trim().toLowerCase();
      if (rowId === input || rowEmail === input.toLowerCase()) {
        matchedRow = i;
        break;
      }
    }
    if (matchedRow < 0) {
      Logger.log('❌ ' + input + ' → ユーザーシートに見つかりません');
      summary.push(input + ': NOT FOUND');
      notFound++;
      return;
    }
    var r = userData[matchedRow];
    var memberId = String(r[COL_ID - 1] || '').trim();
    var name     = String(r[COL_NAME - 1] || '').trim();
    var nick     = String(r[COL_NICK - 1] || name || memberId).trim();
    var email    = String(r[COL_EMAIL - 1] || '').trim();
    var token    = String(r[COL_TOKEN - 1] || '').trim();
    var mstatus  = String(r[COL_MSTATUS - 1] || '').trim();

    if (mstatus === '退会' || mstatus === '退会済み' ||
        (typeof MSTATUS_RESIGNED !== 'undefined' && mstatus === MSTATUS_RESIGNED)) {
      Logger.log('⏭ ' + memberId + ' ' + nick + ' → 退会済みスキップ');
      summary.push(memberId + ' ' + nick + ': 退会済み');
      return;
    }

    var memberGroups = groupsByMid[memberId] || [];
    var memberGoals  = goalsByMid[memberId] || {};
    var hasSchool   = memberGroups.indexOf('mandala_school') >= 0;
    var hasBusiness = memberGroups.indexOf('mandala_business') >= 0;
    var hasBizTrial = memberGroups.indexOf('mandala_business_trial') >= 0;
    var hasEta      = !!memberGoals['η'];
    var hasToken    = !!token;

    Logger.log('━━ ' + memberId + ' ' + nick + ' (' + email + ') ━━');
    Logger.log('  会員ステータス: ' + (mstatus || '(未設定)'));
    Logger.log('  グループ: ' + (memberGroups.join(', ') || '(なし)'));
    Logger.log('  参加ゴール: ' + (Object.keys(memberGoals).join(', ') || '(なし)'));
    Logger.log('  mandala_school: ' + (hasSchool ? '✅' : '❌'));
    Logger.log('  mandala_business: ' + (hasBusiness ? '✅' : '❌') + (hasBizTrial ? ' (trial)' : ''));
    Logger.log('  η参加: ' + (hasEta ? '✅' : '❌'));
    Logger.log('  トークン: ' + (hasToken ? '✅ あり' : '❌ なし'));

    var needs = [];
    if (!hasSchool && !hasBizTrial)  needs.push('mandala_school');
    if (!hasBusiness && !hasBizTrial) needs.push('mandala_business');
    if (!hasEta) needs.push('η-goal');
    if (!hasToken) needs.push('token');

    if (needs.length === 0) {
      Logger.log('  → 全て完備、修正不要 ✅');
      summary.push(memberId + ' ' + nick + ': OK');
      ok++;
    } else {
      Logger.log('  → 不足: ' + needs.join(', '));
      if (autoFix) {
        try {
          if (!hasSchool && !hasBizTrial && typeof addMemberToGroup === 'function') {
            addMemberToGroup(memberId, 'mandala_school');
            Logger.log('    ✓ mandala_school 追加');
          }
          if (!hasBusiness && !hasBizTrial && typeof addMemberToGroup === 'function') {
            addMemberToGroup(memberId, 'mandala_business');
            Logger.log('    ✓ mandala_business 追加');
          }
          if (!hasEta && typeof enrollMemberInGoal === 'function') {
            enrollMemberInGoal(memberId, nick, 'η', 'マンダラ経営マスターコース');
            Logger.log('    ✓ η参加 追加');
          }
          if (!hasToken) {
            var newToken = Utilities.getUuid();
            userSh.getRange(matchedRow + 2, COL_TOKEN).setValue(newToken);
            Logger.log('    ✓ トークン生成: ' + newToken.substring(0, 8) + '...');
          }
          // ホームシート（ステータスSS）も再生成 — グループ/ゴール変更を反映
          try {
            var statusUrl = String(r[COL_STATUS - 1] || '').trim();
            var ssIdMatch = statusUrl.match(/\/d\/([a-zA-Z0-9_-]{20,})/);
            if (ssIdMatch && typeof refreshHomeSheet === 'function') {
              refreshHomeSheet(ssIdMatch[1], memberId);
              Logger.log('    ✓ ホームシート更新（ステータスSS反映）');
            }
          } catch(eHs) { Logger.log('    ⚠ ホームシート更新スキップ: ' + eHs.message); }
          Logger.log('  → 修正完了 ✅');
          summary.push(memberId + ' ' + nick + ': FIXED (' + needs.join(',') + ')');
          fixed++;
        } catch(eFix) {
          Logger.log('  ❌ 修正エラー: ' + eFix.message);
          summary.push(memberId + ' ' + nick + ': FIX_ERROR ' + eFix.message);
        }
      } else {
        summary.push(memberId + ' ' + nick + ': 不足 ' + needs.join(','));
      }
    }
  });

  Logger.log('');
  Logger.log('=== 集計 ===');
  Logger.log('  OK: ' + ok + (autoFix ? ' / 修正済み: ' + fixed : '') + ' / NOT FOUND: ' + notFound);

  try {
    SpreadsheetApp.getUi().alert(
      'η 加入漏れ ' + (autoFix ? '修正' : '診断') + ' 結果',
      summary.join('\n') +
      '\n\n--- 集計 ---\n' +
      'OK: ' + ok + (autoFix ? ' / 修正済み: ' + fixed : '') + ' / NOT FOUND: ' + notFound +
      '\n\n詳細はGAS実行ログを確認してください',
      SpreadsheetApp.getUi().ButtonSet.OK);
  } catch(eU) {}
}

// ============================================================
// [ETA-M1] η 教材リンクの一括紐付け（Drive → クエストマスタ「関連URL」）
// ------------------------------------------------------------
//   教材（動画・スライド・音声概要・レポート・カスタムプロンプト）は
//   Drive の「Sy448_MCQ用フォルダマンダラ経営計画」に
//   マス番号つきフォルダで既に揃っている。
//     例) C3_中期計画-3年後_5年後のPL_BSを描く
//
//   クエストマスタに「関連URL」列があれば、クエスト詳細Webアプリが
//   「📋️ 関連URL」ボタンを出す仕組みが既にある（gas_quest）。
//   ＝ 列を埋めるだけで、マイページから教材に飛べるようになる。
//
//   フォルダ名の頭がマス番号なので、手でURLを64行貼る必要はない。
//   教材を足したあとに再実行すれば、新しいマスだけが埋まる（冪等）。
//
//   ★ 上書きはしない。既に値が入っている行は必ず温存する。
//     （手で貼ったNotebookLMリンク等を壊さないため）
//     入れ替えたいときは第1引数 force=true で実行する。
// ============================================================
var ETA_MATERIAL_FOLDER_ID = '1NY1jw3DwtQWpFox2hluLGZZZ3treFfkv';
// ★ 書き込み先は「教材」列だけ。絶対にフォールバックさせない。
//   「関連URL」列には編で共通の NotebookLM が1個入っている（64マス同じ値・正しいデータ）。
//   ここを教材フォルダで上書きすると、編のノートブックへの導線が全部消える。
//   教材はマスごとに別フォルダなので、列を分けて両方を並べる。
var ETA_MATERIAL_HEADER    = '教材';

// クエストマスタのヘッダー名から列番号（1始まり）を探す。無ければ -1
function _etaFindCol(headers, names) {
  for (var n = 0; n < names.length; n++) {
    for (var i = 0; i < headers.length; i++) {
      if (String(headers[i]).trim() === names[n]) return i + 1;
    }
  }
  return -1;
}

function linkEtaMaterials(force) {
  var ss = SpreadsheetApp.openById(SS_ID);
  var sh = ss.getSheetByName('クエストマスタ');
  if (!sh) throw new Error('クエストマスタが見つかりません');

  // ── ① Drive を走査して マス番号 → フォルダURL の対応を作る ──
  var map = {};
  var scanned = 0;
  var root;
  try {
    root = DriveApp.getFolderById(ETA_MATERIAL_FOLDER_ID);
  } catch (e) {
    throw new Error('教材フォルダを開けません（ID: ' + ETA_MATERIAL_FOLDER_ID + '）\n' + e.message);
  }
  var it = root.getFolders();
  while (it.hasNext()) {
    var f = it.next();
    scanned++;
    // 「C3_中期計画…」「A1 原則を学ぶ…」の頭を拾う
    var m = String(f.getName()).trim().match(/^([A-H][1-8])[_\s\-　]/);
    if (!m) continue;
    var cell = m[1].toUpperCase();
    // 同じマスのフォルダが複数ある場合は先勝ち（ログに残す）
    if (map[cell]) {
      Logger.log('  ⚠ マス重複: ' + cell + ' → 既存を優先し「' + f.getName() + '」はスキップ');
      continue;
    }
    map[cell] = 'https://drive.google.com/drive/folders/' + f.getId();
  }
  Logger.log('Drive走査: ' + scanned + 'フォルダ中、マス番号つき ' + Object.keys(map).length + '件');

  // ── ② クエストマスタの列を特定（無ければ「関連URL」列を作る）──
  var lastCol = sh.getLastColumn();
  var headers = sh.getRange(1, 1, 1, lastCol).getValues()[0];
  var cGoal  = _etaFindCol(headers, ['ゴールID', 'ゴール', 'goalId']);
  var cQuest = _etaFindCol(headers, ['記号', 'クエストID', 'questId', 'ID']);
  var cUrl   = _etaFindCol(headers, [ETA_MATERIAL_HEADER]);   // ← 教材列のみ。関連URLは触らない
  if (cGoal < 0 || cQuest < 0) {
    throw new Error('クエストマスタに ゴール／記号 の列が見つかりません。ヘッダー: ' + JSON.stringify(headers));
  }
  if (cUrl < 0) {
    cUrl = lastCol + 1;
    sh.getRange(1, cUrl).setValue(ETA_MATERIAL_HEADER)
      .setFontWeight('bold');
    Logger.log('「' + ETA_MATERIAL_HEADER + '」列を新規作成: ' + cUrl + '列目');
    lastCol = cUrl;
  }

  // ── ③ η の行だけを埋める（他ゴールには絶対に触らない）──
  if (sh.getLastRow() < 2) throw new Error('クエストマスタにデータがありません');
  var rowCount = sh.getLastRow() - 1;
  var goals  = sh.getRange(2, cGoal,  rowCount, 1).getValues();
  var quests = sh.getRange(2, cQuest, rowCount, 1).getValues();
  var urlRange = sh.getRange(2, cUrl, rowCount, 1);
  var urls = urlRange.getValues();

  var filled = 0, kept = 0, missing = [], touchedRows = 0;
  for (var i = 0; i < rowCount; i++) {
    if (String(goals[i][0]).trim() !== 'η') continue;
    touchedRows++;
    var cell = String(quests[i][0]).trim().toUpperCase();
    var want = map[cell];
    if (!want) { missing.push(cell); continue; }
    var cur = String(urls[i][0] || '').trim();
    if (cur && !force) { kept++; continue; }
    if (cur === want) { kept++; continue; }
    urls[i][0] = want;
    filled++;
  }
  if (filled > 0) urlRange.setValues(urls);
  SpreadsheetApp.flush();

  var res = {
    scanned: scanned, mapped: Object.keys(map).length,
    etaRows: touchedRows, filled: filled, kept: kept, missing: missing
  };
  Logger.log('linkEtaMaterials: ' + JSON.stringify(res));
  return res;
}

function menu_ETA_M1_教材リンク一括紐付け() {
  var ui = SpreadsheetApp.getUi();
  var ok = ui.alert('η 教材リンクの一括紐付け',
    'Driveの教材フォルダを走査して、クエストマスタの「' + ETA_MATERIAL_HEADER + '」列に\n' +
    'ηの各マスの教材フォルダURLを書き込みます。\n\n' +
    '・すでに値が入っている行は温存します（上書きしません）\n' +
    '・η以外のゴールには触れません\n' +
    '・何度実行しても安全です\n\n実行しますか？',
    ui.ButtonSet.OK_CANCEL);
  if (ok !== ui.Button.OK) return;

  var r;
  try { r = linkEtaMaterials(false); }
  catch (e) { ui.alert('エラー', e.message, ui.ButtonSet.OK); return; }

  ui.alert('✅ 紐付け完了',
    'Drive走査: ' + r.scanned + ' フォルダ（マス番号つき ' + r.mapped + ' 件）\n' +
    'ηのクエスト行: ' + r.etaRows + ' 件\n\n' +
    '新たに書き込み: ' + r.filled + ' 件\n' +
    '温存（既に入力済）: ' + r.kept + ' 件\n' +
    '教材フォルダが無いマス: ' + (r.missing.length ? r.missing.join(', ') : 'なし') + '\n\n' +
    'マイページ →「クエスト詳細」→ 対象のマス →「📚 教材を見る」で開けます。',
    ui.ButtonSet.OK);
}

// 入れ替え用（既存の値も上書きする）。ふだんは M1 を使うこと
function menu_ETA_M2_教材リンク強制上書き() {
  var ui = SpreadsheetApp.getUi();
  var ok = ui.alert('η 教材リンクを強制上書き',
    '⚠️ すでに入っている「' + ETA_MATERIAL_HEADER + '」の値も上書きします。\n' +
    '※ 対象は「' + ETA_MATERIAL_HEADER + '」列だけです。編共通のNotebookLMが\n' +
    '　 入っている「関連URL」列には触れません。ふだんは ETA-M1 を使ってください。',
    ui.ButtonSet.OK_CANCEL);
  if (ok !== ui.Button.OK) return;
  var r;
  try { r = linkEtaMaterials(true); }
  catch (e) { ui.alert('エラー', e.message, ui.ButtonSet.OK); return; }
  ui.alert('✅ 上書き完了',
    '書き込み: ' + r.filled + ' 件 / 教材フォルダが無いマス: ' +
    (r.missing.length ? r.missing.join(', ') : 'なし'), ui.ButtonSet.OK);
}

// ------------------------------------------------------------
//  [ETA-M0] 下見・突合（読むだけ・1文字も書かない）
//    Drive の教材フォルダと、クエストマスタの現在値を突き合わせる。
//    「既に何か入っている」ときに、それが教材URLなのか別物なのかを見分ける。
// ------------------------------------------------------------
function menu_ETA_M0_教材リンク下見() {
  var ui = SpreadsheetApp.getUi();

  // ① Drive: マス → フォルダURL
  var map = {}, root;
  try { root = DriveApp.getFolderById(ETA_MATERIAL_FOLDER_ID); }
  catch (e) { ui.alert('教材フォルダを開けません: ' + e.message); return; }
  var it = root.getFolders();
  while (it.hasNext()) {
    var f = it.next();
    var m = String(f.getName()).trim().match(/^([A-H][1-8])[_\s\-　]/);
    if (!m) continue;
    var c = m[1].toUpperCase();
    if (!map[c]) map[c] = 'https://drive.google.com/drive/folders/' + f.getId();
  }

  // ② クエストマスタの現在値
  var ss = SpreadsheetApp.openById(SS_ID);
  var sh = ss.getSheetByName('クエストマスタ');
  if (!sh || sh.getLastRow() < 2) { ui.alert('クエストマスタが空です'); return; }
  var lastCol = sh.getLastColumn();
  var headers = sh.getRange(1, 1, 1, lastCol).getValues()[0];
  var cGoal  = _etaFindCol(headers, ['ゴールID', 'ゴール', 'goalId']);
  var cQuest = _etaFindCol(headers, ['記号', 'クエストID', 'questId', 'ID']);
  var candidates = [ETA_MATERIAL_HEADER];   // ← 教材列のみ
  var cUrl = _etaFindCol(headers, candidates);
  var usedHeader = cUrl > 0 ? String(headers[cUrl - 1]).trim() : '（該当列なし）';

  if (cUrl < 0) {
    ui.alert('列が見つかりません',
      '「' + candidates.join('／') + '」のどれもクエストマスタにありません。\n' +
      'ETA-M1 を実行すると「' + ETA_MATERIAL_HEADER + '」列を新規作成します。\n\n' +
      '現在のヘッダー:\n' + headers.join(' | '), ui.ButtonSet.OK);
    return;
  }

  var rowCount = sh.getLastRow() - 1;
  var goals  = sh.getRange(2, cGoal,  rowCount, 1).getValues();
  var quests = sh.getRange(2, cQuest, rowCount, 1).getValues();
  var range  = sh.getRange(2, cUrl, rowCount, 1);
  var vals   = range.getValues();
  var rich   = null;
  try { rich = range.getRichTextValues(); } catch (e2) {}

  var same = 0, other = 0, empty = 0, noFolder = 0;
  var samples = [];
  for (var i = 0; i < rowCount; i++) {
    if (String(goals[i][0]).trim() !== 'η') continue;
    var cell = String(quests[i][0]).trim().toUpperCase();
    var want = map[cell] || '';
    if (!want) noFolder++;

    // 表示文字がラベルでリンクだけ貼られている場合も拾う
    var cur = String(vals[i][0] || '').trim();
    var linked = '';
    if (rich) {
      try { linked = (rich[i][0] && rich[i][0].getLinkUrl && rich[i][0].getLinkUrl()) || ''; } catch (e3) {}
    }
    var eff = /^https?:\/\//.test(cur) ? cur : (linked || cur);

    if (!eff) { empty++; continue; }
    if (want && eff === want) { same++; continue; }
    other++;
    if (samples.length < 8) {
      samples.push(cell + '\n   現在: ' + eff.substring(0, 78) +
                   '\n   教材: ' + (want ? want.substring(0, 78) : '（フォルダなし）'));
    }
  }

  ui.alert('η 教材リンク 下見・突合（書き込みなし）',
    '読み取った列: 「' + usedHeader + '」（' + cUrl + '列目）\n' +
    'Driveのマス番号つきフォルダ: ' + Object.keys(map).length + ' 件\n' +
    '─────────────\n' +
    '✅ 教材URLと一致        : ' + same + ' 件\n' +
    '⚠️ 別のURLが入っている  : ' + other + ' 件\n' +
    '␣ 空                    : ' + empty + ' 件\n' +
    '（教材フォルダが無いマス: ' + noFolder + ' 件）\n' +
    (samples.length
      ? '\n── 別のURLの例 ──\n' + samples.join('\n')
      : '\nすべて教材URLと一致しています。追加作業は不要です。'),
    ui.ButtonSet.OK);
}
