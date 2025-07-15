import { useCart } from "../../store/context/CartContext";
import { DeliveryToggleButton, DeliveryToggleButtonWrapper } from "../../ui/styles/menu-style";
import { ORDER_TYPE } from "../../services/db/order-type.js";
export const DeliveryAtHome = () => {
  const { cartState, selectUserTypeOrder } = useCart();

  return (
    <DeliveryToggleButtonWrapper>
      <DeliveryToggleButton
        className={` ${cartState.typeOrder === ORDER_TYPE.DELIVERY ? "active" : ""}`}
        onClick={() => selectUserTypeOrder(ORDER_TYPE.DELIVERY)}
      >
        Delivery
      </DeliveryToggleButton>
      <DeliveryToggleButton
        className={` ${cartState.typeOrder === ORDER_TYPE.TAKEAWAY ? "active takeaway" : ""}`}
        onClick={() => selectUserTypeOrder(ORDER_TYPE.TAKEAWAY)}
      >
        Takeaway
      </DeliveryToggleButton>
    </DeliveryToggleButtonWrapper>
  );
};
