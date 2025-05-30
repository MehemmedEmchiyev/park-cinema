import { configureStore } from '@reduxjs/toolkit'
import selectedValue  from './selectedValueSlice'

export const store = configureStore({
  reducer: {
    selector : selectedValue
  },
})