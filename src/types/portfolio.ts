/**
 * SNS や連絡先リンクの種類を表す型です。
 * アイコンの出し分けに使うため、決まった文字列だけに制限しています。
 */
export type SocialKind = "github" | "x" | "youtube" | "note" | "email";

/**
 * 1件の SNS または連絡先リンクを表すデータ構造です。
 */
export interface SocialLink {
  /** 表示するラベル（例: "GitHub", "X", "YouTube", "Email"） */
  label: string;
  /** リンク先の URL または mailto: アドレス */
  url: string;
  /** 表示アイコンを決める識別子 */
  kind: SocialKind;
  /** 仮の URL（モック用）であるかどうか */
  isPlaceholder?: boolean;
}

/**
 * 所属・経歴の1行分を表すデータ構造です。
 */
export interface ProfileItem {
  /** 項目名（例: "所属", "研究室", "進路"） */
  label: string;
  /** 表示する内容 */
  value: string;
}

/**
 * サイト上部に表示するプロフィール情報のデータ構造です。
 */
export interface Profile {
  /** 表示する氏名 */
  name: string;
  /** 氏名のよみがな */
  reading: string;
  /** ハンドルネーム（ニックネーム） */
  handle: string;
  /** モノグラムアイコンに表示するイニシャル（avatar が未指定のときに使用） */
  initials: string;
  /** プロフィールアイコン画像のパス（public フォルダからの相対パス） */
  avatar?: string;
  /** 自己紹介の短い文章 */
  bio: string;
  /** 所属や経歴の一覧 */
  details: ProfileItem[];
}

/**
 * 一覧に並べる Web アプリ1件分のデータ構造です。
 * カードに表示する情報は「サムネイル画像・アプリ名・説明文」の3つに絞っています。
 */
export interface WebAppItem {
  /** React の key や識別子として使う重複しない ID */
  id: string;
  /** カードに表示するアプリ名 */
  title: string;
  /** 1〜2行でまとめるアプリの概要説明 */
  description: string;
  /** カードをクリックしたときに別タブで開く先の URL */
  url: string;
  /** サムネイル画像のパス（public フォルダからの相対パス） */
  thumbnail: string;
  /** モック用の仮 URL であるかどうか */
  isPlaceholder?: boolean;
}
