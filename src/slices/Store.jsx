import { configureStore } from "@reduxjs/toolkit";
import siteSlice from "./LoginSlice"; // Make sure the path is correct
import UserSLice from "./UserSLice";

const store = configureStore({
    reducer: {
        site: siteSlice,
        user: UserSLice,
    }
});

export default store;
