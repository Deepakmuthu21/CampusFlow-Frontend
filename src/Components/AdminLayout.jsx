import React from 'react'
import AdminNav from './AdminNav'
import Footer from './Footer'

function AdminLayout({children}) {
  return (
   <>
   <AdminNav/>
    <main>{children}</main>
    <Footer/>
   </>
    
  )
}

export default AdminLayout