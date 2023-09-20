import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchLoggedInUserOrders, fetchLoggedInUser, updateUser } from "../../API/UserApi";




export const fetchLoggedInUserOrderAsync = createAsyncThunk(
  "user/fetchLoggedInUserOrders",
  async () => {
    const response = await fetchLoggedInUserOrders();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchLoggedInUserAsync = createAsyncThunk(
  "user/fetchLoggedInUser",
  async () => {
    const response = await fetchLoggedInUser();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk(
  "user/updateUser",
  async (update) => {
    // this is name mistake
    const response = await updateUser(update);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

const UserSlice = createSlice({
    name: 'user',
    initialState: {
      status:'idle',
      openLogin: true,
      openSignup: false,
      isLoggedin: false,
      user: null,
    },
    reducers: {
      loggedin: (state, action) => {
        state.isLoggedin = true;
        state.user = action.payload;
      },
      login: (state) => {
        state.openLogin = true;
      },
      signup: (state) => {
        state.openSignup = true;
      },
      logout: (state) => {
        state.isLoggedin = false;
        state.user = null;
      },
      closeLog: (state) => {
        state.openLogin = false;
      },
      closeSign: (state) =>{
        state.openSignup = false;
      }
    },
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(fetchLoggedInUserOrderAsync.pending, (state) => {
    //       state.status = "loading";
    //     })
    //     .addCase(fetchLoggedInUserOrderAsync.fulfilled, (state, action) => {
    //       state.status = "idle";
    //       state.userInfo.orders = action.payload;
    //     })
    //     .addCase(updateUserAsync.pending, (state) => {
    //       state.status = "loading";
    //     })
    //     .addCase(updateUserAsync.fulfilled, (state, action) => {
    //       state.status = "idle";
    //       // earlier there was loggedInUser variable in other slice
    //       state.userInfo = action.payload;
    //     })
    //     .addCase(fetchLoggedInUserAsync.pending, (state) => {
    //       state.status = "loading";
    //     })
    //     .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
    //       state.status = "idle";
    //       // this info can be different or more from logged-in User info
    //       state.userInfo = action.payload;
    //     });
    // },
})

export const { loggedin, login, logout, signup, closeLog, closeSign } = UserSlice.actions;
export const selectUser = (state) => state.user.isLoggedin;
export const selectUserOrders = (state) => state.user?.userInfo?.orders;
export const selectUserInfo = (state) => state.user?.userInfo;
export const selectUserInfoStatus = (state) => state.user?.status;

export default UserSlice.reducer;
