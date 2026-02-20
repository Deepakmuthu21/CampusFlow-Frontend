import React, { Children } from 'react'
import StudentNav from './StudentNav'
import Footer from './Footer'

function StudentLayout({children}) {
  return (
    <>
    <StudentNav/>
    <main>{children}</main>
    <Footer/>
</>

  )
}

export default StudentLayout