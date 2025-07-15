import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./services/routes/AppRoutes.jsx";
import AppProviders from "./store/AppProviders.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  </StrictMode>
);
