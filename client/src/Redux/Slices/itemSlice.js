
import { createSlice } from '@reduxjs/toolkit'

const fetchProducts = () => {
  // Simulating API call to fetch products
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Product 1', price: 19.99 },
        { id: 2, name: 'Product 2', price: 29.99 },
        { id: 3, name: 'Product 3', price: 39.99 },
        { id: 4, name: 'Product 4', price: 39.99 },
        { id: 5, name: 'Product 5', price: 39.99 },
        { id: 6, name: 'Product 6', price: 39.99 },
        // Add more products here
      ]);
    }, 1500); // Simulating a delay of 1.5 seconds
  });
};



export const getItems = () =>{
  let res=''; 
  fetchProducts().then((data)=>{
    res = data;
  });
  return res;
}

const itemSlice = createSlice({
  name: "items",
  initialState: {
    value: [],
    loading: false,
  },
  reducers:{
    setData : (state, action)=>{
      state.value = action.payload
    }
  },
  // extraReducers: {
  //   [getItems.pending]: (state, ation) => {
  //     state.loading = true;
  //   },
  //   [getItems.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.items = action.payload;
  //   },
  //   [getItems.rejected]: (state, action) => {
  //     state.loading = false;
  //   },
  // },
});

export const { setData } = itemSlice.actions;

export default itemSlice.reducer;