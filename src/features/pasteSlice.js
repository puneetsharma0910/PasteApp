import { createSlice } from '@reduxjs/toolkit'
import  toast, { Toaster } from 'react-hot-toast';

const initialState = {
  pastes:localStorage.getItem("pastes")
  ?JSON.parse(localStorage.getItem("pastes"))
  :[],
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
      const paste =  action.payload;
      state.pastes.push(paste)
      localStorage.setItem("pastes", JSON.stringify(state.pastes))
      toast("Paste Created successfully")
       
    
    },
    updateToPastes: (state,action) => {
    const paste = action.payload();
    const index = state.pastes.findIndex((item)=>item.id === paste._id);
    if(index>=0){
      state.pastes[index] = paste;
      localStorage.setItem("pastes",JSON.stringify(state.pastes))
      toast.success("Paste Updated")
    }
    },
    resetAllPastes: (state, action) => {
      state.pastes = [];// puneet sharma
      localStorage.removeItem("pastes");
  
    },
    removeFromPastes: (state, action) => {
      const paste = action.payload();
      const index = state.pastes.findIndex((item)=>item.id === paste._id);
      if(index >=0){

        state.pastes.splice(index,1)  
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes} = pasteSlice.actions

export default pasteSlice.reducer