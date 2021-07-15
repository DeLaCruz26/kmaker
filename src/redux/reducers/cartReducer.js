const initialState = {
  cart: {},
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = action.payload;
      const existItem = state.cart.find((i) => i.product === item.product);

      if (existItem) {
        return {
          ...state,
          cart: state.cart.map((i) =>
            i.product === existItem.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, item],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((i) => i.product !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
