import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
  fetchBalanceThunk,
} from "./operations";

const initialState = {
  user: null,
  token: "",
  isLoggedIn: false,
  isLoading: false,
  isRefresh: false,
  isError: false,
  balance: 0, // Add balance to the initial state
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.isRefresh = false;
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isRefresh = true;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(fetchBalanceThunk.fulfilled, (state, action) => {
        state.balance = action.payload; 
      })
      .addCase(fetchBalanceThunk.rejected, (state, action) => {
        state.isError = action.payload;
      });
  },
});

export const authReducer = slice.reducer;
