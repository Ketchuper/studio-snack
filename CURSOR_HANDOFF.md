# STUDIO SNACK: Cursor 引き継ぎ

最終更新日: 2026-10-07

## 現在の状態

- Next.js 16 / App Router / TypeScript の静的レビューサイト。
- 公開: https://studio-snack.vercel.app （GitHub: https://github.com/Ketchuper/studio-snack ）
- ローカル確認: `npm run dev` → `http://localhost:3000/ja`
- 日英ページ: `/ja`, `/ja/price`, `/ja/access`, `/ja/about`, `/ja/contact` と対応する `/en`。
- 予約・相談 / 無料見学CTAは公式LINE（`https://lin.ee/xgzNuf3`）へ接続済み。
- CONTACTは送信できないフォームを削除し、LINEへ送る情報を案内するカードを表示。
- Google Calendar、オンライン決済、予約通知は未接続。
- LINEのリッチメニューは公開中。チャットと友だち追加時の挨拶を有効化済み。

## デプロイ状況

- GitHub: `https://github.com/Ketchuper/studio-snack`
- Vercel Production: `https://studio-snack.vercel.app`
- VercelはGitHubの`main`ブランチから自動デプロイする。

Vercel Environment Variablesには次を設定する。正式ドメイン決定後は値を置き換える。

```text
NEXT_PUBLIC_SITE_URL=https://<正式ドメイン>
```

その後、ドメインをVercelプロジェクトに接続する。

## 公式LINEの接続

予約・相談CTAは `studio.lineUrl`（`https://lin.ee/xgzNuf3`）へ遷移する。

- 連絡先データ: `src/content/studio.ts`
- CTA: Hero / FinalCTA / Sticky / PRICE / ACCESS / ABOUT / CONTACT
- 翻訳: `src/messages/ja.json`、`src/messages/en.json`

自動応答、管理者通知、予約確定はLINE Messaging APIのチャネル情報と運用要件が決まってから追加する。

## 予約確定の実装順

予約方式の比較と推薦案は `RESERVATION_FLOW_OPTIONS.md` を参照。現在の候補はCal.com埋め込み、Google Calendar予約スケジュール、要件に応じた独自実装。

予約確定へ進む前に、所要時間、曲数と料金の関係、受付時間、変更・キャンセル規約、通知先を確定する。テスト予約で空き枠照合、二重予約防止、Calendar予定の詳細、支払い、確認メールを検証してから、予約CTAをLINE相談からオンライン予約へ切り替える。

## 未確定の公開情報

- 正式ドメイン（当面 `https://studio-snack.vercel.app`）
- 正式メールアドレス
- 駐車場・入口案内、営業時間
- Tough Sakiの正式プロフィール
- 各実績の制作担当範囲
- 予約枠、所要時間、キャンセル規約、決済手段、通知先

## 写真

スタジオ写真は `public/images/studio/` の3枚（`studio-console.jpg` / `studio-room.jpg` / `studio-mic.jpg`）。画質向上版を配置済み。部屋・機材・構図を変えずに再生成する場合は `PHOTO_REGENERATION_PROMPTS.md` を参照（長辺2048px以上推奨）。
