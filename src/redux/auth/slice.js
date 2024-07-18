import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from "./operations";

const initialState = {
  user: null,
  token: "",
  isLoggedIn: false,
  isLoading: false,
  isRefresh: false,
  isError: false,
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
        state.isLoading = false;
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.isLoading = false;
        state.isRefresh = false;
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isLoading = true;
        state.isRefresh = true;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      });
  },
});

export const authReducer = slice.reducer;
