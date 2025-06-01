import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    price : 0
}

export const ticketPrice = createSlice({
    name : 'price',
    initialState ,
    reducers : {
        changePrice : (state , action) => {
            state.price = action.payload
        }
    }
}) 

export const { changePrice } = ticketPrice.actions

export default ticketPrice.reducer