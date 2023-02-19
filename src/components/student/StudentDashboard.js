import React from 'react'
import StuDriveCard from './StuDriveCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function StudentDashboard() {
  const [driveData, setDriveData] = useState([])
  const [studentData, setStudentData] = useState({})
  const [eligibileDrives, setEligibleDrives] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/student/drives')
      .then(function (response) {
        if (response.data.success) {
          setDriveData(response.data.drives)
          console.log(response.data.drives)
        } else {
          console.log(response.data.message)
        }
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      })
    axios.get('http://localhost:8080/student/getDetails',{
      params: {
        studentId: "638d14885c37719538d6c86d"
      }
    }).then(function (response) {
        if (response.data.success) {
          setDriveData(response.data.studentData)
          console.log(response.data.studentData)
        } else {
          console.log(response.data.message)
        }
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      })
    var filteredDrives = driveData.filter(drive => (
      studentData.academicDetails.tenth.marks >= drive.tenthPercentage &&
      studentData.academicDetails.twelfth.marks >= drive.twelfthPercentage &&
      studentData.academicDetails.degreeCgpa >= drive.cgpa &&
      studentData.academicDetails.activeBacklogs <= drive.numberOfLiveKT &&
      studentData.academicDetails.previousBacklogs <= drive.numberOfDeadKT &&
      studentData.academicDetails.academicGap <= drive.numberOfAcademicGaps &&
      studentData.academicDetails.degreeGap <= drive.numberOfDegreeGaps
    ))
    setEligibleDrives(filteredDrives)
  }, []);
  return (
    <>
      <div className='font-open-sans'>
        <div className="left-0 w-5/5 shadow-xl  mx-2 my-10 focus:outline-none border-none 
            bg-[#C2D3E4] border font-bold text-[#1F2937] text-lg  py-2 px-4 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 mb-0.5 inline-block">
            <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
          </svg>
          <span>Eligible Drives</span></div>
      </div>


     {eligibileDrives.map(drive=> (
      <StuDriveCard drivedata={drive} studentData={studentData}  />
     ))}

    </>
  )
}
