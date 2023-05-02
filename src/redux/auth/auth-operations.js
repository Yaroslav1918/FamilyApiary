import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "http://localhost:3038";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("/api/auth", async (credentials) => {
  try {
    const { data } = await axios.post("/api/auth/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    if (error.response.status === 400) {
      toast.error("User creation error! Please try again!");
    }
    if (error.response.status === 500) {
      toast.error(" Server error! Please try later!");
    }
  }
});

const logIn = createAsyncThunk("/auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/api/auth/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    if (error.response.status === 400) {
      toast.error("Not correct login. Please try again!");
    }
  }
});

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/api/auth/logout");
    token.unset();
  } catch (error) {
    if (error.response.status === 401) {
      toast.error("Missing header with authorization token!");
    }
    if (error.response.status === 500) {
      toast.error(" Server error! Please try later!");
    }
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/api/auth/current");
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Missing header with authorization token!");
      }
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
