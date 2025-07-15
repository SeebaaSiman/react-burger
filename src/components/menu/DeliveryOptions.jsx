import { useEffect } from "react";
import { DeliveryOptionsStyle, OrderInfo } from "../../ui/styles/menu-style";
import { useCart } from "../../store/context/CartContext";
import { DeliveryAtHome } from "./DeliveryAtHome";
import { DeliveryInfo } from "./DeliveryInfo";

import { ORDER_TYPE } from "../../services/db/order-type";
import { CartActionTypes } from "../../store/cartReducer";

export const DeliveryOptions = () => {
  const { cartState, dispatch } = useCart();
  const { typeOrder } = cartState;
  useEffect(() => {
    if (!typeOrder) {
      dispatch({ type: CartActionTypes.SET_TYPE_ORDER, payload: ORDER_TYPE.DELIVERY });
    }
  }, []);

  return (
    <DeliveryOptionsStyle>
      {typeOrder === ORDER_TYPE.DELIVERY && (
        <p>Quedate en tu casa, nosotros armamos tu cena y te la llevamos. ¡Bon appetit!</p>
      )}
      {typeOrder === ORDER_TYPE.TAKEAWAY && <p>Espero que disfrutes de nuestro local. ¡Bon appetit!</p>}
      <DeliveryAtHome />
      <OrderInfo>
        <DeliveryInfo />
      </OrderInfo>
    </DeliveryOptionsStyle>
  );
};
