import { commerce } from "../lib/commerce";

export const fetchCart = async () => {
  const cart = await commerce.cart.retrieve();
};

export const addToCart = (product) => async (productId, quantity) => {
  const item = await commerce.cart.add(productId, quantity);
};
