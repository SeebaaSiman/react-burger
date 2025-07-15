import { restaurantInfo } from "../../services/db/local-info";
import { ORDER_TYPE } from "../../services/db/order-type";
import { useCart } from "../../store/context/CartContext";
import { DeliveryInfoBlock, DeliveryInfoLabel, DeliveryInfoLink } from "../../ui/styles/menu-style";

export const DeliveryInfo = () => {
  const { cartState } = useCart();

  return (
    <>
      <DeliveryInfoBlock>
        <DeliveryInfoLabel>Demora {restaurantInfo.deliveryTime}</DeliveryInfoLabel>
        {cartState.typeOrder === ORDER_TYPE.TAKEAWAY && <DeliveryInfoLink>Ver dirección</DeliveryInfoLink>}
      </DeliveryInfoBlock>
      <DeliveryInfoBlock>
        <DeliveryInfoLabel>Pedidos en curso</DeliveryInfoLabel>
        <DeliveryInfoLink>Consultar estado</DeliveryInfoLink>
      </DeliveryInfoBlock>
    </>
  );
};
