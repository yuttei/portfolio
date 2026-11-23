import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProfileSection } from "./components/ProfileSection";
import { WorkSection } from "./components/WorkSection";
import {
  PROFILE_DATA,
  SOCIAL_LINKS,
  WEB_APPS,
  WEB_SITES,
} from "./data/portfolioData";

/**
 * ポートフォリオサイト全体のルートコンポーネントです。
 * ヘッダー・プロフィール・Web Apps・Web Sites・フッターを縦に配置します。
 */
export function App() {
  return (
    <div id="top">
      <Header />
      <main className="container main-content">
        <ProfileSection profile={PROFILE_DATA} socialLinks={SOCIAL_LINKS} />
        <WorkSection id="apps" title="Web Apps" items={WEB_APPS} />
        <WorkSection id="sites" title="Web Sites" items={WEB_SITES} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
