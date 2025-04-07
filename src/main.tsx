import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MobileLayout from "./layouts/mobile-layout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MobileLayout />
  </StrictMode>
);
