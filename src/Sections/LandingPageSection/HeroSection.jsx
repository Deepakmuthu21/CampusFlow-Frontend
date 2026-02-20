import React from 'react'
import { Link } from 'react-router-dom'
import HeroImage from "../../../src/assets/HeroImage.jpg"

function HeroSection() {
  return (
    <section className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Welcome to <span className='font-bold bg-gradient-to-r from-yellow-500 via-white to-green-600 bg-clip-text text-transparent'>CampusFlow</span>  Academic Management Portal
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Manage assignments, submissions, departments and students easily.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
           
<Link 
  to="/register"
  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
>
  Register
</Link>            

            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition">
             <a href="#contact" onClick={() => setIsOpen(false)}>
               Contact
              </a>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src= {HeroImage}
            alt="College"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>

      </div>
    </section>
  )
}

export default HeroSection