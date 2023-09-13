import { configureStore } from "@reduxjs/toolkit";
import itemSlice from './Slices/itemSlice';
import UserReducer from "./Slices/UserSlice";
import PaginationReducer from "./Slices/Pagination";

const store = configureStore({
    reducer: {
        item: itemSlice,
        pagination: PaginationReducer,
        user: UserReducer,
    },
});

export default store;
