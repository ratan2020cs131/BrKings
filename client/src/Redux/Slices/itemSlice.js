
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import data from "../../API/product.json";
import axios from "axios";

 export const fetchProducts = createAsyncThunk("items/fetchItems",async () => {
  try {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
  } catch (error) {
    console.log(error);
  }
})

const itemSlice = createSlice({
  name: "items",
  initialState: { isLoading: false, products: [], error: null },
  extraReducers:(builder) =>{
    // builder.addCase(fetchProducts.fulfilled, (state, action) => {
    //   state.products = action.payload;
    // })
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});


export default itemSlice.reducer;