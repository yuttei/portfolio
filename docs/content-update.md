# コンテンツ更新手順書

本文書は、ポートフォリオサイト（`portfolio`）に掲載する作品（`Web Apps` / `Web Sites`）、プロフィール情報、サムネイル画像、およびアイコン画像を更新する手順をまとめる。画面構成や型定義の仕様は [specification.md](specification.md) を参照する。

---

## 1. 概要と変更箇所の対応

作品の追加やプロフィール情報の更新は、原則として画像ファイル（`public/` 配下）とデータファイル（[src/data/portfolioData.ts](../src/data/portfolioData.ts)）の編集だけで完結し、React コンポーネントの変更は不要である。

| 更新したい内容 | 変更するファイル | 反映される場所 |
|---|---|---|
| Web Apps の追加・変更・削除 | `public/thumbnails/*.jpg`、[src/data/portfolioData.ts](../src/data/portfolioData.ts)（`WEB_APPS`） | `Web Apps` セクションの横スクロールカード列 |
| Web Sites の追加・変更・削除 | `public/thumbnails/*.jpg`、[src/data/portfolioData.ts](../src/data/portfolioData.ts)（`WEB_SITES`） | `Web Sites` セクションの横スクロールカード列 |
| 名前・自己紹介・所属・進路の変更 | [src/data/portfolioData.ts](../src/data/portfolioData.ts)（`PROFILE_DATA`） | プロフィールセクション上部 |
| SNS・連絡先リンクの変更 | [src/data/portfolioData.ts](../src/data/portfolioData.ts)（`SOCIAL_LINKS`） | プロフィール下部のリンクボタン群 |
| アイコン・ファビコンの差し替え | `public/avatar.jpg`、`public/favicon.png` | プロフィールの円形アイコン、ブラウザタブのファビコン |

---

## 2. 新しい作品（Web Apps / Web Sites）を追加する手順

### 2.1 入力と出力の例

たとえば、新しい Web アプリ `sample-app` を追加する場合、次の2点を用意すると `Web Apps` の末尾に別タブ遷移カードが1枚追加される。

- **追加する画像**：`public/thumbnails/sample-app.jpg`（16:9、`960×540` の JPEG）
- **追記するデータ**（[src/data/portfolioData.ts](../src/data/portfolioData.ts) の `WEB_APPS` 末尾）：

```ts
{
  id: "sample-app",
  title: "サンプルアプリ名",
  description: "1〜3行で収まるアプリの概要説明。",
  url: "https://example.pages.dev/",
  thumbnail: "./thumbnails/sample-app.jpg",
}
```

※ 上記の `id`・`title`・`url` は記述形式を示す例である。実際の追加時は公開済みの URL を設定する。

### 2.2 作業手順

1. 対象サイトのトップ画面を 16:9 比率（例：`1280×720`）で撮影し、元画像（PNG 等）を用意
2. macOS の `sips` コマンドで `960×540` の JPEG（品質 88%）へ変換して `public/thumbnails/` に保存

```sh
sips -s format jpeg -s formatOptions 88 -z 540 960 /path/to/capture.png \
  --out public/thumbnails/<作品ID>.jpg
```

3. [src/data/portfolioData.ts](../src/data/portfolioData.ts) を開き、区分に応じて `WEB_APPS` または `WEB_SITES` 配列へ1件追記
   - `id` は `WEB_APPS` と `WEB_SITES` を合わせて重複しない半角英数字・ハイフンで指定
   - `url` は `https://` から始まる公開先 URL を指定
   - `thumbnail` は `./thumbnails/<作品ID>.jpg` の相対パスで指定
4. 不要になった旧サムネイル画像がある場合は `public/thumbnails/` から削除
5. 「5. 変更後の確認手順」を実行し、テスト・ビルド・画面表示を検証

---

## 3. プロフィール・SNS リンクを更新する手順

### 3.1 プロフィール情報の変更

[src/data/portfolioData.ts](../src/data/portfolioData.ts) の `PROFILE_DATA` を編集する。

