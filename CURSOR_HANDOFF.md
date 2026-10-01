# STUDIO SNACK: Cursor 引き継ぎ

最終更新日: 2026-10-01

## 現在の状態

- Next.js 16 / App Router / TypeScript の静的レビューサイト。
- ローカル確認: `npm run dev` → `http://localhost:3000/ja`
- 品質確認済み: `npm run lint`、`npm run typecheck`、`npm run build`。
- 日英ページ: `/ja`, `/ja/price`, `/ja/access`, `/ja/about`, `/ja/contact` と対応する `/en`。
- 現時点でフォーム、Google Calendar、決済、LINE、メール通知の外部連携は未実装。

## デプロイ手順

1. この `studio-snack` ディレクトリ単位でGitHubリポジトリを作成・pushする。
2. VercelでそのリポジトリをImportする。Framework PresetはNext.js。
3. Previewを開き、PCとモバイルで `/ja` と `/en` を確認する。
4. Production用ドメイン決定後、Vercel Environment Variablesに次を設定する。

```text
NEXT_PUBLIC_SITE_URL=https://<正式ドメイン>
```

5. ドメインをVercelプロジェクトに接続し、Productionへデプロイする。

## 公式LINEの接続

LINE公式アカウントとURLが確定したら、CTAの遷移先をLINE URLへ切り替える。現状は `/${locale}/contact` へ遷移する。

- 連絡先データ: `src/content/studio.ts`
- CTA: `src/components/shared/Button.tsx` と各ページ・HOMEセクション
- 翻訳: `src/messages/ja.json`、`src/messages/en.json`

最初は、LINE URLへの遷移だけを実装する。自動応答、管理者通知、予約確定はLINE Messaging APIのチャネル情報と運用要件が決まってから追加する。

## 予約フォームと予約確定の実装順

1. フォーム送信先を確定する（メール、フォームサービス、または自前API）。
2. サーバー側で必須項目を検証し、管理者通知と申込者の受付メールを送る。
3. 空き枠・所要時間・キャンセル規約を確定する。
4. Google Calendarの空き枠取得と予定作成を接続する。
5. 決済手段を確定し、決済完了後に予約を確定する。

送信後のUIは「申込内容の確認 → 受付完了 → 次の案内」とし、カレンダー・決済連携後にのみ「予約確定」を表示する。

## 未確定の公開情報

- 正式メールアドレス
- 駐車場・入口案内、営業時間
- Tough Sakiの正式プロフィール
- 各実績の制作担当範囲
- LINE公式アカウントURL
- 予約枠、所要時間、キャンセル規約、決済手段、通知先

## 写真

現行サイト由来の仮写真を `public/images/studio/` に配置している。部屋・機材・構図を変えずに画質を上げる生成指示は `PHOTO_REGENERATION_PROMPTS.md` を参照する。
