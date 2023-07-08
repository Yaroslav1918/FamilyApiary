import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AxiosResponse } from "axios";
import { RootState } from "../store";
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
  wishItems: any;
  wishlist: any;
  wishTotalQuantity: number;
  items: CartItem[];
  totalQuantity: number;
}

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
        totalPrice,
      };

      const isIncludeItem = state.cartItems.items.find(
        (item) => item.id === id
      );

      let updatedItems = [];
      if (!isIncludeItem) {
        updatedItems = [...state.cartItems.items, newItem];
      } else {
        updatedItems = state.cartItems.items.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + quantity,
              totalPrice: item.totalPrice + totalPrice,
            };
          }
          return item;
        });
      }

      const updatedTotalQuantity = state.cartItems.totalQuantity + quantity;

      const updatedCartItems = {
        items: updatedItems,
        totalQuantity: updatedTotalQuantity,
      };

      const { data } = await axios.post<any, AxiosResponse<CartState>>(
        "/api/products",
        updatedCartItems
      );

      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeItem = createAsyncThunk(
  "products/deleteProducts",
  async (id: number, thunkAPI) => {
    try {
      const { data } = await axios.delete<any, AxiosResponse<any>>(
        `/api/products/${id}`
      );
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<any, AxiosResponse<any>>(
        "/api/products"
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const getAllSoldProducts = createAsyncThunk(
  "products/getSoldProducts",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    try {
      const { data } = await axios.post<any, AxiosResponse<any>>(
        "/api/products/sold-products",
        state
      );
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getAllWishProducts = createAsyncThunk(
  "products/getAllWishProducts",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    try {
      const { data } = await axios.post<any, AxiosResponse<any>>(
        "/api/products/wish-products",
        state
      );
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToWishlistAsync = createAsyncThunk(
  "products/addToWishlistAsync",
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
        totalPrice,
      };

      const isIncludeItem = state.cartItems.wishlist.find(
        (item) => item.id === id
      );

      let updatedItems = [];
      if (!isIncludeItem) {
        updatedItems = [...state.cartItems.wishlist, newItem];
      } else {
        updatedItems = state.cartItems.wishlist.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + quantity,
              totalPrice: item.totalPrice + totalPrice,
            };
          }
          return item;
        });
      }

      const updatedTotalQuantity = state.cartItems.wishTotalQuantity + quantity;

      const updatedCartItems = {
        wishlist: updatedItems,
        wishTotalQuantity: updatedTotalQuantity,
        totalQuantity: state.cartItems.totalQuantity,
      };

      const { data } = await axios.post<any, AxiosResponse<CartState>>(
        "/api/products/wishlist",
        updatedCartItems
      );

      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeProductFromWishlist = createAsyncThunk(
  "products/removeProductFromWishlist",
  async (id: number, thunkAPI) => {
    try {
      const { data } = await axios.delete<any, AxiosResponse<any>>(
        `/api/products/wishlist/${id}`
      );
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
