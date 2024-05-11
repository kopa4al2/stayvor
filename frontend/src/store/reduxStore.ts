//// @ts-nocheck

import { configureStore } from '@reduxjs/toolkit'
import itemsSlice from "./features/shopSlice";
import modalSlice from "./features/modalSlice";


export const reduxStore = configureStore({
    reducer: {
        items: itemsSlice,
        modalState: modalSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the reduxStore itself
export type RootState = ReturnType<typeof reduxStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof reduxStore.dispatch