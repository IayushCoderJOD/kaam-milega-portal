import { createSlice } from "@reduxjs/toolkit";

const skillSlice = createSlice({
    name: 'skills',
    initialState: [],
    reducers: {
        addSkill: (state, action) => {
            state.push(action.payload);
        },
        removeSkill: (state, action) => {
            const indexToRemove = action.payload;
            state.splice(indexToRemove, 1);
        },
    }
})

export const { addSkill, removeSkill } = skillSlice.actions;
export default skillSlice.reducer;
