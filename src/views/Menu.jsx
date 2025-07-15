import BannerClouseShop from "../components/menu/BannerClouseShop";
import { SidebarMenu } from "../components/menu/SidebarMenu";
import { MenuContent } from "../components/menu/MenuContent";
import { isOpenNow } from "../utils/isOpenNow";
import { MenuPage } from "../ui/styles/menu-style";

const Menu = () => {
  return (
    <MenuPage>
      <SidebarMenu />
      <MenuContent />
      {!isOpenNow() && <BannerClouseShop />}
    </MenuPage>
  );
};
export default Menu;
