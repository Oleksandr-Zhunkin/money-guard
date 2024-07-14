import { createSlice } from "@reduxjs/toolkit";
import { monoThunk } from "./operations";

const initialState = {
  mono: [],
};
const slice = createSlice({
  name: "mono",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(monoThunk.fulfilled, (state, action) => {
      state.mono = action.payload;
    });
  },
});
export const monoReducer = slice.reducer;
