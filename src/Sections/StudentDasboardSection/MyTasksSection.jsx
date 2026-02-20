import React, { useEffect, useState } from "react";
import axios from "axios";

function MyTasksSection() {
  const [tasks, setTasks] = useState([]);
  const [submissionUrls, setSubmissionUrls] = useState({});
  const getToken = () => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    return authData?.token;
  };
  const user = JSON.parse(localStorage.getItem("auth"));
  const userId = user.userId;
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(
        "https://campus-folw-backend.onrender.com/api/task/get-assignment-student",
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      );
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (taskId, value) => {
    setSubmissionUrls((prev) => ({
      ...prev,
      [taskId]: value,
    }));
  };
  const handleSubmit = async (taskId) => {
    const url = submissionUrls[taskId];

    if (!url) {
      alert("Please enter submission URL");
      return;
    }

    try {
      await axios.post(
        `https://campus-folw-backend.onrender.com/api/submit/submit-assignment/${taskId}`,
        {
          submissionLink: url,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      );

      alert("Task submitted successfully!");

      // Clear only this task input
      setSubmissionUrls((prev) => ({
        ...prev,
        [taskId]: "",
      }));

      // Mark this task as submitted
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === taskId ? { ...task, isSubmitted: true } : task,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="myTask" className="p-4 sm:p-6 border-blue-100">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Tasks</h2>
      {/* Scroll Container */}
      <div className="overflow-x-auto border border-gray-300 rounded">
        {/* Fixed Height Wrapper */}
        <div className="max-h-125 overflow-y-auto">
          <table className="min-w-200 w-full text-left">
            <thead className="bg-gray-200 sticky top-0 z-10">
              <tr>
                <th className="border p-2 text-sm sm:text-base">Title</th>
                <th className="border p-2 text-sm sm:text-base">Task Link</th>
                <th className="border p-2 text-sm sm:text-base">Due Date</th>
                <th className="border p-2 text-sm sm:text-base">
                  Your Submission
                </th>
                <th className="border p-2 text-sm sm:text-base">Action</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task) => (
                <tr key={task._id} className="hover:bg-gray-50">
                  <td className="border p-2 text-sm">{task.title}</td>

                  <td className="border p-2 text-sm">
                    <a
                      href={task.task}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      View Task
                    </a>
                  </td>

                  <td className="border p-2 text-sm">
                    {new Date(task.dueDate).toLocaleDateString()}
                  </td>

                  <td className="border p-2 text-sm">
                    <input
                      type="text"
                      placeholder="Paste your GitHub / Live URL"
                      value={submissionUrls[task._id] || ""}
                      onChange={(e) => handleChange(task._id, e.target.value)}
                      className="border p-1 w-full rounded text-sm"
                    />
                  </td>

                  <td className="border p-2 text-sm">
                    <button
                      disabled={task.isSubmitted}
                      onClick={() => handleSubmit(task._id)}
                      className={`px-3 py-1 rounded text-sm ${
                        task.isSubmitted
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-500 hover:bg-blue-600 text-white"
                      }`}
                    >
                      {task.isSubmitted ? "Submitted" : "Submit"}
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

export default MyTasksSection;
