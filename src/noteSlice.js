import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const notes = JSON.parse(localStorage.getItem('notes')) || []

const initialState = {
  value: notes,
}

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
        const updatedNotes = [...state.value, action.payload];
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        state.value = updatedNotes;
        toast.success("Note added.");
    
    },
    removeNote:(state,action)=>{
      const updatedNotes = state.value.filter((note)=>note.id!==action.payload)
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      state.value=updatedNotes
      toast.success("Note Deleted.");
    },
    editNote:(state,action)=>{
      const {id,title,description} = action.payload
     const index = state.value.findIndex((note)=>note.id==id)
     
     if(index!=-1){
      const updatedNotes = state.value;
      updatedNotes[index].title = title
      updatedNotes[index].description = description
      localStorage.setItem('notes', JSON.stringify(updatedNotes)); 
      state.value=updatedNotes
      toast.success("Note Saved.");
     }else{
      toast.error("Something is wrong.")
     }
      
      
    }
   
  },
})

export const { addNote ,removeNote,editNote} = noteSlice.actions

export default noteSlice.reducer