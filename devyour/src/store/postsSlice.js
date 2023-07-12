import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        items: []
    },
    reducers: {
        setPosts: (state, action) => {
            state.items = action.payload
        },
        addPosts: (state, action) => {
            state.items.push(action.payload)
        }
    }
})

export const { setPosts, addPosts } = postsSlice.actions;

export default postsSlice.reducer;