import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthProvider";

function UserLoginForm() {
  const navigate = useNavigate();
  const { login,userId } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    registerNo: "",
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

     if (response.data.userRole === "student") {
  navigate("/student-dashboard");
} else if (response.data.userRole === "mentor") {
  navigate("/mentor-dashboard");
} 
     
      

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md m-5"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          User Login
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        <input
          type="text"
          name="registerNo"
          placeholder="Enter Register Number"
          value={formData.registerNo}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-6 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default UserLoginForm;
