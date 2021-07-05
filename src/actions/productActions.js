import { commerce } from "../lib/commerce";

export const fetchProducts = () => async (dispatch) => {
  const { data } = await commerce.products.list();

  dispatch({
    type: "FETCH_PRODUCTS",
    payload: data,
  });
};
