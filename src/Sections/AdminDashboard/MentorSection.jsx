import React, { useEffect, useState } from "react";
import axios from "axios";
function MentorSection() {
  const [mentors, setMentors] = useState([]);
  const [status, setStatus] = useState(null);

  const getToken = () => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    return authData?.token;
  };
  useEffect(() => {
    fetchMentors();
  }, []);

  const fetchMentors = async () => {
    try {
      const res = await axios.get(
        "https://campus-folw-backend.onrender.com/api/user/get-mentors",
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      );
      setMentors(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(
        `https://campus-folw-backend.onrender.com/api/user/update/${id}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      );
      fetchMentors();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this mentor?")) return;

    try {
      await axios.delete(`https://campus-folw-backend.onrender.com/api/user/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      fetchMentors();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="mentor" className="p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Mentors</h2>

      <div className="border rounded overflow-hidden">
        <div className="overflow-x-auto">
          <div className="max-h-[70vh] overflow-y-auto">
            <table className="min-w-[900px] w-full text-left">
              <thead className="bg-gray-200 sticky top-0 z-10">
                <tr>
                  <th className="border p-2">Register No</th>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Department</th>
                  <th className="border p-2">Status</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>

              <tbody>
                {mentors.map((mentor) => (
                  <tr key={mentor._id} className="hover:bg-gray-50">
                    <td className="border p-2">{mentor.registerNo}</td>

                    <td className="border p-2">{mentor.name}</td>
                    <td className="border p-2">{mentor.email}</td>
                    <td className="border p-2">{mentor.course}</td>

                    {/* Status Dropdown */}
                    <td className="border p-2">
                      <select
                        value={mentor.status}
                        onChange={(e) =>
                          handleStatusChange(mentor._id, e.target.value)
                        }
                        className="border rounded "
                      >
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="blocked">Block</option>
                      </select>
                    </td>

                    {/* Delete Button */}
                    <td className="border p-2">
                      <button
                        onClick={() => handleDelete(mentor._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorSection;
