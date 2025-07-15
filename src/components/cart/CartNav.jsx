import { useEffect, useState } from "react";
import cartIcon from "../../assets/icons/cart.svg";
import cartLot from "../../assets/icons/cart-lot.svg";
import { AsideCartContent, AsideCartHeader, AsideCartStyle, HeaderCartStyle } from "../../ui/styles/cart-style";
import { CartItems } from "./CartItems";
import { useCart } from "../../store/context/CartContext";
export const CartNav = ({ closeMenu }) => {
  const { cartState } = useCart();
  const [asideOpen, setAsideOpen] = useState(false);
  useEffect(() => {
    if (asideOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [asideOpen]);
  const onClickAside = () => {
    if (closeMenu) {
      closeMenu();
    }
    setAsideOpen(!asideOpen);
  };

  return (
    <div>
      <HeaderCartStyle onClick={onClickAside}>
        <img src={cartState?.items.length > 0 ? cartLot : cartIcon} alt='icon cart empty' width={26} height={26} />
        {cartState?.items.length > 0 && <p>{cartState?.items.length}</p>}
      </HeaderCartStyle>
      <AsideCartStyle className={asideOpen ? "open" : ""}>
        <AsideCartHeader>
          <h2>Mi carrito</h2>
          <button onClick={onClickAside}>X</button>
        </AsideCartHeader>
        <AsideCartContent>
          {!cartState?.items.length > 0 ? <p>Tu carrito está vacío</p> : <CartItems products={cartState.items} />}
        </AsideCartContent>
      </AsideCartStyle>
    </div>
  );
};
