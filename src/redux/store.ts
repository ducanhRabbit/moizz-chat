import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authReducer'
import sideTabReducer from './slices/sideTabReducer'
// ...

const store = configureStore({
  reducer: {
    auth:authReducer,
    sideTab: sideTabReducer
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch