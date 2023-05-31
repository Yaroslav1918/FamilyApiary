import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { createAsyncThunk, AsyncThunkPayloadCreatorReturnValue,  } from '@reduxjs/toolkit';

import axios from "axios"
import { AxiosResponse } from 'axios';
// import { incrementTotalQuantity, incrementItemQuantity, updateItemTotalPrice, addItem } from './cart_slice';
import { RootState } from '../store';
import { createAction } from "@reduxjs/toolkit";

export const addItemToCart = createAction<CartItem>("cartSlice/addItemToCart");
interface CartItem {
    id: number;
    image: string;
    price: number;
    quantity: number;
    totalPrice: number;
    text: string;
  }
  
  interface CartState {
    items: CartItem[];
    totalQuantity: number;
  }
  
 ;
  // export const addProducts = createAsyncThunk(
  //   "products/addProducts",
  //   async (product: CartItem, thunkAPI) => {
  //     const state = thunkAPI.getState() as RootState;
  //     try {
        
  //       const { id, price, quantity, image, totalPrice, text } = product;
  //       const newItem = {
  //         id,
  //         image,
  //         text,
  //         quantity,
  //         price,
  //         totalPrice
  //       };
  
  //       const isIncludeItem = state.cartItems.items.find((item) => item.id === id);
  
  //       if (!isIncludeItem) {
  //         state.cartItems.items = [...state.cartItems.items, newItem];
  //       } else {
  //         isIncludeItem.quantity++;
  //         isIncludeItem.totalPrice += price;
  //       }
  //     console.log(state.cartItems.totalQuantity)
       
  //       const { data } = await axios.post<any, AxiosResponse<CartState>>("/api/products",  state.cartItems );
      
  //       return data;
  //     } catch (error: any) {
  //       return thunkAPI.rejectWithValue(error.message);
  //     }
  //   }
  // );
  export const removeItem = createAsyncThunk(
    "products/deleteProducts",
    async (id: number, thunkAPI) => {
      try {
        const { data } = await axios.delete<any, AxiosResponse<CartItem>>(`/api/products/${id}`);
        console.log("🚀 ~ file: cart_operations.ts:67 ~ data:", data)
        return data;
      
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
export const getProducts = createAsyncThunk<
  // Return type of the async action
  string,
  // The type of the argument passed to the async action (not used in this case)
  void,
  {
    rejectValue: string;
  }
>(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<any, AxiosResponse<string>>("/api/products");
      return data;
    } catch (error :any) {
      return rejectWithValue(error.message);
    }
  }
);





// export const addProducts = createAsyncThunk(
//     "products/addProducts",
//     async (product: CartItem, thunkAPI) => {
//       try {
//         const { id, price, quantity, image, totalPrice, text } = product;
//         const newItem = {
//           id,
//           image,
//           text,
//           quantity,
//           price,
//           totalPrice
//         };
//         const state = thunkAPI.getState() as RootState; // Cast the state to RootState
//         const isIncludeItem = state.cartItems.items.find((item: { id: number; }) => item.id === id);
        
//         thunkAPI.dispatch(incrementTotalQuantity(quantity));
  
//         if (!isIncludeItem) {
//           thunkAPI.dispatch(addItem(newItem));
//         } else {
//           thunkAPI.dispatch(incrementItemQuantity(id));
//           thunkAPI.dispatch(updateItemTotalPrice({ id, price }));
//         }
  
//         // Perform other necessary operations
        
//         // Return the updated cart state
          
//         return state.cartItems;
//       } catch (error: any) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   );


// const { data } = await axios.post<any, AxiosResponse<string>>("/api/products", payload);