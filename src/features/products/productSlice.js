import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};
// https://eager-sable-airedale.glitch.me/products
export const productsFetching = createAsyncThunk(
  "Products/productsFetching",
  async () => {
    const res = await axios.get(
      "https://tech-alpha-qtwm.onrender.com/api/products"
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
      state.status = "Loading .......";
    });
    builder.addCase(productsFetching.fulfilled, (state, action) => {
      state.status = "";
      state.items = action.payload;
    });
    builder.addCase(productsFetching.rejected, (state, action) => {
      state.status = "Something went wrong";
    });
  },
});

export default productSlice.reducer;
