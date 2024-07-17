import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addTransactionsThunk,
  deleteTransactionsThunk,
  getTransactionsThunk,
  updateTransactionsThunk,
} from "./operations";

const initialState = {
  transactions: [],
  isError: false,
  isLoading: false,
};

const slice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    deleteTransaction(state, action) {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
    },
  },
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
      .addMatcher(
        isAnyOf(
          getTransactionsThunk.pending,
          addTransactionsThunk.pending,
          deleteTransactionsThunk.pending,
          updateTransactionsThunk.pending
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
          updateTransactionsThunk.fulfilled
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
          updateTransactionsThunk.rejected
        ),
        (state, action) => {
          state.isError = action.payload;
          state.isLoading = false;
        }
      );
  },
});

export const { deleteTransaction } = slice.actions;
export const transactionsReducer = slice.reducer;