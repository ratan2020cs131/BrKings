import { configureStore } from "@reduxjs/toolkit";
import itemSlice from './Slices/itemSlice';
import UserSlice from "./Slices/UserSlice";

const store = configureStore({
    reducer: {
        item: itemSlice,
        user: UserSlice,
    },
});

export default store;
