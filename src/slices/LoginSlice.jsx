import { createSlice } from "@reduxjs/toolkit";

const siteSlice = createSlice({
    name: "site",
    initialState: {
        loginForm: false,
    },
    reducers: {
        alreadyUser: (state) => {
            state.loginForm = !state.loginForm;
        }
    }
})

export const { alreadyUser } = siteSlice.actions;
export default siteSlice.reducer;