# STUDIO SNACK

Next.js App Router / TypeScript のレビュー用サイトです。HOME、PRICE、ACCESS、ABOUT、CONTACTを日本語・英語で表示します。

## ローカル起動

```bash
npm install
npm run dev
```

`http://localhost:3000` は `/ja` に転送されます。英語版は `/en` です。

## 公開前の設定

1. `.env.example` を参考に `NEXT_PUBLIC_SITE_URL` を正式ドメインへ設定する。canonical、OG、JSON-LD、サイトマップに使われます。
2. `src/messages/{ja,en}.json` の文言を確認する。Tough Sakiのプロフィール文は仮原稿です。
3. `src/content/works.ts` の実績と担当範囲、`src/content/equipment.ts` の機材の現状を確認する。
4. 正式メール、入口・駐車場、営業時間、LINE URL、写真の掲載・加工方針を確定する。
5. フォーム送信、カレンダー予約、決済、通知は運用ルール確定後に接続する。現在のフォームは送信できません。

## 素材

- `public/images/brand/studio-snack-logo.png`: 承認済みの透過ロゴ。
- `public/images/studio/`: 現行サイトに掲載されている実際のスタジオ写真を仮配置。
- `public/images/okinawa/ocean-interlude.png`: デザイン用に生成した沖縄をイメージする海の画像。実在地点の撮影写真として扱わない。
- 実績サムネイル: YouTube公式の `i.ytimg.com` を表示し、各YouTube URLへリンク。

## 確認コマンド

```bash
npm run lint
npm run typecheck
npm run build
npm audit
```
