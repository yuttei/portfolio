import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles/index.css";

// HTML 内の <div id="root"> を探し、React アプリをその中に描画します。
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("描画先の #root 要素が見つかりませんでした。");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
