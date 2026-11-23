import type { Profile, SocialLink, WebAppItem } from "../types/portfolio";

/**
 * プロフィール欄に表示するデータです。
 * 内容を変更したい場合は、このオブジェクトの文字列を書き換えてください。
 */
export const PROFILE_DATA: Profile = {
  name: "西尾 優伽",
  reading: "にしお ゆうが",
  handle: "ゆってい",
  initials: "YN",
  avatar: "./avatar.jpg",
  bio: "情報工学を学びながら、ブラウザで直感的に動かせる 3D ビューアや Web アプリ、作業を効率化するツールを制作しています。",
  details: [
    {
      label: "所属",
      value: "中京大学 工学部 情報工学科 4年",
    },
    {
      label: "研究室",
      value: "伊藤秀昭研究室（伊藤ゼミ）",
    },
  ],
};

/**
 * SNS・連絡先リンクの一覧です。
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/yuttei",
    kind: "github",
  },
  {
    label: "X",
    url: "https://x.com/Yuttei__",
    kind: "x",
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@yuttei-d5s",
    kind: "youtube",
  },
  {
    label: "note",
    url: "https://note.com/nifty_bonobo9848",
    kind: "note",
  },
  {
    label: "Email",
    url: "mailto:ni83132104@gmail.com",
    kind: "email",
  },
];

/**
 * Web Apps セクションに表示するアプリデータの配列です。
 * 新しいアプリを追加したいときは、この配列の末尾に1件オブジェクトを追加します。
 */
export const WEB_APPS: WebAppItem[] = [
  {
    id: "polaris",
    title: "POLARIS — 地球の自転ビューア",
    description:
      "天の北極からの視点を中心に、地球の自転や昼夜の境界、太陽・月・太陽系の動きを 3D で観察できる Web アプリ。",
    url: "https://yuttei.github.io/earth_rotation_viewer/",
    thumbnail: "./thumbnails/polaris.jpg",
  },
  {
    id: "novel-reprise",
    title: "青春再演劇場 リプライズ",
    description:
      "ブラウザ上でストーリーや演出を楽しめるノベルゲーム。場面転換や台詞表示、BGM 再生に対応。",
    url: "https://novel-app-replies.pages.dev/",
    thumbnail: "./thumbnails/novel-reprise.jpg",
  },
];

/**
 * Web Sites セクションに表示する Web サイトデータの配列です。
 * 新しいサイトを追加したいときは、この配列の末尾に1件オブジェクトを追加します。
 */
export const WEB_SITES: WebAppItem[] = [
  {
    id: "nishio-piano-school",
    title: "にしおピアノ教室 Web サイト",
    description:
      "個人ピアノ教室の Web サイト。レッスン案内・空き状況・イベントの公開ページと、講師が内容を更新できる管理画面を制作。",
    url: "https://nishio-piano-school.pages.dev/",
    thumbnail: "./thumbnails/nishio-piano-school.jpg",
  },
];
