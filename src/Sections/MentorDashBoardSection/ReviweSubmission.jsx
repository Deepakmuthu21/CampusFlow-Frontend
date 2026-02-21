import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

function ReviewSubmission() {
  const [submissions, setSubmissions] = useState([]);

  const getToken = () => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    return authData?.token;
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const res = await axios.get(
        "https://campus-folw-backend.onrender.com/api/submit/get-mentor-submission",
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      setSubmissions(res.data);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  // Handle input change
  const handleChange = (id, field, value) => {
    setSubmissions((prev) =>
      prev.map((sub) =>
        sub._id === id ? { ...sub, [field]: value } : sub
      )
    );
  };

  // Handle update (only remarks & grade)
  const handleUpdate = async (id, remarks, grade) => {
    try {
     const res= await axios.put(
        `https://campus-folw-backend.onrender.com/api/submit/evaluate-assignment/${id}`,
        {
          remarks,
          grade,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );

            toast.success(res.data.msg);

        fetchSubmissions();
        
    } catch (error) {
             toast.error(`${error.res?.data?.message}❗`);
    }
  };

  return (
    <div id="reviwe" className="p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-6">
        Review Submissions
      </h2>

      <div className="border rounded overflow-x-auto">
        <div className="max-h-[70vh] overflow-y-auto">
          <table className="min-w-[900px] w-full text-left">
            <thead className="bg-gray-200 sticky top-0">
              <tr>
                <th className="border p-2">Task Name</th>
                <th className="border p-2">Submission Link</th>
                <th className="border p-2">Remarks</th>
                <th className="border p-2">Grade</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {submissions.map((sub) => (
                <tr key={sub._id} className="hover:bg-gray-50">
                  
                  {/* Assignment Title */}
                  <td className="border p-2">
                    {sub.title}
                  </td>

                  {/* Submission Link */}
                  <td className="border p-2">
                    <a
                      href={sub.submissionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline break-all"
                    >
                      View
                    </a>
                  </td>

                  {/* Remarks Input */}
                  <td className="border p-2">
                    <input
                      type="text"
                      value={sub.remarks ?? ""}
                      onChange={(e) =>
                        handleChange(sub._id, "remarks", e.target.value)
                      }
                      className="border p-1 rounded w-40"
                    />
                  </td>

                  {/* Grade Input */}
                  <td className="border p-2">
                    <input
                      type="number"
                      value={sub.grade ?? ""}
                      onChange={(e) =>
                        handleChange(sub._id, "grade", e.target.value)
                      }
                      className="border p-1 rounded w-20"
                    />
                  </td>

                  {/* Save Button */}
                  <td className="border p-2">
                    <button
                      onClick={() =>
                        handleUpdate(sub._id, sub.remarks, sub.grade)
                      }
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >
                      Save
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

export default ReviewSubmission;
