import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import VNZRU_ReactMarkdownEditor from ".";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <VNZRU_ReactMarkdownEditor />
  </StrictMode>
);
