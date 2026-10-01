# STUDIO SNACK — Site Specification v0.1

## Purpose

沖縄県内のアーティスト、とくに「初めて録音する人」と活動中のヒップホップアーティストに向けて、STUDIO SNACKが完成まで伴走するスタジオであることを伝え、フル楽曲制作パッケージの予約・相談につなげる。

## Chosen visual direction

- Reference: `reference/studio-snack-home-reference.png` (user-approved layout reference)
- Atmosphere: light editorial record-label design; warm off-white base; black ink typography; coral red and ocean blue accents; studio photography and Okinawa landscapes.
- Logo asset: `assets/studio-snack-logo-black-transparent.png`
- Do not imitate the visual design of Drinkin' Surf Studio. Its page hierarchy and YouTube proof pattern are the only relevant references.

## Navigation and routes

| Nav | Route | Role |
| --- | --- | --- |
| HOME | `/` | value, price, works, first-time flow, profile, CTAs |
| PRICE | `/price` | package scope, price, what to bring, FAQ teaser |
| ACCESS | `/access` | address, map, parking/entrance guidance |
| ABOUT | `/about` | Tough Saki profile, equipment/effects, studio philosophy |
| CONTACT | `/contact` | primary reservation / enquiry conversion |

Use locale routes `/{locale}/...`, with `ja` as default and `en` as the switchable alternative. English lives in separate translation files; do not place full Japanese and English paragraphs together.

## Home page: final section order and copy

### 1. Header

- Lockup: STUDIO SNACK / OKINAWA MUSIC RECORDING STUDIO
- Navigation: HOME, PRICE, ACCESS, ABOUT, CONTACT, JP, EN
- Mobile: menu plus a persistent `予約・相談する` CTA.

### 2. Hero

**Eyebrow**  
`OKINAWA MUSIC RECORDING STUDIO`

**Heading**  
`沖縄で、音楽をカタチに。`

**Offer**  
`フル楽曲制作パッケージ`  
`1曲 ¥20,000（税込）`

**Body**  
`レコーディングからマスタリングまで。曲を完成させるために必要な工程を、ひとつのパッケージに。初めての方も、準備や歌い方から一緒に整理します。`

**Primary CTA** `予約・相談する`  
**Secondary CTA** `無料見学を予約`

**English**  
Heading: `Turn your sound into a finished record.`  
Offer: `FULL SONG PRODUCTION PACKAGE / ¥20,000 tax included`  
Body: `Recording, vocal editing, mixing and mastering in one package. New to recording? We will help you prepare and get the performance right.`

### 3. Package scope

**Heading** `1曲を、完成まで。`

`レコーディング → ピッチ補正 → タイミング補正 → ボーカルチューニング → エフェクト処理 → ミックス → マスタリング`

**Support copy**  
`音源はあるけど、まだ歌い込みが足りない。どう録ればいいか分からない。そんな段階からでも大丈夫です。必要ならプリプロを録って一度持ち帰り、練習の方向も一緒に整理します。`

### 4. Works / YouTube proof

**Eyebrow** `WORKS`  
**Heading** `OKINAWA HIP-HOP SCENE`  
**Body** `STUDIO SNACKで制作に携わった作品の一部です。`

Use external YouTube links. Until individual credit scopes and artist publication permissions are confirmed, label every item `制作実績` and do not claim a specific role.

| Order | Artist / title | YouTube URL |
| --- | --- | --- |
| 1 | OZworld / 畳 -Tatami- (Dir. by Spikey John) | https://youtu.be/SpykaL6PhoU |
| 2 | 邦KUNI＆ジェロニモR.E / Shower feat. MaRI | https://www.youtube.com/watch?v=lo9HavxV4-M |
| 3 | SanNoGo / 善徳, Risky.c, LEVEL Uzi | https://www.youtube.com/watch?v=IHdk8OwME6U |
| 4 | CHarley / Hot road | https://www.youtube.com/watch?v=0CZpJmCDz2k |
| 5 | Ra Tha God / Late Night Run (Prod. by K. Fisha) | https://www.youtube.com/watch?v=OmVusdiE4ZM |
| 6 | AIR SPLASH / Super Moon | https://www.youtube.com/watch?v=aFGzZHg_P-M |

### 5. First recording flow

**Eyebrow** `FIRST RECORDING?`  
**Heading** `はじめてでも、大丈夫です。`

`01 相談・打ち合わせ` — やりたいイメージを一緒に整理します。  
`02 準備・歌詞確認` — 曲と歌詞を確認し、録音の準備をします。  
`03 レコーディング` — リラックスできる環境で、ベストなテイクを探します。  
`04 修正・ミックス` — 細かいところまで整えて、曲として仕上げます。  
`05 マスタリング・完成` — 配信リリースできる完成形でお渡しします。

### 6. Profile

**Eyebrow** `ENGINEER / PRODUCER`  
**Heading** `Tough Saki`

**Body draft**  
`沖縄を拠点に、ヒップホップを中心としたアーティストの楽曲制作をサポート。録音だけで終わらせず、リスナーに届く作品づくりを一緒に追求します。初めて録音する方も、安心してご相談ください。`

This is intentionally a temporary profile draft. Replace it with the verified biography before launch.

### 7. Final CTA

**Heading** `その音楽、ここから始まる。`  
**Primary CTA** `予約・相談する`  
**Secondary CTA** `無料見学を予約`

## Price page copy

**Heading** `フル楽曲制作パッケージ`  
**Price** `1曲 ¥20,000（税込）`

`レコーディング、ピッチ補正、タイミング補正、ボーカルチューニング、エフェクト処理、ミックス、マスタリングを含みます。`

**Note**  
`曲数・準備状況・追加作業については、まず気軽にご相談ください。`

Avoid publishing booking duration, cancellation terms, deep-night surcharge or deliverable revisions until the owner confirms them.

## Contact v1

Primary path: `LINEで予約・相談する` (official LINE account to be created).  
Secondary path: telephone and email.

**Initial enquiry fields**

- Name
- Contact information
- Number of people
- Number of songs
- What you want to make / ask
- Preferred date and time (optional until calendar booking launches)

**Current source data**

- Phone: `080-9109-0576`
- Address: `〒904-00013 沖縄県沖縄市室川2-1-9 ハイビスカスビル404号室（現行サイトには「3階」との記載あり）`
- Parking, entrance guidance, business hours and confirmed email: `TODO — owner confirmation required`

The current website contains conflicting email addresses. Do not publish either without confirmation.

## Technical implementation

- Next.js App Router + TypeScript
- Local content data files for works, copy and translations; no CMS in v1
- `next-intl` or equivalent locale routing
- Responsive image handling and YouTube thumbnail cards that open the original YouTube URLs
- Contact v1: LINE link plus accessible enquiry form UI; submission endpoint can remain disabled until the destination is selected
- Analytics events: `cta_reservation_click`, `cta_tour_click`, `work_video_click`, `locale_change`
- AEO / SEO: metadata per route, `LocalBusiness` and `FAQPage` structured data, semantic headings, Japanese and English sitemap entries

## Stage plan

1. Build a production-quality static front end with the above content and working outbound links.
2. Connect LINE official account and route every primary CTA to it.
3. Add a booking system with calendar availability, payment, confirmation and reminders after the operating rules are final.

## Inputs still needed before launch

- Confirmed studio email
- Parking and entrance instructions
- Business hours / closed days to publish
- Each work's exact STUDIO SNACK credit, if it will be stated
- Final Tough Saki bio and portrait permission
- Approved privacy policy, cancellation policy and payment terms before online payment
