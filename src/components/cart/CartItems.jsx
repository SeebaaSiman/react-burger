import { ButtonCart } from "../buttons/ButtonCart";
import { CartFooter, CartItemsContainer, CartItemsPage, CartItemWrapper } from "../../ui/styles/cart-style";
import { formatPrice } from "../../utils/formatPrice";
import { Link } from "react-router-dom";

export const CartItems = ({ products, handleClearCart, cartButtonTypes }) => {
  const totalPrice = products.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <CartItemsPage>
      <CartItemsContainer>
        {products.map((item, index) => (
          <Items key={index} item={item} cartButtonTypes={cartButtonTypes} />
        ))}
      </CartItemsContainer>
      <CartFooter>
        <div>
          <p>Total</p>
          <span>$ {formatPrice(totalPrice)} </span>
        </div>
        <Link to='/payment' className='btn-proceder'>
          Proceder al pago
        </Link>
        <button className='btn-vaciar' onClick={handleClearCart}>
          Vaciar carrito
        </button>
      </CartFooter>
    </CartItemsPage>
  );
};

const Items = ({ item, cartButtonTypes }) => {
  const TotalPrice = item.price * item.quantity;
  return (
    <CartItemWrapper>
      <div className='cart-item-name'>
        <img src={item.image} alt={item.name} />
        <span>{item.name}</span>
      </div>
      <div className='cart-item-quantity'>
        <div>
          <ButtonCart cartButtonTypes={cartButtonTypes} type={"delete_quantity"} item={item} />
          <p> {item.quantity}</p>
          <ButtonCart cartButtonTypes={cartButtonTypes} type={"add_quantity"} item={item} />
        </div>
        <span>{`($ ${formatPrice(item.price)})`}</span>
        <ButtonCart cartButtonTypes={cartButtonTypes} type={"remove"} item={item} />
      </div>
      <div className='cart-item-price'>
        <p>Total:</p>
        <span>${formatPrice(TotalPrice)} </span>
      </div>
      <hr />
    </CartItemWrapper>
  );
};
