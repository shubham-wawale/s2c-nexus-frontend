import React, { useState } from 'react'
import Navbar from '../company/dashboard/navBar'
import StudentSideNav from './StudentSideNav'
import StudentDashboard from './StudentDashboard'
import StudentProfile from './StudentProfile'

export default function StudentHome() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const handleTabChange = (data) => {
    console.log(data)
    setActiveTab(data)
  }
  return (
    <>
    <div className='overflow-hidden'>
      <Navbar />
      <StudentSideNav changeTab={handleTabChange} />
      {activeTab === "dashboard" && <StudentDashboard />}
      {activeTab === "appliedDrive" && <StudentDashboard />}
      {activeTab === "profile" && <StudentProfile />}
      {activeTab === "offers" && <StudentDashboard />}
      {activeTab === "interview" && <StudentDashboard />}
    </div>
    </>
  )
}
