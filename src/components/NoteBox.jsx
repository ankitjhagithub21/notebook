import React from 'react'
import { useDispatch } from 'react-redux'
import { removeNote, editNote } from '../noteSlice'
import { useState } from 'react';
import Modal from 'react-modal';

const NoteBox = ({ note }) => {
  Modal.setAppElement('#root');
  const [saveNote,setSaveNote] = useState(note)
  
  const dispatch = useDispatch()
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleRemove = (id) => {
    dispatch(removeNote(id))
  }
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setSaveNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(editNote(saveNote))
    closeModal()
  }
  const convertTimestampToLocalDateTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };
  return (

    <div className="xl:w-1/3 md:w-1/2 p-4 w-full">
      <Modal isOpen={modalIsOpen} style={customStyles} >
      <button onClick={closeModal} className="absolute right-2 top-2">
          <i className="ri-close-line text-xl text-gray-900"></i>
        </button>
      <h1 className="sm:text-3xl text-2xl text-center font-bold title-font mb-4 text-gray-900">
        Edit Note
      </h1>
        <form className="flex flex-wrap -m-2" onSubmit={handleSubmit}>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="title" className="leading-7 text-sm text-gray-600">
                Edit Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={saveNote.title}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="description"
                className="leading-7 text-sm text-gray-600"
              >
                Edit Description
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                value={saveNote.description}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Save Changes
            </button>
          </div>

        </form>
      </Modal>
      <div className="shadow-lg bg-gray-100 p-6 rounded-lg">
      <p className='text-lg font-medium text-indigo-700'>{convertTimestampToLocalDateTime(note.id)}</p>
          <hr className='my-2'/>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
          {note.title}
        </h2>
        <p className="leading-relaxed text-base text-gray-900">

          {note.description}
        </p>
        <div className='flex mt-5 gap-3 text-xl' >
          <button onClick={() => handleRemove(note.id)}><i className="ri-delete-bin-line border p-2 rounded hover:bg-red-500 hover:text-white text-red-500"></i></button>
          <button><i className="ri-pencil-line border p-2 rounded hover:bg-indigo-500 hover:text-white text-indigo-500" onClick={openModal}></i></button>
        </div>
      </div>
    </div>
  )
}

export default NoteBox