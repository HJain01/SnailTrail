import {createSlice} from "@reduxjs/toolkit";

const addDestinationToArray = (state: string[], action: any) => {
    state.push(action.payload);
}

const removeDestinationFromArray = (state: string[], action: any) => {
    state.splice(action.payload, 1);
}

export const destinationsSlice = createSlice({
    name: "destinations",
    initialState: [],
    reducers: {
        add: addDestinationToArray,
        remove: removeDestinationFromArray
    }
});

export const { add, remove } = destinationsSlice.actions;

export default destinationsSlice.reducer;

export const getDestinations = (state: any) => state.destinations
