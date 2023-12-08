import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../noteSlice'

const AddNote = () => {
    const dispatch = useDispatch()
    const initialNote = {
        title:"",
        description:""
    }
    const [note,setNote] = useState(initialNote)

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setNote({
            ...note,
            [name]:value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const date = new Date()
        const newNote = {
            ...note,
            id: date.getTime()
        }
        dispatch(addNote(newNote))
        
        setNote(initialNote)
    }
  return (
    <section className="relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-bold title-font">
        Add Note
      </h1>
     
    </div>
    <form className="lg:w-1/2 md:w-2/3 mx-auto" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="title" className="leading-7 text-lg">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={note.title}
              onChange={handleChange}
              required
            />
          </div>
        </div>
       
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="description"
              className="leading-7 text-lg text-gray-600"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200  text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-20  0 ease-in-out"
              value={note.description}
              onChange={handleChange}
              required
              rows={6}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
            Add
          </button>
        </div>
        
      </div>
    </form>
  </div>
</section>

  )
}

export default AddNote