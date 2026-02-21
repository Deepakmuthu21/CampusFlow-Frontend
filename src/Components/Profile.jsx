import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";

function Profile() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const token = localStorage.getItem("token");
  const getToken = () => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    return authData?.token;
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",

    phone: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        "https://campus-folw-backend.onrender.com/api/user/mentor-dashboard",
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      );

      setUser(res.data.result);

      setFormData({
        name: res.data.result.name,
        email: res.data.result.email,
        password: "",
        phone: res.data.result.phone,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
     const res= await axios.put(
        `https://campus-folw-backend.onrender.com/api/user/update/${mentor._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      );
                  toast.success(res.data.msg);
      

      setEditMode(false);
      fetchProfile();
    } catch (error) {
             toast.error(`${error.res?.data?.message}❗`);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-6">Mentor Profile</h2>

      <div className="bg-white shadow rounded p-6 border max-w-2xl">
        {!editMode ? (
          <>
            <p className="mb-3">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="mb-3">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="mb-3">
              <strong>Phone:</strong> {user.phone}
            </p>
            {user.registerNo && (
              <p className="mb-3">
                <strong>Register No:</strong> {user.registerNo}
              </p>
            )}

            {user.course && (
              <p className="mb-3">
                <strong>Course:</strong> {user.course}
              </p>
            )}

            <p className="mb-3">
              <strong>Year:</strong> {user.year}
            </p>
            <p className="mb-3">
              <strong>Status:</strong> {user.status}
            </p>

            <button
              onClick={() => setEditMode(true)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Edit Profile
            </button>
          </>
        ) : (
          <form onSubmit={handleUpdate} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              placeholder="Name"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              placeholder="Email"
              required
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              placeholder="Phone"
              required
            />

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Save
              </button>

              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Profile;
