import { createSlice } from "@reduxjs/toolkit";
import operations from "./result-operations";

const initialState = {
  statsPlayer1: {
    won: 0,
    draw: 0,
    lose: 0,
  },
  statsPlayer2: {
    won: 0,
    draw: 0,
    lose: 0,
  },
  loading: false,
  isFirstLoaded: false,
  error: null,
};

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(operations.addStats.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(operations.addStats.fulfilled, (state, { payload }) => {
        state.statsPlayer1 = { ...state.statsPlayer1, ...payload.statsPlayer1 };
        state.statsPlayer2 = { ...state.statsPlayer2, ...payload.statsPlayer2 };
        state.loading = false;
      })
      .addCase(operations.addStats.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      })
      .addCase(operations.getStats.pending, (state) => {
        state.error = null;
        state.isFirstLoaded = false;
        state.loading = true;
      })
      .addCase(operations.getStats.fulfilled, (state, { payload }) => {
        state.statsPlayer1.won = payload.statsPlayer1.won;
        state.statsPlayer1.draw = payload.statsPlayer1.draw;
        state.statsPlayer1.lose = payload.statsPlayer1.lose;
        state.statsPlayer2.won = payload.statsPlayer2.won;
        state.statsPlayer2.draw = payload.statsPlayer2.draw;
        state.statsPlayer2.lose = payload.statsPlayer2.lose;
        state.isFirstLoaded = true;
        state.loading = false;
      })
      .addCase(operations.getStats.rejected, (state, { payload }) => {
        state.error = payload;
        state.isFirstLoaded = true;
        state.loading = false;
      });
  },
});
export default statsSlice.reducer;