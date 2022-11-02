import React from 'react'
import StudentTable from './table'
import Navbar from './navBar'
import SideNav from './sideNav'

export default function Drive() {
  return (
    <>
        <Navbar />
        <SideNav margin="2rem" />
        <StudentTable />
    </>
  )
}
