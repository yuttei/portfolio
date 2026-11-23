/**
 * ページ上部に固定表示するヘッダーコンポーネントです。
 * サイト名と、ページ内セクション（プロフィール・アプリ一覧）へのリンクを表示します。
 */
export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand-link">
          Yuttei
        </a>
        <nav className="header-nav" aria-label="ページ内ナビゲーション">
          <a href="#profile" className="nav-link">
            Profile
          </a>
          <a href="#apps" className="nav-link">
            Web Apps
          </a>
          <a href="#sites" className="nav-link">
            Web Sites
          </a>
        </nav>
      </div>
    </header>
  );
}
