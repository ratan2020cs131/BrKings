import { configureStore } from "@reduxjs/toolkit";
import itemSlice from './Slices/itemSlice';
import UserSlice from "./Slices/UserSlice";
import PaginationReducer from "./Slices/Pagination";

const store = configureStore({
    reducer: {
        item: itemSlice,
        pagination: PaginationReducer,
        // user: UserSlice,
    },
});

export default store;
