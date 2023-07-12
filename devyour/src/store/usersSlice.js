import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        items: []
    },
    reducers: {
        setUsers: (state, action) => {
            state.items = action.payload
        },
    }
})

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;