import axios from 'axios';
import React, { useEffect, useState } from 'react'

function RegisterForm() {
  const [departments,setDepartments] =useState([])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    course: "",
    year: "",
    phone: "",
  });

useEffect(()=>{
  fetchDepartment()

},[])

const fetchDepartment = async()=>{
  try {
    
    const res= await axios.get("https://campus-folw-backend.onrender.com/api/department/get")
    setDepartments(res.data)

  } catch (error) {
    
  }
}



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.course ||
      !formData.year ||
      !formData.phone
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post("https://campus-folw-backend.onrender.com/api/user/register", {
        ...formData,
        role: "student",
        status:"pending"
      });

      alert("Registered Successfully ✅");

      setFormData({
        name: "",
        email: "",
        password: "",
        course: "",
        year: "",
        phone: "",
       
        
      });
    } catch (error) {
      alert("Registration Failed ❌");
      console.log(error);
      
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-500 to-purple-600 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          Student Registration
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Course Select */}
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="">Select Course</option>
          {
            departments.map(department =>(
                        <option key={department._id} value={department.name}>{department.name}</option>


            ))
          }
        </select>

        {/* Year */}
        <input
          type="number"
          name="year"
          placeholder="Enter Year (1-4)"
          value={formData.year}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm