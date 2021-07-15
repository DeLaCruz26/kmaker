import { commerce } from "../../lib/commerce";

export const fetchCart = async () => {
  const cart = await commerce.cart.retrieve();
  console.log(cart);
};

export const addToCart = async (productId, quantity) => {
  const item = await commerce.cart.add(productId, quantity);
};

export const removeFromCart = async (lineItemId) => {
  const response = await commerce.cart.remove(lineItemId);
};