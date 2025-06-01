import { configureStore } from '@reduxjs/toolkit'
import selectedValue  from './selectedValueSlice'
import ticketPrice  from './ticketTotalPriceSlice'

export const store = configureStore({
  reducer: {
    selector : selectedValue,
    ticket_price : ticketPrice 
  },
})