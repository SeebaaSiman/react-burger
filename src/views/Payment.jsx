import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/context/AuthContext";
import { useEffect, useState } from "react";
import { useCart } from "../store/context/CartContext";
import { getNameOfMail } from "../utils/getNameOfMail";

import { ORDER_TYPE } from "../services/db/order-type";
import { DeliveryAtHome } from "../components/menu/DeliveryAtHome";
import { CartFooter, CartItemsContainer } from "../ui/styles/cart-style";
import { Items } from "../components/cart/CartItems";
import { formatPrice } from "../utils/formatPrice";
import { useToast } from "../store/context/ToastContext";
import { HeaderLogin } from "../components/home/header/HeaderLogin";
import { PayDelivery } from "../components/payment/PayDelivery";
import { ChangeFn } from "../components/payment/ChangeFn";
import ThemeToggleButton from "../components/buttons/ThemeToggleButton";
import { HeaderLogoContainer } from "../ui/styles/home-style";
import {
  PaymentPage,
  PaymentSection,
  PaymentSectionTitle,
  PaymentSectionItems,
  PaymentFooterPrice,
  PaymentBtnContainer,
  PaymentHeader,
} from "../ui/styles/payment-style";
import { SpinnerLoader } from "../components/loader/SpinnerLoader";

const Payment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { user, admin } = useAuth();
  const { cartState, selectUserTypeOrder } = useCart();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || admin) navigate("/login");
    if (admin) navigate("/admin");
  }, []);
  useEffect(() => {
    if (!cartState.typeOrder) {
      selectUserTypeOrder(ORDER_TYPE.TAKEAWAY);
    }
  }, []);

  const { showToast } = useToast();
  const totalPrice = cartState.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const onChangeTypeOrder = () => {
    if (cartState.typeOrder === ORDER_TYPE.DELIVERY) {
      selectUserTypeOrder(ORDER_TYPE.TAKEAWAY);
    } else if (cartState.typeOrder === ORDER_TYPE.TAKEAWAY) {
      selectUserTypeOrder(ORDER_TYPE.DELIVERY);
    } else return;
  };
  const onBuy = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      if (cartState.items.length < 0) {
        showToast({ message: "Tu carrito está vacío", type: "error" });
      } else if (!cartState.typeOrder) {
        showToast({ message: "Debes seleccionar un tipo de orden", type: "error" });
      } else if (cartState.typeOrder === ORDER_TYPE.DELIVERY && !cartState.direction) {
        showToast({ message: "Debes seleccionar una dirección de entrega", type: "error" });
      } else if (cartState.items.length > 0 && cartState.typeOrder) {
        const productDetails = cartState.items
          .map((item) => `${item.name} ($${item.price}) x(${item.quantity})`)
          .join("; ");
        showToast({ message: `Detalles del carrito: ${productDetails}`, type: "info" });
        setTimeout(() => {
          showToast({
            message: `
        Ubicación: ${cartState.userLocation},
        Tipo de orden: ${cartState.typeOrder},
        Dirección: ${cartState.direction.address},
        Teléfono: ${cartState.direction.phone},`,
            type: "info",
          });
        }, 500);
        setTimeout(() => {
          showToast({ message: `Venta completada. Gracias por comprar ${getNameOfMail(user)}`, type: "success" });
        }, 500);
      }
      setIsSubmitting(false);
    }, 2300);
  };

  return (
    <PaymentPage>
      <PaymentHeader>
        <HeaderLogoContainer>
          <p>R</p>
          eact
          <p>B</p>
          urger
          <ThemeToggleButton>
            <ThemeToggleButton />
          </ThemeToggleButton>
        </HeaderLogoContainer>
        <HeaderLogin />
      </PaymentHeader>

      <PaymentSection>
        <PaymentSectionTitle>Carrito de {getNameOfMail(user)}</PaymentSectionTitle>
        <div>
          <p>User: {user}</p>
          <ChangeFn />
        </div>
      </PaymentSection>
      <PaymentSection>
        <PaymentSectionTitle>Tipo de orden</PaymentSectionTitle>
        <div>
          <p>{cartState.typeOrder}</p>
          <ChangeFn fn={onChangeTypeOrder} />
          {cartState.typeOrder === ORDER_TYPE.DELIVERY && (
            <p style={{ width: "100%" }}>Envíos únicamente dentro de la ciudad de La Plata</p>
          )}
        </div>
      </PaymentSection>

      <PaymentSection>
        <PaymentSectionTitle>Ubicación</PaymentSectionTitle>
        <PayDelivery />
      </PaymentSection>

      <PaymentSectionItems>
        <PaymentSectionTitle>Productos del carrito</PaymentSectionTitle>
        <CartItemsContainer>
          {cartState.items.map((item, index) => (
            <Items key={index} item={item} />
          ))}
        </CartItemsContainer>
      </PaymentSectionItems>

      <PaymentFooterPrice>
        <p>Total</p>
        <span>$ {formatPrice(totalPrice)} </span>
      </PaymentFooterPrice>
      <PaymentBtnContainer>
        <Link to='/menu'>Ver menú</Link>
        <button onClick={onBuy}> {isSubmitting ? <SpinnerLoader /> : "Terminar compra"}</button>
      </PaymentBtnContainer>
    </PaymentPage>
  );
};

export default Payment;
