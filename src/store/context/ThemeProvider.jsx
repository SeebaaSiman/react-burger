import { createContext, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { useThemeMode } from "../../hooks/useThemeMode";
import { darkTheme, lightTheme } from "../../ui/styles/theme-style";
import GlobalStyle from "../../ui/styles/GlobalStyle";

const ThemeContext = createContext();

export const ThemeStyleProvider = ({ children }) => {
  const themeMode = useThemeMode();
  const theme = themeMode.isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within an ThemeContext");
  }
  return context;
};
