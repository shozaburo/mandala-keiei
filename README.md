# mandala-keiei — マンダラ経営実践塾

マンダラ経営実践塾（月額19,800円・myhou.co.jp）のコードと設計文書のリポジトリ。
2026-08-28 発足（D決定：みんなのAI実践塾から運用を独立させる）。

## このリポの範囲と、境界

| ここにあるもの | ここに無いもの（本籍） |
|---|---|
| 経営塾ポータル `gas_cohort/`（塾生の home） | AI64教材・クエストマスタ・EXP・称号 → **mcq110**（AI実践塾の資産。借りるだけ） |
| 経営塾のLP `live/keiei_new.html`（myhou.co.jp/keiei/） | 会員基盤（ユーザーシート・トークン・PAY1・メール送信）→ **mcq110 / 管理SS**（共通基盤） |
| η関連GASの参照コピー `reference/`（正本は当面 mcq110/gas_main） | 会員データ → スプレッドシート |

- **19,800円はAI実践塾を包含する上位プログラム**。AI64は「使う権利」をプランマスタ経由で付与（SYNC1）
- 経営塾の入口は **myhou.co.jp**。AI実践塾は re-gi.jp、認定コーチは mandalachart.jp（入口はサイトで分ける）

## 作業の作法（mcq110と同じ3点同期）

```
朝: GitHub Pull → clasp pull（gas_cohort/）
夜: clasp push → commit → GitHub Push
```

- 詳細は mcq110 の `スタッフ向け_Claude×GitHub作業マニュアル.md` と同じ
- 画像・動画・PDFはGoogleドライブ（gitに入れない）。コードと.mdだけをここに
- Googleドライブ内でgit操作をしないこと（8/26の教訓）

## いまの構成

- `gas_cohort/` … 経営塾ポータル（=塾生のマイページ。?cohort=mandala_business&token=）
- `live/` … LP正本
- `reference/` … η関連GASの参照コピー（編集はmcq110側で。移管は運用安定後）

## 直近の計画（2026-09）

- 9/1（火）1期生キックオフ（昼活）
- 9/24（木）20:00 初回・経営実践ナイト（毎月第4木曜）
- 週次ランキング便（今週の獲得EXP・毎週リセット）と8部門ヒートマップ → このリポで実装予定
