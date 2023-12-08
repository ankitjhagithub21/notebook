import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to={"/"}>
        <img src="/vite.svg" alt="" />
        <span className="ml-3 text-xl">NoteBook</span>
      </Link>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <Link className="mr-5 hover:text-gray-900" to={"/"}>Home</Link>
        <Link className="mr-5 hover:text-gray-900" to={"/about"}>About</Link>
        <Link className="mr-5 hover:text-gray-900" to={"/notes"}>Your Notes</Link>
        
      </nav>
      <a className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" target='_blank' href='https://github.com/ankitjhagithub21/notebook'>
        Source Code
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </header>
  
  )
}

export default Navbar