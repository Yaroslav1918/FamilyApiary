import { RootState } from "../store";

export const getProductsItems = (state: RootState) => state.cartItems.items;