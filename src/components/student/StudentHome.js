import React, { useEffect, useState } from 'react'
import Navbar from '../company/dashboard/navBar'
import StudentSideNav from './StudentSideNav'
import StudentDashboard from './StudentDashboard'
import Resume from './Resume'
import StudentProfile from './StudentProfile'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function StudentHome() {
  const navigate = useNavigate()
  var studentId = ""
  studentId = useSelector(state=> state.identity.studentId)
  useEffect(()=> {
    if(!studentId){
      alert("PLEASE LOGIN")
      navigate("/studentLogin")
    }
  },[])
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
      {activeTab === "resume" && <Resume />}
      {activeTab === "appliedDrive" && <StudentDashboard />}
      {activeTab === "profile" && <StudentProfile />}
      {activeTab === "offers" && <StudentDashboard />}
      {activeTab === "interview" && <StudentDashboard />}
    </div>
    </>
  )
}
