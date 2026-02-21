import React,{ useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function CreateDeptSection() {
  const [departments, setDepartments] = useState([]);
  const [name, setName] = useState("");
  const getToken = () => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    return authData?.token;
  };


  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const res = await axios.get("https://campus-folw-backend.onrender.com/api/department/get",{
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },

      });
      setDepartments(res.data);
    } catch (error) {
      console.log(error);
    }
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://campus-folw-backend.onrender.com/api/department/register", {name:name},{
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },

      });
      alert("Department Created Successfully!");
      setName("");
      fetchDepartments();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this department?")) return;

    try {
      const res = await axios.delete(`https://campus-folw-backend.onrender.com/api/department/delete/${id}`,{
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },

      });
      toast.success(res.data.message)
      fetchDepartments();
    } catch (error) {
       toast.error(`${error.res?.data?.message}❗`);
    }
  };

  return (
    <div id="department" className="p-4 sm:p-6">

      <h2 className="text-2xl font-bold mb-6">
        Admin Dashboard
      </h2>

      {/* 🔹 Create Department Form */}
      <div className="bg-white shadow rounded p-4 mb-8 border">
        <h3 className="text-lg font-semibold mb-4">
          Create Department
        </h3>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Department Title"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            required
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
          >
            Create
          </button>
        </form>
      </div>

      {/* 🔹 Department Table */}
      <div className="border rounded overflow-hidden">
        <div className="overflow-x-auto">
          <div className="max-h-[70vh] overflow-y-auto">

            <table className="min-w-[800px] w-full text-left">
              <thead className="bg-gray-200 sticky top-0 z-10">
                <tr>
                  <th className="border p-2">Title</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>

              <tbody>
                {departments.map((dept) => (
                  <tr key={dept._id} className="hover:bg-gray-50">
                    <td className="border p-2">{dept.name}</td>
                    
                    <td className="border p-2">
                      <button
                        onClick={() => handleDelete(dept._id)}
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
  )
}

export default CreateDeptSection

