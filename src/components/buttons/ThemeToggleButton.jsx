import { useThemeContext } from "../../store/context/ThemeProvider";
import {
  ButtonThemeCheckbox,
  ButtonThemeKnobs,
  ButtonThemeLayer,
  ButtonThemeStyle,
} from "../../ui/styles/Buttons-style";
import { ToggleIconTheme } from "../ToggleIconTheme";

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();
   return (
    <ButtonThemeStyle>
      <ButtonThemeCheckbox istoggle={isDarkMode} onClick={toggleTheme} />
      <ButtonThemeKnobs istoggle={isDarkMode}>
        <ToggleIconTheme />
      </ButtonThemeKnobs>
      <ButtonThemeLayer istoggle={isDarkMode} />
    </ButtonThemeStyle>
  );
};

export default ThemeToggleButton;
