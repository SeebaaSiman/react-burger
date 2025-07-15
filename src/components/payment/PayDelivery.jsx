import { useState } from "react";
import styled from "styled-components";
import { animationForm } from "../../ui/styles/animations.js";
import { restaurantInfo } from "../../services/db/local-info";
import { useCart } from "../../store/context/CartContext.jsx";
import { ORDER_TYPE } from "../../services/db/order-type.js";
import { DirectionForm } from "./DirectionForm.jsx";
import { ChangeFn } from "./ChangeFn.jsx";

const DeliveryDirLocal = styled.p`
  padding: 0px;
  height: 0;
  overflow: hidden;
  font-size: 14px;
  animation: ${animationForm} 0.4s ease-in-out forwards;
  transition: ${(props) => props.theme.transition};
`;
export const PayDelivery = () => {
  const { cartState } = useCart();
  return (
    <>
      {cartState.typeOrder === ORDER_TYPE.DELIVERY ? (
        <DeliveryFormDirection />
      ) : (
        <DeliveryDirLocal>Nuestro local: {restaurantInfo.address}</DeliveryDirLocal>
      )}
    </>
  );
};
const DeliveryFormDirection = () => {
  const { cartState } = useCart();
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <DeliveryFormDirectionContainer>
      {cartState.typeOrder === ORDER_TYPE.DELIVERY && cartState.direction ? (
        <DeliveryDirLocalStyle>
          <div>
            <p>Dirección: {cartState.direction.address}</p>
            <p> Teléfono: {cartState.direction.phone}</p>
          </div>
          <ChangeFn fn={onOpen} />
        </DeliveryDirLocalStyle>
      ) : (
        <DirectionForm onClose={onClose} />
      )}
      {open && <DirectionForm onClose={onClose} />}
    </DeliveryFormDirectionContainer>
  );
};
const DeliveryFormDirectionContainer = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: start;
  align-items: start;
`;
const DeliveryDirLocalStyle = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  button {
    margin-left: 12px;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;
