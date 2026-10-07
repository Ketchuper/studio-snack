# STUDIO SNACK 残タスク

最終更新日: 2026-10-07

## 現在の公開状態

- 公開URL: `https://studio-snack.vercel.app`
- 予約・相談と無料見学のCTA: 公式LINEへ接続済み
- 日英のHOME / PRICE / ACCESS / ABOUT / CONTACT: 公開済み
- Google Calendar連携、オンライン決済、予約通知: 未実装
- CONTACTはLINEで予約・相談する手順を表示

## 最優先: 公開情報の確定

| 項目 | 必要な決定 | 反映先 |
| --- | --- | --- |
| 正式ドメイン | 取得するドメインとDNS管理先 | Vercel、`NEXT_PUBLIC_SITE_URL` |
| 入室案内 | 駐車場と入口。現行サイトに記載が見当たらない | ACCESS |
| 連絡先メール | 現行サイトに `studiosnackkoza@gmail.com` と `djtough1@gmail.com` の2種類があるため、公開する方を確認 | CONTACT、LocalBusiness構造化データ |
| 支払い方法 | 現行サイトの日本語は現金・クレジットカード、英語はPayPalも記載。新パッケージで使える手段を確認 | PRICE、予約ページ |
| Tough Sakiプロフィール | 確定原稿 | ABOUT |

営業時間は現行サイトの記載に合わせ、ACCESSとLocalBusiness構造化データに反映済み: 11:00〜22:00、月曜定休。時間外予約はLINE相談。住所にハイビスカスビル3階を追加済み。

## 予約導線: 次に決めること

現在は公式LINEで相談を受ける段階です。予約を自動化する前に、運用ルールを確定する必要があります。

Google Calendarの予約スケジュールとCal.com埋め込み予約を比較したメモ: `RESERVATION_FLOW_OPTIONS.md`。まずテスト用の非公開予約を行い、Google Calendarへの反映、質問項目、メール通知、料金・曲数の扱いを確認してから方式を決める。

1. 1曲あたりの標準所要時間と、同時に受ける人数の上限
2. 予約可能な曜日・時間、最短予約可能日、受付締切
3. 変更・キャンセル期限と返金規約
4. 事前決済に使う決済事業者と、当日払いの扱い
5. 管理者通知を受けるLINE / メールアドレス

決定後は、Google Calendarの空き枠を読み取り、枠選択・決済・予定作成・確認メールまでを1つのフローとして実装する。

## サイト上の改善候補

| 優先度 | 内容 | 着手条件 |
| --- | --- | --- |
| 高 | 正式ドメインに合わせてcanonical、OG、サイトマップを切り替える | ドメイン確定、Vercelアクセス |
| 中 | Google Analytics / Search Consoleを接続して、LINE CTAのクリックを計測する | Googleアカウントと計測方針 |
| 中 | Googleビジネスプロフィールを整備する | オーナーアカウントと営業時間確定 |
| 中 | 各楽曲の制作担当範囲を確認し、許可済みのものだけ実績に追加する | 事実確認・掲載許可 |
| 低 | 実写の追加撮影または再生成写真へ差し替える | 採用する写真の決定 |

## こちらで準備済みのもの

- LINE URLは`src/content/studio.ts`に集約済み
- 全CTAが同じLINE URLを参照
- 構造化データ、日英canonical、サイトマップ、robotsを実装済み
- 写真再生成用プロンプト: `PHOTO_REGENERATION_PROMPTS.md`
- 実装・運用引き継ぎ: `CURSOR_HANDOFF.md`
