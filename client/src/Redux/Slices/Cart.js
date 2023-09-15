// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {toast} from "react-toastify";


const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      toast.success("Product Successfully added to Cart")
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
