import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedLang : "",
  selectedTheatres: ""
}

export const selectedValue = createSlice({
  name: 'selector',
  initialState,
  reducers: {
    changeLang : (state,action) => {
        state.selectedLang = action.payload
    },
    changeTheatre : (state,action) => {
        state.selectedTheatres = action.payload
    }
    
  },
})

export const { changeLang , changeTheatre } = selectedValue.actions

export default selectedValue.reducer