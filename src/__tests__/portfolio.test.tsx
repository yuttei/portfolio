import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { App } from "../App";
import {
  PROFILE_DATA,
  SOCIAL_LINKS,
  WEB_APPS,
  WEB_SITES,
} from "../data/portfolioData";

describe("portfolioData の整合性", () => {
  it("すべての Web Apps / Web Sites に必須項目と重複しない ID が設定されている", () => {
    const ids = new Set<string>();
    const allWorks = [...WEB_APPS, ...WEB_SITES];

    expect(WEB_APPS.length).toBeGreaterThan(0);
    expect(WEB_SITES.length).toBeGreaterThan(0);

    for (const item of allWorks) {
      expect(item.id.trim().length).toBeGreaterThan(0);
      expect(item.title.trim().length).toBeGreaterThan(0);
      expect(item.description.trim().length).toBeGreaterThan(0);
      expect(item.thumbnail.trim().length).toBeGreaterThan(0);
      expect(item.url).toMatch(/^https?:\/\//);
      expect(ids.has(item.id)).toBe(false);
      ids.add(item.id);
    }
  });

  it("SNS・連絡先リンクに必須項目が設定されている", () => {
    expect(SOCIAL_LINKS.length).toBeGreaterThan(0);

    for (const link of SOCIAL_LINKS) {
      expect(link.label.trim().length).toBeGreaterThan(0);
      expect(link.url.trim().length).toBeGreaterThan(0);
    }
  });
});

describe("App コンポーネントの描画", () => {
  it("プロフィール名と Web Apps / Web Sites の全カードが別タブリンクで出力される", () => {
    const html = renderToStaticMarkup(<App />);

    // プロフィール名と見出しが含まれているか確認します（@付きハンドル表記は使わない）。
    expect(html).toContain(PROFILE_DATA.handle);
    expect(html).toContain(PROFILE_DATA.name);
    expect(html).not.toContain(`@${PROFILE_DATA.handle}`);
    expect(html).toContain("Web Apps");
    expect(html).toContain("Web Sites");

    // すべてのカードに target="_blank" と rel="noopener noreferrer" があるか確認します。
    for (const item of [...WEB_APPS, ...WEB_SITES]) {
      expect(html).toContain(item.title);
      expect(html).toContain(
        `href="${item.url}" target="_blank" rel="noopener noreferrer"`,
      );
    }
  });
});
