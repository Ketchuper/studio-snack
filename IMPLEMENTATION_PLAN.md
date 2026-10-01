# STUDIO SNACK 実装計画

## 方針

`SITE_SPEC.md` と `reference/studio-snack-home-reference.png` を基準に、Next.js App Router と TypeScript で日英対応の5ページを制作する。最初は予約・決済連携を含まないレビュー用サイトを完成させ、運用ルールとアカウントが揃ってから連携する。参照画像はレイアウトの基準とし、実績は仕様書のYouTube URL 6本を正とする。OZworld「畳 -Tatami-」を先頭に置く。

## 構成

```text
app/[locale]/{page,price/page,access/page,about/page,contact/page}.tsx
app/{sitemap,robots}.ts
src/components/{layout,home,shared,motion}/
src/content/{works,studio,equipment}.ts
src/messages/{ja,en}.json
src/lib/{i18n,metadata,analytics}.ts
public/images/{studio,okinawa,brand}/
```

- `/` は `/ja` へ。言語切替は同じページを保つ。翻訳はローカルJSON、実績・連絡先・機材は型付きデータで管理する。
- 共通部品: `Header`、`LocaleSwitch`、`MobileMenu`、`Footer`、`StickyBookingCTA`、`Button`。
- HOME: `Hero`、`PackageOverview`、`WorksGallery`、`FirstRecordingFlow`、`ToughSakiProfile`、`FinalCTA`。
- PRICE はパッケージと確認済み条件、ACCESS は住所と地図、ABOUT はプロフィールと機材、CONTACT は問い合わせ導線と送信準備中の入力UI。

## デザインと動き

- オフホワイト `#F6F2E9`、黒 `#111111`、コーラル `#FF5A46`、海の青 `#167FA8`、ピーチ `#FBE8DE`。英字は凝縮書体、日本語は太いゴシック。最大幅は約1200px。
- デスクトップのヒーローは左約42%、右約58%。承認済み透過ロゴを使用。スタジオ写真は現行サイトの実写。海の帯は生成画像として扱い、実在地の写真と表記しない。
- 実績はYouTube公式サムネイルを元URLへリンクする。個別の制作担当範囲は確認前に掲載しない。
- ヒーローと価格線は約0.5〜0.7秒で表示。実績とフローは一度だけ短く現れ、カードとCTAはホバー・フォーカスで反応。動きの軽減設定を尊重する。
- モバイルでは価格と主CTAが早く見える順序にし、画面下に予約CTAを固定する。

## 検索と公開前確認

- 各言語・各ページにタイトル、説明、canonical、hreflang、OG画像。`LocalBusiness` JSON-LD は確定情報だけを載せ、サイトマップとrobotsを用意する。
- レビュー版の予約・相談導線はCONTACTへ。電話とInstagramを有効にする。LINE、フォーム送信、カレンダー、決済、通知はアカウントと運用ルールが揃ってから。
- 完了条件: 5ページ×2言語、全ナビ・CTA・実績リンク、スマートフォン、キーボード、動き軽減、ビルド、視覚比較。
- 公開前TODO: 正式メール、駐車場・入口、営業時間、Tough Saki正式プロフィール、作品ごとの担当範囲、LINE URL、予約所要時間、空き枠、キャンセル規約、決済手段、通知先、正式ドメイン。

## 作業分担の基準

- Sol: 共通基盤、HOME、視覚確認と修正判断。
- Terra: 固定した部品とルールを用いてPRICE / ACCESS / ABOUT / CONTACT。
- Luna: 確定済みデータ、翻訳、alt、リンク修正など範囲を明示できる作業。

この計画の実装ではモデル間の切替は必須とせず、完成後のレビューを一つの基準で行う。
