import styled from "styled-components";
import { apertura, cierre } from "../../ui/styles/animations";
import { FormEditProduct } from "./FormEditProduct";

export const ModalEdit = ({ onCloseModal, openModal, clickedItem, updateProduct, deleteProduct }) => {
  return (
    <ModalOverlay className={`${openModal ? "modal-active" : "modal-hidden"}`}>
      <ModalContent>
        {clickedItem && (
          <FormEditProduct
            clickedItem={clickedItem}
            fn={updateProduct}
            onCloseModal={onCloseModal}
            deleteProduct={deleteProduct}
            modal='true'
          />
        )}
      </ModalContent>
    </ModalOverlay>
  );
};
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 0vw;
  height: 0vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 1;
  padding: 6px 12px;
  transform: translateY(0);
  transition: all 0.4 ease-in-out;
  &.modal-active {
    width: 100vw;
    height: 100vh;
    animation-name: ${apertura};
    animation-duration: 200ms;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    div {
      display: flex;
    }
  }
  &.modal-hidden {
    width: 0vw;
    height: 0vh;
    animation-name: ${cierre};
    animation-duration: 200ms;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    div {
      display: none;
    }
  }
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 18px;
  min-width: 320px;
  max-width: 90vw;
  box-shadow: ${(props) => props.theme.cardShadow};
`;
