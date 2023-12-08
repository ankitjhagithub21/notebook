import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Notes from './pages/Notes'
import AddNote from './pages/AddNote'
import {Toaster} from "react-hot-toast"
import "./App.css"
const App = () => {
  return (
    <BrowserRouter>
    <Toaster/>
    
      <Navbar />
      <Routes>

        <Route path="/" element={<AddNote />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App