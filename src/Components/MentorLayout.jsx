import React from 'react'
import MentorNav from './MentorNav'
import Footer from './Footer'

function MentorLayout({children}) {
  return (
    <>
    <MentorNav/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default MentorLayout