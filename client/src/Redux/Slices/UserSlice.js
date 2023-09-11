import { createSlice } from "@reduxjs/toolkit";

const UserSlice =createSlice({
    name: "user",
    initialState: {
        login: false,
    },
    extraReducers:(builder) => {
        builder.addCase()
    }
})

export default UserSlice.reducer;
