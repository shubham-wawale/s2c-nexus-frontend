import React, { useState } from 'react'
import axios from 'axios';

export default function AcademicDetails() {

  const [academicData, setAcademicData] = useState({
    tenthPassingYear: "",
    tenthPassingMarks: "",
    seniorSecondary: "",
    twelfthPassingYear: "",
    twelfthPassingMarks: "",
    diplomaPassingYear: "",
    diplomaPassingMarks: "",
    department: "",
    degreeName: "",
    degreeStartDate: "",
    degreeCompletionDate: "",
    activeBacklogs: "",
    previousBacklogs: "",
    gapYears: ""
  })

  const [semester, setSemester] = useState("");
  const [gpa, SetGpa] = useState("")
  const [marksheets, setMarksheets] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setAcademicData(prevValue => (
      {
        ...prevValue,
        [name]: value
      }
    ))
  }

  const handleRadioButtonChange = (e) => {
    const { name, value } = e.target
    setAcademicData(prevValue => (
      {
        ...prevValue,
        seniorSecondary: name
      }
    ))
  }

  const handleFileChange = (e) => {
    const { files } = e.target
    setMarksheets(prevValue => {
      return [
        ...prevValue,
        {
          semester: semester,
          gpa: gpa,
          marksheet: files[0]
        }
      ]
    })
  }

  const handleDropdown = (e) => {
    const { value } = e.target;
    setSemester(value);
  }

  const handleGpa = (e) => {
    const { value } = e.target;
    SetGpa(value);
  }

  const handleAcademicDetailSubmit = (e) => {
    e.preventDefault();
     var payload = {
      tenth: {
        marks: academicData.tenthPassingMarks,
        passingYear: academicData.tenthPassingYear
      },
      twelfth: {
        marks: academicData.twelfthPassingMarks,
        passingYear: academicData.twelfthPassingYear
      },
      diploma: {
        marks: academicData.diplomaPassingMarks,
        passingYear: academicData.diplomaPassingYear
      },
      department: academicData.department,
      degree: {
        name: academicData.degreeName,
        startDate: academicData.degreeStartDate,
        completionDate: academicData.degreeCompletionDate,
        semester: marksheets
      },
      activeBacklogs: academicData.activeBacklogs,
      previousBacklogs: academicData.previousBacklogs,
      gapYear: academicData.gapYears
    }
    axios.post('http://localhost:8080/student/updateDetails', {
      studentId: "",
      key: "academicDetails",
      newData: payload
    })
    .then(function (response) {
      if(response.data.success) {
        alert(response.data.message)
      } else {
        alert(response.data.message)
      }
    })
    .catch(function (error) {
      alert("BACKEND SERVICE UNAVAILABLE");
    })

  }

  return (
    <>
      <div className='font-open-sans overflow-scroll scrollbar-hide h-105 mx-4 shadow-md border-b mb-5 rounded-md'>
        <div className="left-0 my-2 uppercase focus:outline-none border-none 
            bg-[#C2D3E4] border font-bold text-[#1F2937] text-xs  py-1 px-2 ">
          <span>10th details:</span></div>
        <div className='mx-5 mt-2 grid grid-cols-2 gap-4'>
          <div class="mb-3">
            <label for="tenthPassingYear" class="block  text-sm font-bold text-[#1F2937]">Passing Year</label>
            <input name='tenthPassingYear' onChange={handleInputChange} type="text" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
          </div>
          <div class="mb-3">
            <label for="tenthPassingMarks" class="block  text-sm font-bold text-[#1F2937]">Percentage/Grades</label>
            <input name='tenthPassingMarks' onChange={handleInputChange} type="text" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
          </div>
        </div>
        <div className="left-0 my-2 uppercase focus:outline-none border-none 
            bg-[#C2D3E4] border font-bold text-[#1F2937] text-xs  py-1 px-2 ">
          <span>12th/Diploma details:</span></div>
        <div className='mx-5 mt-2 grid grid-cols-3 gap-4'>
          <div class="mb-3 cols-span-1">
            <div className='grid grid-cols-2 gap-4'>
              <div class=" cols-span-1">
                <input checked={academicData.seniorSecondary == "twelfth"} name="twelfth" type="radio" onChange={handleRadioButtonChange} />
                <label for="twelfth" class="ml-3 text-sm font-bold text-[#1F2937]">Twelfth</label>
              </div>
              <div class=" cols-span-1">
                <input checked={academicData.seniorSecondary == "diploma"} name="diploma" type="radio" onChange={handleRadioButtonChange} />
                <label for="diploma" class="ml-3 text-sm font-bold text-[#1F2937]">Diploma</label>
              </div>
            </div>
          </div>
          <div class="mb-3 cols-span-1">
            <label for="twelfthPassingYear" class="block text-sm font-bold text-[#1F2937]">Passing Year</label>
            <input name='twelfthPassingYear' onChange={handleInputChange} type="text" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
          </div>
          <div class="mb-3 cols-span-1">
            <label for="twelfthPassingMarks" class="block  text-sm font-bold text-[#1F2937]">Percentage/Grades</label>
            <input name='twelfthPassingMarks' onChange={handleInputChange} type="text" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
          </div>
        </div>
        <div className="left-0 my-2 uppercase focus:outline-none border-none 
            bg-[#C2D3E4] border font-bold text-[#1F2937] text-xs  py-1 px-2 ">
          <span>Degree details:</span>
        </div>
        <div className='mx-5 mt-2 grid grid-cols-3 gap-4'>
          <div class="mb-3 cols-span-1">
            <label for="degreeName" class="block text-sm font-bold text-[#1F2937]">Degree Name</label>
            <input name='degreeName' onChange={handleInputChange} type="text" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
          </div>
          <div class="mb-3 cols-span-1">
            <label for="degreeStartDate" class="block text-sm font-bold text-[#1F2937]">Degree Start Date</label>
            <input name='degreeStartDate' onChange={handleInputChange} datepicker type="date" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
          </div>
          <div class="mb-3 cols-span-1">
            <label for="degreeCompletionDate" class="block text-sm font-bold text-[#1F2937]">Degree End Date</label>
            <input name='degreeCompletionDate' onChange={handleInputChange} datepicker type="date" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
          </div>
        </div>
        <div className='mx-5 mt-2 grid grid-cols-3 gap-4'>
          <div class=" cols-span-1">
            <label for="semester" class="block  text-sm font-bold text-[#1F2937]">Semester</label>
            <select onChange={handleDropdown} name="semester" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg">
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
              <option value="7">Semester 7</option>
              <option value="8">Semester 8</option>
            </select>
          </div>
          <div class=" cols-span-1">
            <label for="semesterGpa" class="block  text-sm font-bold text-[#1F2937]">Semester GPA</label>
            <input name='semesterGpa' onChange={handleGpa} type="text" class=" cursor-pointer shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
          </div>
          <div class=" cols-span-1">
            <label for="marksheet" class="block  text-sm font-bold text-[#1F2937]">Upload Marksheet</label>
            <input name='marksheet' onChange={handleFileChange} type="file" class=" cursor-pointer shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
          </div>
          <div class="mb-3 cols-span-1">
            <label for="activeBacklogs" class="block text-sm font-bold text-[#1F2937]">Active Backlogs</label>
            <input name='activeBacklogs' onChange={handleInputChange} type="text" class=" cursor-pointer shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
          </div>
          <div class="mb-3 cols-span-1">
            <label for="previousBacklogs" class="block  text-sm font-bold text-[#1F2937]">Previous Backlogs</label>
            <input name='previousBacklogs' onChange={handleInputChange} type="text" class=" cursor-pointer shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
          </div>
          <div class="mb-3 cols-span-1">
            <label for="gapYears" class="block  text-sm font-bold text-[#1F2937]">Gap Years</label>
            <input name='gapYears' onChange={handleInputChange} type="text" class=" cursor-pointer shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
          </div>
        </div>
      </div>
      <button className="float-right mr-4 ml-auto focus:outline-none bg-[#1F2937] px-1 py-1 rounded-md font-bold text-lg text-[#d1d5db] w-28 border">Save</button>
    </>
  )
}
