import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

function CreateTask() {
   const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    task: "",
    dueDate: "",
  });

   const getToken = () => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    return authData?.token;
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("https://campus-folw-backend.onrender.com/api/task/get-assignment-mentor",{
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },

      });
      setTasks(res.data);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     const res=  await axios.post("https://campus-folw-backend.onrender.com/api/task/create-assignment",formData,{
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },

      });
      toast.success(res.data.msg);
      setFormData({ title: "", task: "", dueDate: "" });
      fetchTasks();
    } catch (error) {
             toast.error(`${error.res?.data?.message}❗`);
      
    }
  };

  const handleDelete = async(id)=>{
    try {
     const res= await axios.delete(`https://campus-folw-backend.onrender.com/api/task/delete-assignment-mentor/${id}`,{
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },

      });
      toast.success(res.data.msg);
     
      fetchTasks();
      
    } catch (error) {
             toast.error(`${error.res?.data?.message}❗`);
    }
  }

  return (
    <div className="p-4 sm:p-6 md:mt-10">
    

      {/* 🔹 Create Task Form */}
      <div id='create' className="bg-white shadow rounded p-4 mb-8 border">
        <h3 className="text-lg font-semibold mb-4">Create New Task</h3>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="task"
            placeholder="Task URL"
            value={formData.task}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />

          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
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

      {/* 🔹 Task Table */}
    <div className="border rounded overflow-x-auto">
  <div className="max-h-[70vh] overflow-y-auto">
    <table className="min-w-[900px] w-full text-left">
      <thead className="bg-gray-200 sticky top-0">
        <tr>
          <th className="border p-2">Title</th>
          <th className="border p-2">Task Link</th>
          <th className="border p-2">Due Date</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task) => (
          <tr key={task._id} className="hover:bg-gray-50">
            <td className="border p-2">{task.title}</td>

            <td className="border p-2">
              <a
                href={task.task}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-all"
              >
                View Task
              </a>
            </td>

            <td className="border p-2">
              {new Date(task.dueDate).toLocaleDateString()}
            </td>

            {/* 🔴 Delete Button */}
            <td className="border p-2">
              <button
                onClick={() => handleDelete(task._id)}
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
  )
}

export default CreateTask