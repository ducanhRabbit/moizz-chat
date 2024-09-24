import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: true,
    content: sessionStorage.getItem('currentTab') || 'chat'
}

const sideTabReducer = createSlice({
  name: "sideTab",
  initialState,
  reducers: {
    toggleOpen:(state)=>{
         state.isOpen = !state.isOpen
    },
    switchTab:(state,action)=>{
      state.content = action.payload
    }
  }
});

export const {toggleOpen, switchTab} = sideTabReducer.actions

export default sideTabReducer.reducer