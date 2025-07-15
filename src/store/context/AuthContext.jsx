import { createContext, useContext } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useToast } from "./ToastContext";
import { getNameOfMail } from "../../utils/getNameOfMail";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("ReactBurgerUser", null);
  const [admin, setAdmin] = useLocalStorage("ReactBurgerAdmin", null);
  const { showToast } = useToast();
  const loginUser = (userData) => {
    setUser(userData);
    if (admin) setAdmin(null);
  };
  const loginAdmin = (userData) => {
    setAdmin(userData);
    if (user) setUser(null);
  };
  const logout = () => {
    setUser(null);
    setAdmin(null);
    showToast({ message: `👋 Adios ${getNameOfMail(user || admin)}, vuelve pronto.`, type: "success" });
  };

  return <AuthContext.Provider value={{ user, admin, loginUser, loginAdmin, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContext");
  }
  return context;
};
