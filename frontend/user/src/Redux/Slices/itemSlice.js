import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchProductById } from "../API/ProductApi";

export const fetchProducts = createAsyncThunk("items/fetchItems", async () => {
  try {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
  } catch (error) {
    console.log(error);
  }
});

// export const signin = createAsyncThunk(
//   "auth/signin",
//   async (userData, thunkAPI) => {
//     try {
//       return await authService.signin(userData);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const fetchProductByIdAsync = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const response = await fetchProductById(id);
    // The value we return becomes the `fulfilled` action payload

    return response.data;
  }
);

const itemSlice = createSlice({
  name: "items",
  initialState: {
    isLoading: false,
    products: [],
    error: null,
    selectedProduct: null,
    status: "idle",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.error = action.error.message;
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedProduct = action.payload;
      });
  },
});

export const selectAllProducts = (state) => state.item.products;
export const selectProductById = (state) => state.item.selectedProduct;
export const selectProductSatus = (state) => state.item.status;
export default itemSlice.reducer;
