import { createSlice } from "@reduxjs/toolkit";

const skillSlice = createSlice({
    name: 'skills',
    initialState: [],
    reducers: {
        addSkill: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const { addSkill } = skillSlice.actions;
export default skillSlice.reducer;
