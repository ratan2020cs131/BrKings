
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import data from "../../API/product.json";

 export const fetchProducts = createAsyncThunk("items/fetchItems",async () => {
  return data;
})

const itemSlice = createSlice({
  name: "items",
  initialState: {
    products: [],
  },
  extraReducers:(builder) =>{
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    })
  }
});


export default itemSlice.reducer;