import React from 'react';
import NoteBox from '../components/NoteBox';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"

const Notes = () => {
  const notes = useSelector((state) => state.notes.value);
  
  if(notes.length===0){
     return <div className='text-center py-24'>
      <p className='text-xl mb-5'>Nothing to display !!</p>
      <Link className='underline text-white text-lg' to={"/"}>Add Note</Link>
     </div>
  }
  return (
    <section className="body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2">
         Your Notes
        </h1>
        
      </div>
      <div className="flex flex-wrap -m-4">
        
       {
          notes.map((note)=>{
            return <NoteBox key={note.id} note={note}/>
          })
       }
       
      </div>
     
    </div>
  </section>
  
  );
};

export default Notes;
