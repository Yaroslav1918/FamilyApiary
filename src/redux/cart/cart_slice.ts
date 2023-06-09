import { createSlice } from "@reduxjs/toolkit";

import {
  addProducts,
  addToWishlistAsync,
  getAllSoldProducts,
  getAllWishProducts,
  getProducts,
  removeItem,
  removeProductFromWishlist,
} from "./cart_operations";

interface CartItem {
  id: number;
  image: string;
  price: number;
  quantity: number;
  totalPrice: number;
  text: string;
}
interface BoughtProduct {
  items: CartItem[];
  boughtTotalQuantity: number;
}
interface CartState {
  items: CartItem[];
  totalQuantity: number;
  boughtProducts: { [date: string]: BoughtProduct };
  wishlist: CartItem[];
  wishTotalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  boughtProducts: {},
  wishlist: [],
  wishTotalQuantity: 0,
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
        totalPrice,
      };
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
      if (!isIncludeItem || isIncludeItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        isIncludeItem.quantity--;
        isIncludeItem.totalPrice -= isIncludeItem.price;
      }
      state.totalQuantity--;
    },
    resetToInitialState(state) {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addProducts.fulfilled, (state, { payload }) => {
      state.items = payload.items;
      state.totalQuantity = payload.totalQuantity;
    });
    builder.addCase(removeItem.fulfilled, (state, { payload }) => {
      state.items = payload.cart.items;
      state.totalQuantity = payload.cart.totalQuantity;
    });
    builder.addCase(getAllSoldProducts.fulfilled, (state, { payload }) => {
      state.items = payload.user.items;
      state.totalQuantity = payload.user.totalQuantity;
      state.boughtProducts = payload.user.boughtProducts;
      state.wishTotalQuantity = payload.user.wishTotalQuantity;
      state.wishlist = payload.user.wishItems;
    });

    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.boughtProducts = payload[0].boughtProducts;
      state.items = payload[0].items;
      state.totalQuantity = payload[0].totalQuantity;
      state.wishTotalQuantity = payload[0].wishTotalQuantity;
      state.wishlist = payload[0].wishItems;
    });

    builder.addCase(getAllWishProducts.fulfilled, (state, { payload }) => {
      state.wishlist = payload[0].wishlist;
      state.wishTotalQuantity = payload[0].wishTotalQuantity;
    });
    builder.addCase(addToWishlistAsync.fulfilled, (state, { payload }) => {
      state.wishlist = payload.wishItems;
      state.wishTotalQuantity = payload.wishTotalQuantity;
    });

    builder.addCase(
      removeProductFromWishlist.fulfilled,
      (state, { payload }) => {
        state.wishlist = payload.cart.wishItems;
        state.wishTotalQuantity = payload.cart.wishTotalQuantity;
      }
    );
  },
});

export const { addItemToCart, resetToInitialState, removeItemFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;

export const cartActions = {
  addItemToCart: addItemToCart,
  removeItemFromCart: removeItemFromCart,
  resetToInitialState: resetToInitialState,
};
