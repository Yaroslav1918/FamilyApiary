import { RootState } from "../store";

export const getProductsItems = (state: RootState) => state.cartItems.items;
export const getTotalQuantity = (state: RootState) => state.cartItems.totalQuantity;
export const getBroughtProducts = (state: RootState) =>
  state.cartItems.boughtProducts;
export const getBroughtProductsItems = (state: RootState) =>
  state.cartItems.boughtProducts;
export const getWishListProducts = (state: RootState) =>
  state.cartItems.wishlist;
export const getWishtTotalQuantity = (state: RootState) =>
  state.cartItems.wishTotalQuantity;
