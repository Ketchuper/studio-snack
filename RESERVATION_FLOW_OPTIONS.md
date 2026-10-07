# STUDIO SNACK 予約フロー選択メモ

更新日: 2026-10-07

状態: 比較案。サービス契約や予約条件は確定していない。

## 現状

- サイトとLINE公式アカウントで、予約・相談を受け付けている。
- CONTACTページは、送信できないフォームをなくし、LINEへ送る内容を案内している。
- Google Calendarの空き枠表示、予約確定、決済、メール通知は未接続。
- 予約カレンダーの所有アカウントや、公開してよい予定の範囲は未確定。

## 選択肢

| 方法 | できること | 確認が必要な点 |
| --- | --- | --- |
| Google Calendar 予約スケジュール | Calendar上で予約ページを作成し、空き枠、予約イベント、予約フォーム、確認メール・リマインドを管理できる。Stripe決済も設定できる。 | 有料予約や追加機能には対象となるGoogle Workspace / Google Oneプランが必要。Stripe決済後の返金は自動処理されず、主催者がStripeで対応する。サイトのブランド表現と、曲数別の所要時間・料金に合うか確認する。 |
| Cal.com ホステッド予約ページ | 個人向けFreeプランに予約、カレンダー連携、通知、Stripe / PayPal決済が掲載されている。Google Calendarの空き時間を確認でき、予約質問をカスタマイズできる。複数の所要時間を選ばせ、サイト内に埋め込んで色を合わせられる。 | 日本のアカウントでの決済・通貨・税表示、キャンセルと返金、複数曲の料金・所要時間の扱い、予約情報がCalendar予定にどう記録されるかをテスト予約で確認する。時間の選択に応じて決済額も変わるかは公式資料で確認できていない。決済処理料は別途発生する。 |
| Next.jsで独自予約を実装 | サイトのデザイン、曲数ごとの価格・所要時間、入力項目を細かく合わせられる。Google Calendar APIで空き状況を取得し、予約イベントを作成できる。 | OAuth、空き枠の仮押さえ、二重予約防止、Stripe Webhook、支払い失敗・返金、メール、個人情報保護を継続して管理する必要がある。外部サービスで要件を満たせない場合に選ぶ。 |

## 推奨する進め方

まずCal.comで予約テストを1件だけ作り、既存のGoogle Calendarとの連携、質問項目、サイト埋め込み、確認通知を確認する。個人向け無料プランが公開されており、決済前に予約体験とカレンダー反映を試しやすい。Google Calendar側に必要機能が含まれる契約がすでにある場合は、予約スケジュールも並べて試し、管理画面が最も簡単な方を選ぶ。

テストでは、LINEや問い合わせ対応を置き換えず、非公開のテスト予約だけで動作を確認する。実予約・事前決済を始めるのは、下記の運用条件を決めてからにする。曲数に応じて料金や予約時間が変わる設定がツール側で安全に表現できない場合は、手動確認を残すか、独自実装を検討する。

## 実装前に必要な決定

1. 1曲の標準予約時間と、追加曲ごとの時間。
2. 公開する曜日・時間、1日の予約上限、予約締切、何日先まで開けるか、予約間の余白。
3. 料金は曲数×20,000円（税込）か、追加費用があるか。決済は全額前払いか、当日払いも受けるか。
4. 変更・キャンセル期限、返金条件。
5. 必須入力: 氏名、メールまたは電話、人数、曲数、希望内容。予約確定通知とリマインドの受取先。
6. 予約カレンダーのGoogleアカウントと、予約予定に記録してよい個人情報の範囲。
7. 英語予約も同じカレンダーで受けるか。利用者に提示するプライバシー案内。

## 公式情報

- [Google Calendarで予約スケジュールを作成する](https://support.google.com/calendar/answer/10729749?hl=ja)
- [Google Calendarで予約時の支払いを求める](https://support.google.com/calendar/answer/13762729?hl=ja)
- [Google Calendar予約スケジュールのプラン要件](https://support.google.com/calendar/answer/190998?hl=ja)
- [Cal.comのプランと機能](https://cal.com/pricing)
- [Cal.comの決済機能](https://cal.com/features/payments)
- [Cal.com予約ページの埋め込み](https://cal.com/embed)
- [Cal.comの予約時間選択](https://cal.com/blog/save-time-and-improve-client-satisfaction-with-cal-com-s-allow-booker-to-select-d)
- [Google Calendar API: 空き時間照会](https://developers.google.com/workspace/calendar/api/v3/reference/freebusy/query)
- [Google Calendar API: 予定作成](https://developers.google.com/workspace/calendar/api/v3/reference/events/insert)
