import { useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useThemeMode = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("theme", false);

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, [setIsDarkMode]);

  return { isDarkMode, toggleTheme };
};
