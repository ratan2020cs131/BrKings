import { configureStore } from "@reduxjs/toolkit";
import itemSlice from './Slices/itemSlice';
import UserReducer from "./Slices/UserSlice";
import PaginationReducer from "./Slices/Pagination";
import CartReducer from "./Slices/Cart";

const store = configureStore({
    reducer: {
        item: itemSlice,
        pagination: PaginationReducer,
        user: UserReducer,
        cart: CartReducer,
    },
});

export default store;
