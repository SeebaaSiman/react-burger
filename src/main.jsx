import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./ui/styles/GlobalStyle.js";
import AppRoutes from "./services/routes/AppRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <GlobalStyle />
      <AppRoutes />
    </Router>
  </StrictMode>
);
