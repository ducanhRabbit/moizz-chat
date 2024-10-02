import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authReducer'
import sideTabReducer from './slices/sideTabReducer'
import friendRequestReducer from './slices/friendRequestReducer'
// ...

const store = configureStore({
  reducer: {
    auth:authReducer,
    sideTab: sideTabReducer,
    friendRequest: friendRequestReducer
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch