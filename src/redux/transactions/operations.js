import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import { guardApi } from "../../config/guardApi";

export const getTransactionsThunk = createAsyncThunk(
  "getTransaction",
  async (_, thunkApi) => {
    try {
      const { data } = await guardApi.get("/api/transactions");

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addTransactionsThunk = createAsyncThunk(
  "addTransaction",
  async (transaction, thunkApi) => {
    try {
      const { data } = await guardApi.post("/api/transactions", transaction);
      return data;
    } catch (error) {
      toast(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const updateTransactionsThunk = createAsyncThunk(
  "currentTransaction",
  async (transaction, thunkApi) => {
    try {
      const { data } = await guardApi.patch(
        `/api/transactions/${transaction.id}`,
        transaction.data
      );

      return data;
    } catch (error) {
      toast(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionsThunk = createAsyncThunk(
  "deleteTransaction",
  async (id, thunkApi) => {
    try {
      const { data } = await guardApi.delete(`/api/transactions/${id}`);
      return data.id;
    } catch (error) {
      toast(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchPeriodThunk = createAsyncThunk(
  "transactions/fetchPeriod",
  async ({ year, month }, thunkAPI) => {
    try {
      const { data } = await guardApi.get(
        `/api/transactions-summary?year=${year}&month=${month}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchYearThunk = createAsyncThunk(
  "transactions/fetchYear",
  async ({ year }, thunkAPI) => {
    try {
      const { data } = await guardApi.get(
        `/api/transactions-summary?year=${year}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
