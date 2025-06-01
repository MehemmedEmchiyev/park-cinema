import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    price : 0,
    place : []
}

export const ticketPrice = createSlice({
    name : 'price',
    initialState ,
    reducers : {
        changePrice : (state , action) => {
            state.price = action.payload
        },
        changePlace : (state , action) => {
            state.place = action.payload
        }
    }
}) 

export const { changePrice , changePlace} = ticketPrice.actions

export default ticketPrice.reducer