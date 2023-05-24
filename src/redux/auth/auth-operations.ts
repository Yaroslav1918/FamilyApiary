import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "../store";
import { useAppSelector } from "../../helpers/hooks";

axios.defaults.baseURL = "http://localhost:3038";

const token = {
  set(token: null | string ) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

interface SignupCredentials {
  name: string
  email: string;
  password: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

const register = createAsyncThunk("/api/auth", async (credentials: SignupCredentials) => {
  try {
    const { data } = await axios.post("/api/auth/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 400) {
      toast.error("User creation error! Please try again!");
    }
    if (axios.isAxiosError(error) && error.response?.status === 500) {
      toast.error(" Server error! Please try later!");
    }
    throw error;
  }
});

const logIn = createAsyncThunk("/auth/login", async (credentials: LoginCredentials) => {
  try {
    const { data } = await axios.post("/api/auth/login", credentials);
    token.set(data.token);
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 400) {
      toast.error("Not correct login. Please try again!");
    }
    throw error;
  }
});

const logOut = createAsyncThunk("/auth/logout", async () => {
 
  try {
    await axios.post("/api/auth/logout");
    token.unset();
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      toast.error("Missing header with authorization token!");
    }
   
    if (axios.isAxiosError(error) && error.response?.status === 500) {
      toast.error(" Server error! Please try later!");
    }
    throw error;
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const persistedToken  =   useAppSelector((state) => state.auth.token);  
    // console.log("🚀 ~ file: auth-operations.ts:78 ~ persistedToken:", persistedToken)
    // const state: any = thunkAPI.getState();
    // const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Token not found");
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/api/auth/current");
      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        toast.error("Missing header with authorization token!");
      }
      throw error;
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
