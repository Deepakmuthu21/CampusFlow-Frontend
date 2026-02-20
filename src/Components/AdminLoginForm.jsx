import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { AuthContext } from "../Context/AuthProvider";

function AdminLoginForm() {
  const navigate = useNavigate();
    const { login,userId } = useContext(AuthContext);
  

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://campus-folw-backend.onrender.com/api/user/login",
        formData
      );

      login({
        userId: response.data.userId,
        userRole: response.data.userRole,
        token: response.data.token,
      });

     if (response.data.userRole === "admin") {
  navigate("/admin-dashboard");
} 
     
      

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md m-5"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
          Admin Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-6 p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLoginForm