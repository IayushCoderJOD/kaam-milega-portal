import { configureStore } from "@reduxjs/toolkit";
import siteSlice from "./LoginSlice"; // Make sure the path is correct
import UserSLice from "./UserSLice";
import SkillSlice from "./SkillSlice";

const store = configureStore({
    reducer: {
        site: siteSlice,
        user: UserSLice,
        skills: SkillSlice,
    }
});

export default store;
