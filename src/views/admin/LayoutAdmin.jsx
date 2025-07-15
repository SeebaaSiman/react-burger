import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../ui/styles/device";
import { SidebarAdmin } from "../../components/admin/SidebarAdmin";
import { useSideBar } from "../../hooks/useSideBar";

const LayoutAdmin = () => {
  const { sideActive, handleSideActive, overlayStyle, overlayRef, handleNavigation, navItemActive, navItemRefs } =
    useSideBar();

  return (
    <LayoutAdminWrapper>
      <SidebarAdmin
        {...{
          sideActive,
          handleSideActive,
          overlayRef,
          overlayStyle,
          handleNavigation,
          navItemActive,
          navItemRefs,
        }}
      />
      <ContentAdmin>
        <Outlet context={[handleNavigation]} />
      </ContentAdmin>
    </LayoutAdminWrapper>
  );
};

export default LayoutAdmin;
const LayoutAdminWrapper = styled.main`
  /* border-top: 3rem solid #222; */
  height: 100dvh;
  width: 100vw;
  display: flex;
  flex-direction: column-reverse;
  box-shadow: ${(props) => props.theme.cardShadow};

  @media ${device.mobileL} {
    flex-direction: row;
  }
`;
const ContentAdmin = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 10px;
  border-radius: 10px; */
  overflow-x: hidden;
  overflow-y: auto;
`;
