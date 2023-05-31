
import { createAsyncThunk,  } from '@reduxjs/toolkit';
import axios from "axios"
import { AxiosResponse } from 'axios';
import { RootState } from '../store';
import { createAction } from "@reduxjs/toolkit";
import { CartAuthState, CartItem } from './authCart_slice';


export const addProducts = createAsyncThunk(
    "products/addProducts",
    async (product: CartItem, thunkAPI) => {
      const state = thunkAPI.getState() as RootState;
      try {
        
        const { id, price, quantity, image, totalPrice, text } = product;
        const newItem = {
          id,
          image,
          text,
          quantity,
          price,
          totalPrice
        };
  
        const isIncludeItem = state.product.items.find((item) => item.id === id);
  
        if (!isIncludeItem) {
          state.product.items = [...state.product.items, newItem];
        } else {
          isIncludeItem.quantity++;
          isIncludeItem.totalPrice += price;
        }
        state.product.totalQuantity = state.product.items.reduce(
          (total, item) => total + item.quantity,
          0
        );
      console.log(state.product.totalQuantity)
       
        const { data } = await axios.post<any, AxiosResponse<CartAuthState>>("/api/products",  state.product );
      
        return data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );