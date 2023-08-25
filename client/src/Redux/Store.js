import { configureStore } from "@reduxjs/toolkit";
import itemSlice from './Slices/itemSlice';

const store = configureStore({
    reducer: {
        itemSlice,
    },
});

export default store;
