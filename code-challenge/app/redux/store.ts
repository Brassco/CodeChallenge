import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './slices/locationsSlice';
import dateReducer from './slices/datesSlice';

export const store = configureStore({
  reducer: {
    locations: locationReducer,
    dates: dateReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch