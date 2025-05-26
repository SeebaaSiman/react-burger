import { useState } from "react";
import { HeaderContainer, HeaderToggleContainer } from "../../../ui/styles/home-style";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";
import { HeaderIcon } from "./HeaderIcon";
import { CartNav } from "../../cart/CartNav";

function Header({
  navRef,
  navButtonsMap,
  navButtonsRefs,
  scrollToCategory,
  activeCategory,
  cart,
  cartButtonTypes,
  handleClearCart,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <HeaderLogo />
      <HeaderNav
        {...{ scrollToCategory, menuOpen, navRef, navButtonsMap, activeCategory, navButtonsRefs, closeMenu }}
      />
      <HeaderIcon {...{ toggleMenu, menuOpen }} />
      <HeaderToggleContainer>
        <CartNav cartState={cart} cartButtonTypes={cartButtonTypes} handleClearCart={handleClearCart} />
      </HeaderToggleContainer>
    </HeaderContainer>
  );
}

export default Header;
