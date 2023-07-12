import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./store/authSlice";
import usersReducer from "./store/usersSlice";
import postsReducer from "./store/postsSlice";


export default configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
        posts: postsReducer
    }
})
