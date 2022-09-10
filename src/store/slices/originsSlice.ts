import {createSlice} from "@reduxjs/toolkit";

const addOriginToArray = (state: string[], action: any) => {
    state.push(action.payload);
}

const removeOriginFromArray = (state: string[], action: any) => {
    let originIndex = state.indexOf(action.payload);
    state.splice(originIndex, 1);
}

export const originsSlice = createSlice({
    name: "origins",
    initialState: [],
    reducers: {
        add: addOriginToArray,
        remove: removeOriginFromArray
    }
});

export const { add, remove } = originsSlice.actions;

export default originsSlice.reducer;

export const getOrigins = (state: any) => state.origins
