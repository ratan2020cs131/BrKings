
import { createSlice } from '@reduxjs/toolkit'


const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers:{
    setData : (state, action)=>{
      return action.payload;
    },
    featureData : (state,action) =>{

    }
  },
});

export const { setData } = itemSlice.actions;

export default itemSlice.reducer;