import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function StudentsTable() {
   const [students, setStudents] = useState([]);
   const[status,setStatus]=useState(null)
    const getToken = () => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    return authData?.token;
  };


  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
    
      const res = await axios.get(`https://campus-folw-backend.onrender.com/api/user/get-students`,{
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },

      })
      
      
      setStudents(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
    const res =  await axios.put(`https://campus-folw-backend.onrender.com/api/user/update/${id}`,{status: newStatus}, {
          headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      toast.success(res.data.msg);
      fetchStudents();
                  

    } catch (error) {
             toast.error(`${error.res?.data?.message}❗`);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?"))
      return;

    try {
      await axios.delete(`https://campus-folw-backend.onrender.com/api/user/delete/${id}`,{
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },

      });
            toast.success(res.data.msg);

      fetchStudents();
    } catch (error) {
             toast.error(`${error.res?.data?.message}❗`);
    }
  };

  return (
    <div id='student' className="p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Students</h2>

      <div className="border rounded overflow-x-auto">
        <div className="max-h-[70vh] overflow-y-auto">
          <table className="min-w-[1000px] w-full text-left">
            <thead className="bg-gray-200 sticky top-0">
              <tr>
                <th className="border p-2">Register No</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Course</th>
                <th className="border p-2">Year</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student._id} className="hover:bg-gray-50">

                  <td className="border p-2">{student.registerNo}</td>
                  <td className="border p-2">{student.name}</td>
                  <td className="border p-2">{student.email}</td>
                  <td className="border p-2">{student.course}</td>
                  <td className="border p-2">{student.year}</td>
                  <td className="border p-2">{student.phone}</td>

                  {/* Status Dropdown */}
                  <td className="border p-2">
                    <select
                      value={student.status}
                      onChange={(e) =>
                        handleStatusChange(student._id, e.target.value)
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
                      onClick={() => handleDelete(student._id)}
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
  );
}

export default StudentsTable