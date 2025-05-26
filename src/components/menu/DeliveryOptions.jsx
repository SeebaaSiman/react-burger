import { useState } from "react";
import { restaurantInfo } from "../../services/db/local-info";
import {
  DeliveryInfoBlock,
  DeliveryInfoLabel,
  DeliveryInfoLink,
  DeliveryOptionsStyle,
  DeliveryToggleButton,
  DeliveryToggleButtonWrapper,
  OrderInfo,
} from "../../ui/styles/menu-style";

export const DeliveryOptions = () => {
  const [orderType, setOrderType] = useState("delivery");

  return (
    <DeliveryOptionsStyle>
      <DeliveryToggleButtonWrapper>
        <DeliveryToggleButton
          className={` ${orderType === "delivery" ? "active" : ""}`}
          onClick={() => setOrderType("delivery")}
        >
          Delivery
        </DeliveryToggleButton>
        <DeliveryToggleButton
          className={` ${orderType === "takeaway" ? "active takeaway" : ""}`}
          onClick={() => setOrderType("takeaway")}
        >
          Takeaway
        </DeliveryToggleButton>
      </DeliveryToggleButtonWrapper>

      <OrderInfo>
        <DeliveryInfoBlock>
          <DeliveryInfoLabel>Demora {restaurantInfo.deliveryTime}</DeliveryInfoLabel>
          <DeliveryInfoLink>Ver dirección</DeliveryInfoLink>
        </DeliveryInfoBlock>
        <DeliveryInfoBlock>
          <DeliveryInfoLabel>Pedidos en curso</DeliveryInfoLabel>
          <DeliveryInfoLink>Consultar estado</DeliveryInfoLink>
        </DeliveryInfoBlock>
      </OrderInfo>
    </DeliveryOptionsStyle>
  );
};
