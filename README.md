# portfolio

ゆってい（Yuttei / 西尾 優伽）の個人ポートフォリオ兼作品一覧サイトです。  
プロフィールと連絡先リンクに加え、制作した Web アプリと Web サイトを「Web Apps」「Web Sites」の2セクションに分けて横スクロール可能なカード列で並べ、クリックすると新しいタブで各ページを開きます。

## できること

- **プロフィールと連絡先の表示**：円形アイコン、メイン表示名（ゆってい）、本名（サブ表記）、自己紹介、所属・研究室、および GitHub / X / YouTube / note / Email へのリンクを枠なしのミニマルなレイアウトで1ページ上部に配置
- **Web Apps / Web Sites の分類表示と横スクロール・別タブ起動**：作品を「Web Apps」と「Web Sites」の2セクションに分けて実画面サムネイル付きの横スクロールカード列で並べ、クリック時に `target="_blank"`（`rel="noopener noreferrer"`）で対象ページを新しいタブで表示
- **データファイルのみの更新**：[src/data/portfolioData.ts](src/data/portfolioData.ts) の `WEB_APPS` / `WEB_SITES` 配列に1件追記してカードを追加

## ドキュメント

- [docs/specification.md](docs/specification.md)：画面構成、データモデル、アクセシビリティ、テスト方針、公開前の確認事項
- [docs/content-update.md](docs/content-update.md)：作品追加、プロフィール変更、サムネイル・アイコン・ファビコンの更新手順

## 開発環境の準備と起動方法

開発環境は Nix Flake（[flake.nix](flake.nix) / [packages.nix](packages.nix)）で管理しています。コマンドは `nix develop` の環境内で実行してください。

1. Nix の開発シェルに入る（初回は Git リポジトリの初期化と `.githooks` の設定を自動で実行）

```sh
nix develop
```

2. 依存パッケージをインストール（未導入の場合）

```sh
npm install
```

3. 開発サーバーを起動し、表示された URL をブラウザで開く

```sh
npm run dev
```

| コマンド | 内容 |
|---|---|
| `npm run dev` | 開発サーバーの起動 |
| `npm run typecheck` | TypeScript の型チェック |
| `npm test` | データ整合性と別タブ遷移属性の単体テストを実行 |
| `npm run build` | 型チェックと本番用ファイルのビルド（`dist/` へ出力） |
| `npm run preview` | ビルド成果物のローカル確認 |

## ディレクトリ構成

```text
portfolio/
├── .githooks/
│   └── pre-commit                      # コミット前のシークレット検査（gitleaks）
├── docs/
│   ├── images/
│   │   └── layout.svg                  # 画面構成のレイアウト図
│   ├── content-update.md               # 作品・プロフィール・画像の更新手順書
│   └── specification.md                # 詳細仕様書
├── public/
│   ├── avatar.jpg                      # プロフィールアイコン画像（512×512）
│   ├── favicon.png                     # 円形切り抜きのファビコン（256×256）
│   └── thumbnails/                     # 各作品の実画面サムネイル画像（16:9、960×540）
│       ├── nishio-piano-school.jpg
│       ├── novel-reprise.jpg
│       └── polaris.jpg
├── src/
│   ├── __tests__/
│   │   └── portfolio.test.tsx          # データと描画 HTML の最小限テスト
│   ├── components/
│   │   ├── AppCard.tsx                 # 別タブ遷移する作品カード
│   │   ├── Footer.tsx                  # フッター
│   │   ├── Header.tsx                  # ヘッダー（Yuttei / Profile / Web Apps / Web Sites）
│   │   ├── ProfileSection.tsx          # 枠なしプロフィール・SNS リンク欄
│   │   ├── SocialIcon.tsx              # SNS・メールアイコン
│   │   └── WorkSection.tsx             # 横スクロール対応の Web Apps / Web Sites セクション
│   ├── data/
│   │   └── portfolioData.ts            # プロフィール・SNS・Web Apps・Web Sites のデータ
│   ├── styles/
│   │   └── index.css                   # モダン・ミニマルなスタイル定義
│   ├── types/
│   │   └── portfolio.ts                # TypeScript の型定義
│   ├── App.tsx                         # ページ全体の構成
│   └── main.tsx                        # React アプリのエントリポイント
├── flake.nix                           # Nix 開発シェル定義
├── packages.nix                        # Nix で管理する開発ツール一覧
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```
