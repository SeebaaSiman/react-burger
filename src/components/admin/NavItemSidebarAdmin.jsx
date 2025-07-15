import { adminSideBarData } from "../../services/db/adminSideBarData";
import { NavBarContainer, Overlay } from "../../ui/styles/sidebar-admin-style";

export const NavItemSidebarAdmin = ({
  sideActive,
  overlayRef,
  overlayStyle,
  handleNavigation,
  navItemActive,
  navItemRefs,
}) => {
  const arrData = adminSideBarData();
  return (
    <NavBarContainer className={sideActive && "side-active"}>
      <Overlay ref={overlayRef} style={overlayStyle} />
      {arrData.map((item, index) => {
        const Icon = navItemActive === item.id ? item.icon2 : item.icon;
        const navItemRef = navItemRefs.current[index];
        return (
          <li
            key={item.id}
            ref={navItemRef}
            onClick={() => handleNavigation(item.id, item.to)}
            className={`nav-item-${item.id} ${navItemActive === item.id && "nav-item-active"}`}
            aria-current={navItemActive === item.id ? "true" : undefined}
          >
            {Icon}
            <span>{item.text}</span>
          </li>
        );
      })}
    </NavBarContainer>
  );
};
