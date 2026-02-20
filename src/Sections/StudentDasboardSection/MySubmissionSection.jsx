import React, { useEffect, useState } from 'react'
import axios from 'axios';

function MySubmissionSection() {
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
      const res = await axios.get("https://campus-folw-backend.onrender.com/api/submit/get-student-submission",{
         headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setSubmissions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <div id='mySubmission' className="p-4 sm:p-6">
  <h2 className="text-xl sm:text-2xl font-bold mb-6">
    My Submissions
  </h2>

  {/* Outer scroll wrapper */}
  <div className="border border-gray-300 rounded overflow-x-auto">

    {/* Fixed height container */}
    <div className="max-h-225 overflow-y-auto">

      <table className="min-w-225 w-full text-left">
        <thead className="bg-gray-200 sticky top-0 z-10">
          <tr>
            <th className="border p-2 text-sm sm:text-base">Assignment</th>
            <th className="border p-2 text-sm sm:text-base">Submission Link</th>
            <th className="border p-2 text-sm sm:text-base">Status</th>
            <th className="border p-2 text-sm sm:text-base">Grade</th>
            <th className="border p-2 text-sm sm:text-base">Remarks</th>
            <th className="border p-2 text-sm sm:text-base">Submitted At</th>
          </tr>
        </thead>

        <tbody>
          {submissions.map((sub) => (
            <tr key={sub._id} className="hover:bg-gray-50">
              
              <td className="border p-2 text-sm">
                {sub.title || sub.assignment}
              </td>

              <td className="border p-2 text-sm">
                <a
                  href={sub.submissionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline break-all"
                >
                  View Submission
                </a>
              </td>

              <td className="border p-2 text-sm">
                <span
                  className={`font-semibold ${
                    sub.status === "reviewed"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {sub.status}
                </span>
              </td>

              <td className="border p-2 text-sm">
                {sub.grade ?? "Not Graded"}
              </td>

              <td className="border p-2 text-sm wrap-break-word max-w-50">
                {sub.remarks || "-"}
              </td>

              <td className="border p-2 text-sm">
                {new Date(sub.createdAt).toLocaleDateString()}
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

export default MySubmissionSection