import { ExternalLink } from "lucide-react";
import type { WebAppItem } from "../types/portfolio";

interface AppCardProps {
  /** 表示する Web アプリ1件分のデータ */
  app: WebAppItem;
}

/**
 * 1つの Web アプリを表示するカードコンポーネントです。
 * カード全体がリンク（<a> タグ）になっており、クリックすると別タブでアプリを開きます。
 */
export function AppCard({ app }: AppCardProps) {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="app-card"
      aria-label={`${app.title} を新しいタブで開く`}
    >
      <div className="app-thumbnail-wrapper">
        <img
          src={app.thumbnail}
          alt={`${app.title} のサムネイル画像`}
          className="app-thumbnail"
          loading="lazy"
        />
      </div>

      <div className="app-card-body">
        <div className="app-card-title-row">
          <h3 className="app-card-title">{app.title}</h3>
          <ExternalLink
            size={16}
            className="app-external-icon"
            aria-hidden="true"
          />
        </div>
        <p className="app-card-description">{app.description}</p>
      </div>
    </a>
  );
}
