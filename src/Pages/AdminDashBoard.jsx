import React from 'react'
import AdminLayout from '../Components/AdminLayout'
import CreateDeptSection from '../Sections/AdminDashboard/CreateDeptSection'
import MentorSection from '../Sections/AdminDashboard/MentorSection'


function AdminDashBoard() {
  return (
   
    <>
    <AdminLayout>
      <CreateDeptSection/>
      <MentorSection/>
    </AdminLayout>
  
    </>
  )
}

export default AdminDashBoard