import { HeaderNavContainer } from "../../../ui/styles/home-style";

export const HeaderNav = ({
  scrollToCategory,
  menuOpen,
  navRef,
  navButtonsMap,
  closeMenu,
  activeCategory,
  navButtonsRefs,
}) => {
  const onClickButton = (name) => {
    scrollToCategory(name);
    closeMenu();
  };
  return (
    <HeaderNavContainer className={` ${menuOpen ? "open" : ""}`} ref={navRef}>
      {navButtonsMap.map(({ name, label }) => (
        <button
          key={name}
          className={activeCategory === name ? "active" : ""}
          ref={(el) => (navButtonsRefs.current[name] = el)}
          onClick={() => onClickButton(name)}
        >
          {label}
        </button>
      ))}

     </HeaderNavContainer>
  );
};
