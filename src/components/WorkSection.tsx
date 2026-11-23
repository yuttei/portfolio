import type { WebAppItem } from "../types/portfolio";
import { AppCard } from "./AppCard";

interface WorkSectionProps {
  /** ページ内リンクで移動するときに使うセクション ID（例: "apps", "sites"） */
  id: string;
  /** セクションの見出し（例: "Web Apps", "Web Sites"） */
  title: string;
  /** 横スクロールで並べて表示する作品データの一覧 */
  items: WebAppItem[];
}

/**
 * Web アプリや Web サイトのカードを横並び・横スクロールで表示するセクションです。
 */
export function WorkSection({ id, title, items }: WorkSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} className="work-section" aria-labelledby={headingId}>
      <div className="section-header">
        <h2 id={headingId} className="section-title">
          {title}
        </h2>
      </div>

      {/* カードが増えても折り返さず、横方向にスクロールして閲覧できる領域です */}
      <div className="work-shelf" role="region" aria-label={`${title} の一覧`}>
        {items.map((item) => (
          <AppCard key={item.id} app={item} />
        ))}
      </div>
    </section>
  );
}
