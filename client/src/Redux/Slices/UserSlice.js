import { createSlice } from "@reduxjs/toolkit";

const UserSlice =createSlice({
    name: 'user',
    initialState: {
      isLoggedin: false,
      isSignedup: false,
      user: null,
    },
    reducers: {
      login: (state, action) => {
        state.isLoggedin = true;
        state.user = action.payload;
      },
      signup: (state, action) => {
        state.isSignedup = true;
      },
      logout: (state) => {
        state.isLoggedin = false;
        state.user = null;
      },
      closeLog: (state) => {
        state.isLoggedin = false;
      },
      closeSign: (state) =>{
        state.isSignedup = false;
      }
    },
})

export const { login, logout, signup, closeLog, closeSign } = UserSlice.actions;
export const selectUser = (state) => state.user;

export default UserSlice.reducer;
