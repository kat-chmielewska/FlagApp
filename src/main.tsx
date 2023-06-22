import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NightModeProvider } from "./context/NightMode.context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NightModeProvider>
      <App />
    </NightModeProvider>
  </React.StrictMode>
);
