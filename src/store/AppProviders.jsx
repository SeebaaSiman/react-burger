import { MenuProvider } from "./context/MenuProvider.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";
import { ThemeStyleProvider } from "./context/ThemeProvider.jsx";
import { usePageVisibility } from "../hooks/usePageVisibility.js";
import { AdminProvider } from "./context/AdminContext.jsx";

const AppProviders = ({ children }) => {
  usePageVisibility("¡No te vayas! ¡Tenes hambre!");
  return (
    <ThemeStyleProvider>
      <ToastProvider>
        <MenuProvider>
          <CartProvider>
            <AdminProvider>
              <AuthProvider>{children}</AuthProvider>
            </AdminProvider>
          </CartProvider>
        </MenuProvider>
      </ToastProvider>
    </ThemeStyleProvider>
  );
};

export default AppProviders;
