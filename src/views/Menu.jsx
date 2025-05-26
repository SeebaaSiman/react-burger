import BannerClouseShop from "../components/menu/BannerClouseShop";
import { SidebarMenu } from "../components/menu/SidebarMenu";
import { MenuContent } from "../components/menu/MenuContent";
import { isOpenNow } from "../utils/isOpenNow";
import { MenuCartContainer, MenuPage } from "../ui/styles/menu-style";
import { CartNav } from "../components/cart/CartNav";

const Menu = ({ products, error, cart, cartButtonTypes, handleClearCart }) => {
  return (
    <MenuPage>
      <MenuCartContainer>
        <CartNav cartState={cart} cartButtonTypes={cartButtonTypes} handleClearCart={handleClearCart} />
      </MenuCartContainer>
      <SidebarMenu />
      <MenuContent {...{ products, error,  cartButtonTypes }} />
      {!isOpenNow() && <BannerClouseShop />}
    </MenuPage>
  );
};
export default Menu;
