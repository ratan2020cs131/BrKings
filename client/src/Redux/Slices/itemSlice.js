
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import data from "../../API/product.json";

 export const fetchProducts = createAsyncThunk("items/fetchItems", async () => {
  return data;
})

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers:{
    setData : (state, action)=>{
      
    },
  },
  extraReducers:(builder) =>{
    builder.addCase(fetchProducts.fulfilled ,(state, action) => {
      return action.payload;
    })
  }
});

// export const { setData } = itemSlice.actions;

export default itemSlice.reducer;