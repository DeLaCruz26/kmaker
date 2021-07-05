const initialState = {
  cart: [],
  loading: true,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default cartReducer;
