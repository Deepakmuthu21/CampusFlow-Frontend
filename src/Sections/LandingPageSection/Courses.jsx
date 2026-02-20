import React from 'react'

function Courses() {
   const courses = [
   {
    title: "Computer Science",
    desc: "Learn programming, AI, and software development.",
  },
  {
    title: "Information Technology",
    desc: "Master networking and cloud computing.",
  },
  {
    title: "Electronics & Communication",
    desc: "Explore embedded systems and communication tech.",
  },
  {
    title: "Mechanical Engineering",
    desc: "Study robotics and manufacturing systems.",
  },
  {
    title: "Fashion Design",
    desc: "Develop creative fashion and styling skills.",
  },
  {
    title: "Business Administration",
    desc: "Learn management, marketing, and finance.",
  },
  {
    title: "And Many More...",
    desc: "We offer additional specialized and emerging technology courses.",
  },
  ];

  return (
    <section id="courses" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-indigo-600">
            Our Courses
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of professional and technical courses designed 
            to prepare students for the future.
          </p>
        </div>

        {/* Course Cards */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-700">
                {course.title}
              </h3>
              <p className="mt-4 text-gray-600">
                {course.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 text-lg">
            We have many more courses tailored to meet industry demands.
          </p>
          <p className="mt-2 text-gray-600">
            If you have any doubts, feel free to contact us.
          </p>

          <a
            href="#contact"
            className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  )
}

export default Courses