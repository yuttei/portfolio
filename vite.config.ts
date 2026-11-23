import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// Vite（開発サーバー・本番ビルド）と Vitest（テスト）の共通設定です。
export default defineConfig({
  // GitHub Pages などのサブパス配下でも、ローカル環境でも
  // 画像やスクリプトが正しく読み込まれるように相対パス（"./"）を使います。
  base: "./",
  plugins: [react()],
  test: {
    // React のサーバー側レンダリング（renderToStaticMarkup）だけで
    // 最小限の DOM 構造テストを行うため、軽量な node 環境を使います。
    environment: "node",
  },
});
