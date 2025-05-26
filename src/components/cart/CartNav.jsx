import { useEffect, useState } from "react";
import cartIcon from "../../assets/icons/cart.svg";
import cartLot from "../../assets/icons/cart-lot.svg";
import { AsideCartContent, AsideCartHeader, AsideCartStyle, HeaderCartStyle } from "../../ui/styles/cart-style";
import { CartItems } from "./CartItems";
export const CartNav = ({ cartState, cartButtonTypes, handleClearCart }) => {
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
  return (
    <>
      <HeaderCartStyle onClick={() => setAsideOpen(!asideOpen)}>
        <img src={cartState?.length > 0 ? cartLot : cartIcon} alt='icon cart empty' width={26} height={26} />
        {cartState?.length > 0 && <span>{cartState?.length}</span>}
      </HeaderCartStyle>
      <AsideCartStyle className={asideOpen ? "open" : ""}>
        <AsideCartHeader>
          <h2>Mi carrito</h2>
          <button onClick={() => setAsideOpen(!asideOpen)}>X</button>
        </AsideCartHeader>
        <AsideCartContent>
          {!cartState?.length > 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            <CartItems products={cartState} cartButtonTypes={cartButtonTypes} handleClearCart={handleClearCart} />
          )}
        </AsideCartContent>
      </AsideCartStyle>
    </>
  );
};
