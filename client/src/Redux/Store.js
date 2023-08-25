import { configureStore } from "@reduxjs/toolkit";
import DataReducer from './Slices/itemSlice';

const store = configureStore({
    reducer: {
        item: DataReducer,
    },
});

export default store;
