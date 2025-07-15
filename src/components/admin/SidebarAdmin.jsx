import { SideContainer } from "../../ui/styles/sidebar-admin-style";
import { Arrow } from "./Arrow";
import { NavItemSidebarAdmin } from "./NavItemSidebarAdmin";
import { Profile } from "./Profile";

export const SidebarAdmin = ({
  sideActive,
  handleSideActive,
  overlayRef,
  overlayStyle,
  handleNavigation,
  navItemActive,
  navItemRefs,
}) => {
  return (
    <SideContainer>
      <Arrow {...{ sideActive, handleSideActive }} />
      <NavItemSidebarAdmin
        {...{
          sideActive,
          overlayRef,
          overlayStyle,
          handleNavigation,
          navItemActive,
          navItemRefs,
        }}
      />
      <Profile sideActive={sideActive} />
    </SideContainer>
  );
};
