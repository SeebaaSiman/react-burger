import { createContext, useReducer, useContext, useEffect } from "react";
import { CartActionTypes, cartReducer, initialCartState } from "../cartReducer";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [storedCart, setStoredCart] = useLocalStorage("ReactBurgerCart", initialCartState);
  const [cartState, dispatch] = useReducer(cartReducer, storedCart);
  useEffect(() => {
    setStoredCart(cartState);
  }, [cartState, setStoredCart]);

  const selectUserTypeOrder = (type) => {
    dispatch({ type: CartActionTypes.SET_TYPE_ORDER, payload: type });
  };
  const selectUserDirection = (type) => {
    dispatch({ type: CartActionTypes.SET_DIRECTION, payload: type });
  };
  const contextValue = {
    cartState,
    dispatch,
    selectUserTypeOrder,
    selectUserDirection,
  };
  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
