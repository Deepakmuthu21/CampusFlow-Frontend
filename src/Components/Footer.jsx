import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-linear-to-r from-indigo-600 to-purple-700 text-white pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold">College Portal</h2>
          <p className="mt-4 text-gray-200 leading-relaxed">
            A modern academic management system designed to streamline
            student, mentor, and admin workflows efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="#/" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#courses" className="hover:text-white">Courses</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Student Management</li>
            <li>Mentor Dashboard</li>
            <li>Assignment Tracking</li>
            <li>Department Control</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-200">
            <li>📍 Chennai, Tamil Nadu</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ support@collegeportal.com</li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-gray-300">🌐</a>
            <a href="#" className="hover:text-gray-300">📘</a>
            <a href="#" className="hover:text-gray-300">🐦</a>
            <a href="#" className="hover:text-gray-300">📸</a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/30 mt-10 pt-6 text-center text-gray-200 text-sm">
        © {new Date().getFullYear()} College Portal. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer