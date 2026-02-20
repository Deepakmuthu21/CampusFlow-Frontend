import React from 'react'

function AboutusSection() {
  return (
     <>

      {/* Hero Section */}
      <section id='about' className="bg-linear-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Our College Portal
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            A smart platform designed to manage students, mentors, assignments,
            and academic workflow efficiently.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold text-indigo-600">
            🎯 Our Mission
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our mission is to simplify academic management by providing a
            seamless system where students, mentors, and administrators can
            collaborate efficiently.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-purple-600">
            🚀 Our Vision
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We aim to create a digital-first campus environment where academic
            processes are transparent, organized, and accessible anytime.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Key Features
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600">
                Student Management
              </h3>
              <p className="mt-4 text-gray-600">
                Students can register, submit assignments, and track their
                academic progress easily.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-600">
                Mentor Dashboard
              </h3>
              <p className="mt-4 text-gray-600">
                Mentors can create assignments, review submissions, and provide
                grades & feedback.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-pink-600">
                Admin Control
              </h3>
              <p className="mt-4 text-gray-600">
                Admins manage departments, approve users, and oversee the entire
                academic workflow.
              </p>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default AboutusSection