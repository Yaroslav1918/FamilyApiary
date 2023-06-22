import { configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import * as reduxThunk from "redux-thunk/extend-redux";
import thunkMiddleware from "redux-thunk";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/auth-slice";
import cartSlice from "./cart/cart_slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const cartPersistConfig = {
  key: "cart",
  storage: storage,
  whitelist: ["items", "totalQuantity"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    cartItems: persistReducer(cartPersistConfig, cartSlice),
  },
  middleware: [thunkMiddleware],
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
