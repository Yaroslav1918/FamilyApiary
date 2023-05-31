import { createSlice } from "@reduxjs/toolkit";
import { addProducts } from "./authCart_operations";

export interface CartItem {
    id: number;
    image: string;
    price: number;
    quantity: number;
    totalPrice: number;
    text: string;
  }
  
  export interface CartAuthState {
    items: CartItem[];
    totalQuantity: number;
  }
  
  export const initialState: CartAuthState = {
    items: [],
    totalQuantity: 0,
  };
  
  
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addProducts.fulfilled, (state, {payload}) => {
            state.items = payload.items;
            state.totalQuantity = payload.totalQuantity
          });
    },
  });
  
  export default productSlice.reducer;