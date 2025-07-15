export const CartActionTypes = {
  ADD_ITEM: "cart/addItem",
  REMOVE_ITEM: "cart/removeItem",
  UPDATE_QUANTITY: "cart/updateQuantity",
  CLEAR_CART: "cart/clearCart",
  SET_TYPE_ORDER: "cart/setTypeOrder",
  SET_DIRECTION: "cart/setDirection",
};
export const initialCartState = {
  typeOrder: null,
  direction: null,
  items: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM: {
      const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      const existingCartItem = state.items[existingItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        items: updatedItems,
      };
    }
    case CartActionTypes.REMOVE_ITEM: {
      const updatedItems = state.items.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        items: updatedItems,
      };
    }
    case CartActionTypes.UPDATE_QUANTITY: {
      if (action.payload.quantity <= 0) {
        const updatedItems = state.items.filter((item) => item.id !== action.payload.id);
        return {
          ...state,
          items: updatedItems,
        };
      } else {
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        );
        return {
          ...state,
          items: updatedItems,
        };
      }
    }
    case CartActionTypes.CLEAR_CART:
      return initialCartState;
    case CartActionTypes.SET_DIRECTION:
      return {
        ...state,
        direction: action.payload,
      };
    case CartActionTypes.SET_TYPE_ORDER:
      return {
        ...state,
        typeOrder: action.payload,
      };
    default:
      console.warn(`Unhandled action type: ${action.type}`);
      return state;
  }
};
