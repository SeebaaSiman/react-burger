import { IconStyle } from "../../../ui/styles/home-style";

export const HeaderIcon = ({ toggleMenu, menuOpen }) => {
  return (
    <IconStyle className={menuOpen ? "open" : ""} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </IconStyle>
  );
};
