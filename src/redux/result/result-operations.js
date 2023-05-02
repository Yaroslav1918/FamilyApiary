import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// import i18next from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";

// const language = i18next.use(LanguageDetector);

const ADD_STATS_ENDPOINT = "/api/stats";
const GET_STATS_ENDPOINT = "/api/stats";

export const addStats = createAsyncThunk(
  "stats/addStats",
  async (stats, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(ADD_STATS_ENDPOINT, stats);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getStats = createAsyncThunk(
  "stats/getStats",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(GET_STATS_ENDPOINT);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operations = {
  addStats,
  getStats,
};
export default operations;
