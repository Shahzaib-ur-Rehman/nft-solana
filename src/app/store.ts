import { configureStore } from '@reduxjs/toolkit'
import collectionReducer from '../features/Collections/collectionSlice'
import thunk from "redux-thunk";
const store = configureStore({
  reducer: {

    collectionResults: collectionReducer
  },
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch