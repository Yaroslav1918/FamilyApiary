import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { AxiosResponse } from 'axios';
import {  getProducts, removeItem } from "./cart_operations";

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
      const { id, price, quantity, image, totalPrice, text } = action.payload;
      const newItem = {
      id,
      image,
      text,
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
    resetToInitialState(state) {
      state.items = [];
      state.totalQuantity = 0;
    }
  },
  extraReducers: (builder) => {
   
    builder.addCase(removeItem.fulfilled, (state, {payload}) => {
      state.items = state.items.filter((item) => item.id !== payload.id);
    });
 
  },
//   extraReducers: builder => {
//     builder
//     .addCase(addProducts.fulfilled, (state, action) => {
//       if (typeof action.payload === 'string') {
//         // Handle the case when the payload is a string (if needed)
//         return;
//       }
  
//       const payload: CartState = action.payload as unknown as CartState;
  
//       state.items = payload.items;
//       state.totalQuantity = payload.totalQuantity;
//     })
// }
});

  






// these exports should stay the way they are
export const { addItemToCart,  resetToInitialState, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;

export const cartActions = {
  addItemToCart: addItemToCart,
  removeItemFromCart: removeItemFromCart,
  resetToInitialState: resetToInitialState
}

// const cartSlice = createSlice({
//   name: "cartSlice",
//   initialState,
//   reducers: {
//     addItemToCart(state, action) {
//       const { id, price, quantity, image, totalPrice, text } = action.payload;
//       const newItem = {
//       id,
//       image,
//       text,
//       quantity,
//       price,
//       totalPrice
//       }
//        const isIncludeItem = state.items.find((item) => item.id === id);
       
//        state.totalQuantity += quantity;
//       if (!isIncludeItem) {
//         state.items = [...state.items, newItem];
//       } else {
//         isIncludeItem.quantity++;
//         isIncludeItem.totalPrice += price;
//       }
//     },
//     removeItemFromCart(state, action) {
//       const id = action.payload;
//       const isIncludeItem = state.items.find((item) => item.id === id);
//       if (!isIncludeItem || isIncludeItem.quantity === 1 ) {
//         state.items = state.items.filter((item) => item.id !== id);
//       } else {
//         isIncludeItem.quantity--;
//         isIncludeItem.totalPrice -= isIncludeItem.price;
//       }
//       state.totalQuantity --;
//     },
//     resetToInitialState(state, action) {
//       state.items = [];
//       state.totalQuantity = 0;
//     }
//   },
//   extraReducers: builder => {
//     builder
//     .addCase(addProducts.fulfilled, (state, action) => {
//       if (typeof action.payload === 'string') {
//         // Handle the case when the payload is a string (if needed)
//         return;
//       }
  
//       const payload: CartState = action.payload as CartState;
  
//       state.items = payload.items;
//       state.totalQuantity = payload.totalQuantity;
//     })
// }
// });




// const cartSlice = createSlice({
//   name: "cartSlice",
//   initialState,
//   reducers: {
//     // ...other reducers

//     addItem(state, action) {
//       const newItem = action.payload;
//       state.items.push(newItem);
//     },

//     incrementItemQuantity(state, action) {
//       const itemId = action.payload;
//       const item = state.items.find((item) => item.id === itemId);
//       if (item) {
//         item.quantity++;
//       }
//     },

//     updateItemTotalPrice(state, action) {
//       const { id, price } = action.payload;
//       const item = state.items.find((item) => item.id === id);
//       if (item) {
//         item.totalPrice += price;
//       }
//     },

//     incrementTotalQuantity(state, action) {
//       state.totalQuantity += action.payload;
//     },

//     removeItemFromCart(state, action) {
//       const id = action.payload;
//       const itemIndex = state.items.findIndex((item) => item.id === id);

//       if (itemIndex !== -1) {
//         const item = state.items[itemIndex];
//         if (item.quantity === 1) {
//           state.items.splice(itemIndex, 1);
//         } else {
//           item.quantity--;
//           item.totalPrice -= item.price;
//         }
//         state.totalQuantity--;
//       }
//     },

//     resetToInitialState(state, action) {
//       state.items = [];
//       state.totalQuantity = 0;
//     },

//     // ...other reducers
//   },
//   extraReducers: (builder) => {
//     builder.addCase(addProducts.fulfilled, (state, action) => {
//       const productsData = action.payload;
//       state.items = [...state.items, ...productsData]
//       state.totalQuantity = state.items.reduce((total, product) => total + product.quantity, 0);
//     });
//     builder.addCase(getProducts.fulfilled, (state, action) => {
//       // const productsData = action.payload;
//       // console.log("🚀 ~ file: cart_slice.ts:88 ~ builder.addCase ~ productsData:", productsData)
      
  

//       // return state;
//     })
//   },
  
// });
    