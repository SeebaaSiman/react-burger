import { Link, useLocation } from "react-router-dom";
import { ButtonCart } from "../buttons/ButtonCart";
import {
  CartFooter,
  CartItemName,
  CartItemPrice,
  CartItemQuantity,
  CartItemsContainer,
  CartItemsPage,
  CartItemWrapper,
  CartItemQuantityButton,
} from "../../ui/styles/cart-style";
import { formatPrice } from "../../utils/formatPrice";
import { useCartType } from "../../hooks/useCartType";

export const CartItems = ({ products }) => {
  const { handleClearCart, validatePayment } = useCartType();
  const totalPrice = products.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const location = useLocation().pathname;

  return (
    <CartItemsPage>
      <CartItemsContainer>
        {products.map((item, index) => (
          <Items key={index} item={item} />
        ))}
      </CartItemsContainer>
      <CartFooter>
        <div>
          <p>Total</p>
          <span>$ {formatPrice(totalPrice)} </span>
        </div>
        {location === "/" ? (
          <Link to='/menu' className='btn-proceder'>
            Ir al menú
          </Link>
        ) : (
          <button to='/payment' className='btn-proceder' onClick={validatePayment}>
            Proceder al pago
          </button>
        )}
        <button className='btn-vaciar' onClick={handleClearCart}>
          Vaciar carrito
        </button>
      </CartFooter>
    </CartItemsPage>
  );
};

export const Items = ({ item }) => {
  const TotalPrice = item.price * item.quantity;
  return (
    <CartItemWrapper>
      <CartItemName>
        <img src={item.image} alt={item.name} />
        <div>
          <span>{item.name}</span>
          <p>{`($ ${formatPrice(item.price)})`}</p>
        </div>
      </CartItemName>
      <CartItemQuantity>
        <CartItemQuantityButton>
          <ButtonCart type={"delete_quantity"} item={item} />
          <p> {item.quantity}</p>
          <ButtonCart type={"add_quantity"} item={item} />
        </CartItemQuantityButton>
        <ButtonCart type={"remove"} item={item} />
        <CartItemPrice>
          <p>Total:</p>
          <span>${formatPrice(TotalPrice)} </span>
        </CartItemPrice>
      </CartItemQuantity>
      <hr />
    </CartItemWrapper>
  );
};
