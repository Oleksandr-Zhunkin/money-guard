import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addTransactionsThunk,
  deleteTransactionsThunk,
  fetchPeriodThunk,
  getTransactionsThunk,
  updateTransactionsThunk,
} from "./operations";

const initialState = {
  transactions: [],
  periodTransaction: null,
  isError: false,
  isLoading: false,
};

const slice = createSlice({
  name: "transactions",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTransactionsThunk.fulfilled, (state, action) => {
        state.transactions = action.payload;
      })
      .addCase(addTransactionsThunk.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
      })
      .addCase(updateTransactionsThunk.fulfilled, (state, action) => {
        state.transactions = state.transactions.map((transaction) =>
          transaction.id === action.payload.id
            ? { ...transaction, ...action.payload }
            : transaction
        );
      })
      .addCase(deleteTransactionsThunk.fulfilled, (state, action) => {
        state.transactions = state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        );
      })
      .addCase(fetchPeriodThunk.fulfilled, (state, action) => {
        state.periodTransaction = action.payload;
      })
      .addMatcher(
        isAnyOf(
          getTransactionsThunk.pending,
          addTransactionsThunk.pending,
          deleteTransactionsThunk.pending,
          updateTransactionsThunk.pending,
          fetchPeriodThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getTransactionsThunk.fulfilled,
          addTransactionsThunk.fulfilled,
          deleteTransactionsThunk.fulfilled,
          updateTransactionsThunk.fulfilled,
          fetchPeriodThunk.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getTransactionsThunk.rejected,
          addTransactionsThunk.rejected,
          deleteTransactionsThunk.rejected,
          updateTransactionsThunk.rejected,
          fetchPeriodThunk.rejected
        ),
        (state, action) => {
          state.isError = action.payload;
          state.isLoading = false;
        }
      );
  },
});
export const transactionsReducer = slice.reducer;
