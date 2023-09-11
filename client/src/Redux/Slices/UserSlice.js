import { createSlice } from "@reduxjs/toolkit";

const UserSlice =createSlice({
    name: "user",
    initialState: {
        isloggedin: false,
    },
    extraReducers:(builder) => {
        
    }
})

export default UserSlice.reducer;
