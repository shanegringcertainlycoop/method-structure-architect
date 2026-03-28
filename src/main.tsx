import { hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// Every page is prerendered at build time, so hydrate the existing HTML.
hydrateRoot(
  document.getElementById("root")!,
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
