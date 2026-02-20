import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function StudentNav() {
   const [isLogin, setIsLogin] = useState(false);
const [isOpen, setIsOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <nav className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 fixed w-full z-20 top-0 left-0 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        <Link to="/" className="text-white font-bold text-xl">
          College Portal
        </Link>

        {/* Mobile Button */}
        <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          ☰
        </button>

        {/* Menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:flex md:items-center`}>
          <ul className="flex flex-col md:flex-row gap-6 text-white mt-4 md:mt-0">

            <li>
              <a href="#myTask" onClick={() => setIsOpen(false)}>
                My Tasks
              </a>
            </li>

            <li>
              <a href="#mySubmission" onClick={() => setIsOpen(false)}>
               My Submission
              </a>
            </li>

            <li>
              <Link to="/profile" className="text-white font-bold text-xl">
         Profile
        </Link>
            </li>

           

          </ul>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default StudentNav