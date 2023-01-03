import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productsFetching = createAsyncThunk(
  "Products/productsFetching",
  async () => {
    const res = await axios.get(
      "https://eager-sable-airedale.glitch.me/products"
    );
    return res.data;
  }
);

export const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsFetching.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(productsFetching.fulfilled, (state, action) => {
      state.status = "successfull";
      state.items = action.payload;
    });
    builder.addCase(productsFetching.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export default productSlice.reducer;
