import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
      <Link className="flex font-medium items-center text-gray-900 mb-4 md:mb-0" to={"/"}>
        <img src="/notes.png" alt="logo" width={40}/>
        <span className="ml-3 text-xl">NoteBook</span>
      </Link>
      <nav>
        <Link className="mr-5 hover:text-gray-900" to={"/"}>Home</Link>
        <Link className="mr-5 hover:text-gray-900" to={"/about"}>About</Link>
        <Link className="mr-5 hover:text-gray-900" to={"/notes"}>Your Notes</Link>
        
      </nav>
      
    </div>
  </header>
  
  )
}

export default Navbar