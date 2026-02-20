import React from 'react'
import StudentLayout from "../Components/StudentLayout"
import MyTasksSection from '../Sections/StudentDasboardSection/MyTasksSection'
import MySubmissionSection from '../Sections/StudentDasboardSection/MySubmissionSection'

function StudentDashBoard() {
  return (
    <>
    <StudentLayout>
      <MyTasksSection/>
      <MySubmissionSection/>
    </StudentLayout>
    </>
  )
}

export default StudentDashBoard