import React,{useState} from 'react'

export default function AcademicDetails() {

  const [academicData, setAcademicData] = useState({
    tenth: {
      marks: "",
      passingYear: ""
    },
    twelfth: {
      marks: "",
      passingYear: ""
    },
    diploma: {
      marks: "",
      passingYear: ""
    },
    department: "",
    degree: {
      name: "",
      startDate: "",
      completionDate: "",
      semesterGPA: [],
      marksheets: []
    },
    activeBacklogs: "",
    previousBacklogs: "",
    gapYear: ""
  })

  const handleInputChange = (e)=> {
    const {name, value} = e.target
    setAcademicData(prevValue => (
      {
        ...prevValue,
        [name]:value
      }
    ))
  }

  return (
    <div className='font-open-sans overflow-scroll scrollbar-hide h-104 mx-4 shadow-md border-b mb-5 rounded-md'>
      <div className="left-0 my-2 uppercase focus:outline-none border-none 
            bg-[#C2D3E4] border font-bold text-[#1F2937] text-xs  py-1 px-2 ">
        <span>10th details:</span></div>
      <div className='mx-5 mt-6 grid grid-cols-2 gap-4'>
        <div class="mb-3">
          <label for="tenthPassingYear" class="block mb-2 text-sm font-bold text-[#1F2937]">Passing Year</label>
          <input name='tenthPassingYear' onChange={handleInputChange} value={academicData.tenth.passingYear} type="text" id="tenthPassingYear" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
        </div>
        <div class="mb-3">
          <label for="tenthPassingMarks" class="block mb-2 text-sm font-bold text-[#1F2937]">Percentage/Grades</label>
          <input name='tenthPassingMarks' onChange={handleInputChange} value={academicData.tenth.marks}  type="text" id="tenthPassingMarks" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
        </div>
      </div>
      <div className="left-0 my-2 uppercase focus:outline-none border-none 
            bg-[#C2D3E4] border font-bold text-[#1F2937] text-xs  py-1 px-2 ">
        <span>12th/Diploma details:</span></div>
        <div className='mx-5 mt-6 grid grid-cols-2 gap-4'>
        <div class="mb-3">
          <label for="twelfthPassingYear" class="block mb-2 text-sm font-bold text-[#1F2937]">Passing Year</label>
          <input name='twelfthPassingYear' onChange={handleInputChange} value={academicData.tenth.passingYear} type="text" id="tenthPassingYear" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
        </div>
        <div class="mb-3">
          <label for="twelfthPassingMarks" class="block mb-2 text-sm font-bold text-[#1F2937]">Percentage/Grades</label>
          <input name='twelfthPassingMarks' onChange={handleInputChange} value={academicData.tenth.marks}  type="text" id="tenthPassingMarks" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
        </div>
      </div>
      <div className="left-0 my-2 uppercase focus:outline-none border-none 
            bg-[#C2D3E4] border font-bold text-[#1F2937] text-xs  py-1 px-2 ">
        <span>Degree details:</span></div>
    </div>
  )
}
