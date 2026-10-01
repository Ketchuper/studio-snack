# STUDIO SNACK 写真再生成プロンプト

現行写真を image-to-image の参照画像として使い、配置済みのページ構成を保ったまま画質だけを上げるためのプロンプトです。まずは `public/images/studio/` の3枚を元画像として使い、各画像の構図を維持してください。

## 共通の指定

- 元画像を必ず参照画像に設定する。
- 構図、カメラ位置、画角、部屋の寸法、家具、機材、配線、壁の吸音材、窓、ポスターの位置を変えない。
- 新しい機材、人、文字、ブランドロゴ、観葉植物、窓の外の景色を追加しない。
- 写真らしい解像感だけを上げ、過度な HDR、CG 感、過剰なボケを避ける。
- 長辺 2,048px 以上、元画像と同じ横縦比で書き出す。
- image-to-image の変化量は低め（目安 0.20–0.35）にする。出力後は、機材の型・本数・位置が元画像と一致しているかを確認する。

## 共通プロンプト

```text
Using the supplied reference photo, create a premium editorial interior photograph of this exact recording studio. Preserve the exact room, camera position, framing, lens perspective, furniture, audio equipment, monitors, microphone, cables, acoustic treatment, windows, wall art, and every object's placement from the reference image. Improve only photographic quality: authentic professional full-frame camera detail, controlled highlight roll-off, clean shadows, accurate materials, natural warm Okinawan daylight, subtle practical studio lighting, realistic color grading, sharp but natural textures, understated music editorial art direction. The result must look like a real commissioned architectural and music-studio photograph, not a rendered image.
```

## ネガティブプロンプト

```text
Do not redesign or rearrange the room. Do not add, remove, replace, duplicate, or alter any equipment, furniture, people, palms, decorations, signage, logos, text, screens, cables, windows, or outside scenery. No CGI, illustration, fisheye distortion, excessive wide angle, dramatic neon, over-saturated colors, artificial lens flare, excessive HDR, fake bokeh, or invented room extensions.
```

## 画像ごとの追加指示

### `studio-console.jpg` — ヒーローとプロフィール用

```text
Keep the existing three-quarter view across the production desk. Retain the exact monitor speakers, DAW display, desk surface, chair, wall treatment, and window position. Refine the image into a bright, premium daytime studio portrait with warm sunlight from the existing window and balanced interior exposure. Keep the console and speakers as the visual center.
```

### `studio-room.jpg` — パッケージ・設備紹介用

```text
Keep the exact wide room composition from the reference. Preserve the production desk, speaker placement, recording setup, acoustic panels, and floor details. Render it as a calm, carefully lit professional studio photograph with believable depth and clean, neutral-to-warm color. Keep all objects at their original scale and position.
```

### `studio-mic.jpg` — アクセス用

```text
Keep the exact recording-space composition and the existing microphone placement. Preserve the booth area, surrounding equipment, acoustic treatment, furniture, and light direction. Improve clarity, skin-free empty-room realism, and material detail while keeping the photo welcoming and credible for a first-time recording visitor.
```

## 使い分け

- ヒーローは `studio-console.jpg` を優先する。
- 同じ写真をページ内で複数回使う場合は、出力を増やさず、CSS のトリミングだけで使い分ける。
- 生成版を採用する前に、元写真と並べて比較し、部屋の事実情報が変わっていない出力だけを残す。
