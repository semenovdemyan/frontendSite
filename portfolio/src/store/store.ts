// store/store.ts
import { configureStore } from '@reduxjs/toolkit'
import cubeReducer from './cubeSlice'

export const store = configureStore({
  reducer: {
    cube: cubeReducer,
  },
})

// Типы для TS, если нужно
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
