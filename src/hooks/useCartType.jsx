import { useNavigate } from "react-router-dom";
import { useCart } from "../store/context/CartContext";
import { useToast } from "../store/context/ToastContext";
import { CartActionTypes } from "../store/cartReducer";
import addCartIcon from "../assets/icons/cart-add.svg";
import removeCartIcon from "../assets/icons/cart-menos.svg";
import clearCartIcon from "../assets/icons/cart-delete.svg";
import promoCartIcon from "../assets/icons/cart-promo.svg";
import addEditAdmin from "../assets/icons/edit-angle.svg";
import { useAdmin } from "../store/context/AdminContext";
export const useCartType = () => {
  const { dispatch, cartState } = useCart();
  const { items } = cartState;
  const { showToast } = useToast();
  const { onModal, setClickedItem } = useAdmin();

  const handleAddToCart = (item) => {
    dispatch({
      type: CartActionTypes.ADD_ITEM,
      payload: item,
    });
    showToast({ message: `${item.name} agregado al carrito`, type: "success" });
  };
  const handleRemoveFromCart = (item) => {
    dispatch({
      type: CartActionTypes.REMOVE_ITEM,
      payload: { id: item.id },
    });
    showToast({ message: `${item.name} eliminado del carrito`, type: "error" });
  };
  const handleAddQuantity = (item) => {
    dispatch({
      type: CartActionTypes.UPDATE_QUANTITY,
      payload: { id: item.id, quantity: item.quantity + 1 },
    });
  };
  const handleDeleteQuantity = (item) => {
    dispatch({
      type: CartActionTypes.UPDATE_QUANTITY,
      payload: { id: item.id, quantity: item.quantity - 1 },
    });
  };
  const handleClearCart = () => {
    dispatch({
      type: CartActionTypes.CLEAR_CART,
    });
  };
  const navigate = useNavigate();
  const validatePayment = () => {
    if (items.lenght < 0) {
      showToast({ message: `El carrito está vacio`, type: "error" });
    } else if (items.length > 0) {
      navigate("/payment");
    } else return;
  };
  const onNavigateEdit = (item) => {
    setClickedItem(item);
    onModal();
  };
  const cartButtonTypes = {
    add: {
      text: "Agregar",
      icon: addCartIcon,
      alt: "Agregar al carrito",
      fn: handleAddToCart,
    },
    remove: {
      text: "Quitar",
      icon: clearCartIcon,
      alt: "Quitar del carrito",
      fn: handleRemoveFromCart,
    },
    add_quantity: {
      text: "Sumar",
      icon: promoCartIcon,
      alt: "Sumar cantidad",
      fn: handleAddQuantity,
    },
    delete_quantity: {
      text: "Restar",
      icon: removeCartIcon,
      alt: "Restar cantidad",
      fn: handleDeleteQuantity,
    },
    admin: {
      text: "Editar",
      icon: addEditAdmin,
      alt: "Editar producto",
      fn: onNavigateEdit,
    },
  };

  return { cartButtonTypes, handleAddQuantity, handleDeleteQuantity, handleClearCart, validatePayment };
};
