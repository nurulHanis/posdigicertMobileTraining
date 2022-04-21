import { configureStore } from '@reduxjs/toolkit'
import settingSliceReducer from './settingSlice'

export const store = configureStore({
  reducer: {
    settingSlice: settingSliceReducer,
  },
})