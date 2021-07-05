import { commerce } from "../lib/commerce";

export const fetchProducts = async () => {
  const { data } = await commerce.products.list();
};
