//// @ts-nocheck

import { configureStore } from '@reduxjs/toolkit'
import itemsSlice from "./features/shopSlice";


export const reduxStore = configureStore({
    reducer: {
        items: itemsSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the reduxStore itself
export type RootState = ReturnType<typeof reduxStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof reduxStore.dispatch