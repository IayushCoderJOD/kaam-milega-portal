import { configureStore } from "@reduxjs/toolkit";
import siteSlice from "./LoginSlice"; // Make sure the path is correct

const store = configureStore({
    reducer: {
        site: siteSlice,
    }
});

export default store;
