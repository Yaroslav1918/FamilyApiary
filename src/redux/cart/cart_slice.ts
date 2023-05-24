import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { AxiosResponse } from 'axios';

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

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};


const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const { id, price, quantity, image, totalPrice, translatedText } = action.payload;
      const newItem = {
      id,
      image,
      text: translatedText,
      quantity,
      price,
      totalPrice
      }
       const isIncludeItem = state.items.find((item) => item.id === id);
       state.totalQuantity += quantity;
      if (!isIncludeItem) {
        state.items = [...state.items, newItem];
      } else {
        isIncludeItem.quantity++;
        isIncludeItem.totalPrice += price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const isIncludeItem = state.items.find((item) => item.id === id);
      if (!isIncludeItem || isIncludeItem.quantity === 1 ) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        isIncludeItem.quantity--;
        isIncludeItem.totalPrice -= isIncludeItem.price;
      }
      state.totalQuantity --;
    },
  },
});

export const addProducts = createAsyncThunk<
  // Return type of the async action
  string,
  // The type of the argument passed to the async action (not used in this case)
  void,
  {
    rejectValue: string;
  }
>(
  "products/addProducts",
  async (_, thunkAPI) => {
    try {
      const { items, totalQuantity } = (thunkAPI.getState() as { cartItems: CartState }).cartItems;
      const { data } = await axios.post<any, AxiosResponse<string>>("/api/products", { items, totalQuantity });
      return data;
    } catch (error :any) {
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

// these exports should stay the way they are
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;

export const cartActions = {
  addItemToCart: addItemToCart,
  removeItemFromCart: removeItemFromCart
}