- **メイン表示名と本名**：
  - `handle` がページ本文の `h1` 見出し（現在：`ゆってい`）になる
  - `name`（現在：`西尾 優伽`）と `reading`（現在：`にしお ゆうが`）がその下のサブ行に表示される
  - ヘッダー左上のブランド名（現在：`Yuttei`）を変更したい場合のみ [src/components/Header.tsx](../src/components/Header.tsx) と [index.html](../index.html) の `<title>` を編集
- **所属・研究室・進路**：
  - `details` 配列の `{ label, value }` を書き換えまたは増減

### 3.2 SNS・連絡先リンクの変更

[src/data/portfolioData.ts](../src/data/portfolioData.ts) の `SOCIAL_LINKS` を編集する。

- `kind` に指定できる値は `"github"`、`"x"`、`"youtube"`、`"note"`、`"email"` の5種類
- 新しい種類のアイコンを増やす場合は [src/types/portfolio.ts](../src/types/portfolio.ts) の `SocialKind` と [src/components/SocialIcon.tsx](../src/components/SocialIcon.tsx) を合わせて更新

---

## 4. アイコン画像とファビコンを差し替える手順

プロフィールの丸アイコン（`public/avatar.jpg`）とブラウザタブの円形ファビコン（`public/favicon.png`）を差し替える手順を示す。

1. 正方形（1:1）に切り抜いた元画像を用意
2. 元画像を `public/avatar.jpg` へコピーし、`512×512`（JPEG 品質 90%）にリサイズ

```sh
cp /path/to/square-icon.jpg public/avatar.jpg
sips -z 512 512 --setProperty formatOptions 90 public/avatar.jpg
```

3. `sips -g all public/avatar.jpg` を実行し、位置情報や端末情報などの不要なメタデータが含まれていないことを確認
4. 同じ `public/avatar.jpg` から内接円で透過切り抜きした `256×256` の円形 PNG（`public/favicon.png`）を生成

```sh
swift -e '
import Cocoa
let srcUrl = URL(fileURLWithPath: "public/avatar.jpg")
let dstUrl = URL(fileURLWithPath: "public/favicon.png")
guard let image = NSImage(contentsOf: srcUrl) else { exit(1) }
let size = 256
let rep = NSBitmapImageRep(
  bitmapDataPlanes: nil,
  pixelsWide: size,
  pixelsHigh: size,
  bitsPerSample: 8,
  samplesPerPixel: 4,
  hasAlpha: true,
  isPlanar: false,
  colorSpaceName: .deviceRGB,
  bytesPerRow: 0,
  bitsPerPixel: 0
)!
NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: rep)
let rect = NSRect(x: 0, y: 0, width: size, height: size)
NSBezierPath(ovalIn: rect).addClip()
image.draw(in: rect, from: .zero, operation: .sourceOver, fraction: 1.0)
NSGraphicsContext.restoreGraphicsState()
guard let data = rep.representation(using: .png, properties: [:]) else { exit(1) }
try data.write(to: dstUrl)
'
```

---

## 5. 変更後の確認手順

すべてのコマンドは `portfolio` ディレクトリで `nix develop` の環境内で実行する。

1. 単体テストと本番ビルド（型チェックを含む）を実行し、エラーがないことを確認

```sh
nix develop -c sh -c 'npm test && npm run build'
```

2. ローカルサーバーを起動し、ブラウザで表示・画像読み込み・リンク遷移を確認

```sh
nix develop -c npm run dev
```

- **画面で確認する項目**：
  - 追加・変更したサムネイルが 16:9 で歪みなく表示され、リンク先が別タブで正しく開くこと
  - `Web Apps` と `Web Sites` の各行で横スクロールとカードのホバー表示が崩れないこと
  - アイコン差し替え時はブラウザを強制再読み込みし、円形アイコンとタブのファビコンの両方が更新されること
  - コンソールおよびネットワークタブに読み込みエラーが出ていないこと
3. コミット時は `.githooks/pre-commit` による `gitleaks` 検査が自動で実行されるため、エラーが出ないことを確認
