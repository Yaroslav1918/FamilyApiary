import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { getSignupError, getSignupErrorEN } from "../../helpers/getTextError";

const language = i18next.use(LanguageDetector);
axios.defaults.baseURL = "https://family-apiary.herokuapp.com/";
// "http://localhost:3038"
const token = {
  set(token: null | string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

interface SignupCredentials {
  name: string;
  email: string;
  password: string;
}

interface LoginCredentials {
  email: string;
  password?: string;
}

const register = createAsyncThunk(
  "/api/auth",
  async (credentials: SignupCredentials, _) => {
    try {
      const { data } = await axios.post("/api/auth/signup", credentials);
      token.set(data.token);
      return data;
    } catch (error: any) {
      toast.error(
        language.resolvedLanguage === "uk"
          ? getSignupError(error.response.status)
          : getSignupErrorEN(error.response.status)
      );
      throw error;
    }
  }
);

const logIn = createAsyncThunk(
  "/auth/login",
  async (credentials: any) => {
    try {
      const { data } = await axios.post("/api/auth/login", credentials);
      token.set(data.token);
      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        toast.error("Not correct login. Please try again!");
      }
      if (axios.isAxiosError(error) && error.response?.status === 500) {
        toast.error(" Server error! Please try later!");
      }
      throw error;
    }
  }
);
const googleLogin = createAsyncThunk(
  "/auth/googleLogin",
  async (credentials: any) => {
    try {
      const { data } = await axios.post("/api/auth/google-login", credentials);
      token.set(data.token);
      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        toast.error("Not correct login. Please try again!");
      }
      if (axios.isAxiosError(error) && error.response?.status === 500) {
        toast.error(" Server error! Please try later!");
      }
      throw error;
    }
  }
);

const logOut = createAsyncThunk("/auth/logout", async () => {
  try {
    await axios.get("/api/auth/logout");
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
  "auth/current",
  async (_, thunkAPI) => {
    const { token: persistToken } = (thunkAPI.getState() as { auth: any }).auth;
  
    if (persistToken === null) {
      return thunkAPI.rejectWithValue("Token not found");
    }

    token.set(persistToken);
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
  googleLogin,
  fetchCurrentUser,
};
export default operations;
