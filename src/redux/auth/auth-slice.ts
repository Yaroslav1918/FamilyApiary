import { createSlice } from "@reduxjs/toolkit";
import operations from "./auth-operations";
interface User {
  name: string | null;
  email: string | null;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(operations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(operations.register.rejected, (state, action) => {
        state.error = action.error.message as string | null;
      })
      .addCase(operations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(operations.logIn.rejected, (state, action) => {
        state.error = action.error.message as string | null;
      })
      .addCase(operations.googleLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(operations.googleLogin.rejected, (state, action) => {
        state.error = action.error.message as string | null;
      })
      .addCase(operations.logOut.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(operations.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(operations.fetchCurrentUser.rejected, (state, action) => {
        state.error = action.error.message as string | null;
      });
  },
});

export default authSlice.reducer;
