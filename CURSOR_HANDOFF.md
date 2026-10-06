# STUDIO SNACK: Cursor 引き継ぎ

最終更新日: 2026-10-02

## 現在の状態

- Next.js 16 / App Router / TypeScript の静的レビューサイト。
- 公開: https://studio-snack.vercel.app （GitHub: https://github.com/Ketchuper/studio-snack ）
- ローカル確認: `npm run dev` → `http://localhost:3000/ja`
- 日英ページ: `/ja`, `/ja/price`, `/ja/access`, `/ja/about`, `/ja/contact` と対応する `/en`。
- 予約・相談 / 無料見学CTAは公式LINE（`https://lin.ee/uXXgtB1`）へ接続済み。
- フォーム、Google Calendar、決済、メール通知は未接続。

## デプロイ状況

- GitHub: `https://github.com/Ketchuper/studio-snack`
- Vercel Production: `https://studio-snack.vercel.app`
- VercelはGitHubの`main`ブランチから自動デプロイする。

正式ドメイン決定後、Vercel Environment Variablesに次を設定する。

```text
NEXT_PUBLIC_SITE_URL=https://<正式ドメイン>
```

その後、ドメインをVercelプロジェクトに接続する。

## 公式LINEの接続

予約・相談CTAは `studio.lineUrl`（`https://lin.ee/uXXgtB1`）へ遷移する。

- 連絡先データ: `src/content/studio.ts`
- CTA: Hero / FinalCTA / Sticky / PRICE / ACCESS / ABOUT / CONTACT
- 翻訳: `src/messages/ja.json`、`src/messages/en.json`

自動応答、管理者通知、予約確定はLINE Messaging APIのチャネル情報と運用要件が決まってから追加する。

## 予約フォームと予約確定の実装順

1. フォーム送信先を確定する（メール、フォームサービス、または自前API）。
2. サーバー側で必須項目を検証し、管理者通知と申込者の受付メールを送る。
3. 空き枠・所要時間・キャンセル規約を確定する。
4. Google Calendarの空き枠取得と予定作成を接続する。
5. 決済手段を確定し、決済完了後に予約を確定する。

送信後のUIは「申込内容の確認 → 受付完了 → 次の案内」とし、カレンダー・決済連携後にのみ「予約確定」を表示する。

## 未確定の公開情報

- 正式ドメイン（当面 `https://studio-snack.vercel.app`）
- 正式メールアドレス
- 駐車場・入口案内、営業時間
- Tough Sakiの正式プロフィール
- 各実績の制作担当範囲
- 予約枠、所要時間、キャンセル規約、決済手段、通知先

## 写真

スタジオ写真は `public/images/studio/` の3枚（`studio-console.jpg` / `studio-room.jpg` / `studio-mic.jpg`）。画質向上版を配置済み。部屋・機材・構図を変えずに再生成する場合は `PHOTO_REGENERATION_PROMPTS.md` を参照（長辺2048px以上推奨）。
