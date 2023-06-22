import { RootState } from "../store";

export const getProductsItems = (state: RootState) => state.cartItems.items;
export const getBroughtProducts = (state: RootState) => state.cartItems.boughtProducts;
export const getBroughtProductsItems = (state: RootState) =>
  state.cartItems.boughtProducts