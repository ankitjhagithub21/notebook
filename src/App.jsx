import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Notes from './pages/Notes'
import About from './pages/About'
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
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App