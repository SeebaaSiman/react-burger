import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";
import { HamburgerIcon } from "../../HamburgerIcon";
import ThemeToggleButton from "../../buttons/ThemeToggleButton";
import { HeaderContainer, HeaderToggleSesionContainer } from "../../../ui/styles/home-style";
import { HeaderLogin } from "./HeaderLogin";
import { useMenu } from "../../../hooks/useMenu";

function Header({ navRef, navButtonsMap, navButtonsRefs, scrollToCategory, activeCategory }) {
  const { toggleMenu, closeMenu, menuOpen } = useMenu();

  return (
    <HeaderContainer>
      <HeaderLogo />
      <HeaderNav
        {...{ scrollToCategory, menuOpen, navRef, navButtonsMap, activeCategory, navButtonsRefs, closeMenu }}
      />
      <HeaderToggleSesionContainer>
        <ThemeToggleButton />
        <HeaderLogin />
      </HeaderToggleSesionContainer>

      <HamburgerIcon {...{ toggleMenu, menuOpen }} />
    </HeaderContainer>
  );
}

export default Header;
