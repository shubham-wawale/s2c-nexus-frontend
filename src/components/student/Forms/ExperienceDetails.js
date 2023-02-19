import React from 'react'

export default function ExperienceDetails() {
  return (
    <>
    <div className='font-open-sans overflow-scroll scrollbar-hide h-105 mx-4 shadow-md border-b mb-5 rounded-md'>
    <div className="left-0 my-2 uppercase focus:outline-none border-none 
        bg-[#C2D3E4] border font-bold text-[#1F2937] text-xs  py-1 px-2 ">
      <span>Enter Your Professional Experience</span></div>
    <div className='mx-5 mt-2 grid grid-cols-2 gap-4'>
      <div class="mb-0">
        <label for="tenthPassingYear" class="block  text-sm font-bold text-[#1F2937]">Company Name</label>
        <input name='tenthPassingYear' type="text" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
      p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
      </div>
      <div class="mb-0">
        <label for="tenthPassingYear" class="block  text-sm font-bold text-[#1F2937]">Job Role</label>
        <input name='tenthPassingYear' type="text" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
      p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
      </div>
  
      <div class=" cols-span-1">
            <label for="semester" class="block  text-sm font-bold text-[#1F2937]">Job Type</label>
            <select name="semester" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg">
              <option value="1">Internship</option>
              <option value="2">Full Time</option>
            </select>
          </div>
          <div class=" cols-span-1">
            <label for="semesterGpa" class="block  text-sm font-bold text-[#1F2937]">Job Location</label>
            <input name='semesterGpa' type="text" class=" cursor-pointer shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
          </div>
          
          
      <div class="mb-3 col-span-2">
          <label for="address" class="block  text-sm font-bold text-[#1F2937]">Your Role Details</label>
          <textarea name='address' type="text" id="address" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-2.5 w-full bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
        </div>
    </div>
    <div className='mx-5 mt-0 grid grid-cols-3 gap-4'>
    <div class="mb-3 cols-span-1">
            <label for="degreeStartDate" class="block text-sm font-bold text-[#1F2937]">Start Date</label>
            <input name='degreeStartDate' datepicker type="date" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
          </div>
          <div class="mb-3 cols-span-1">
            <label for="degreeCompletionDate" class="block text-sm font-bold text-[#1F2937]">End Date</label>
            <input name='degreeCompletionDate' datepicker type="date" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
          </div>
          <div class="mb-3 cols-span-1">
            <label for="degreeName" class="block text-sm font-bold text-[#1F2937]">Experience in Months</label>
            <input name='degreeName' type="text" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
          </div>
          
        </div>
        <div class="mb-3 cols-span-1">
            <button className="mt-4 w-1/5 focus:outline-none bg-[#1F2937] px-1 py-1 rounded-md font-bold text-lg text-[#d1d5db] border">Add Experience</button>
          </div>
    </div>
    
    
  <button className="float-right mr-4 ml-auto focus:outline-none bg-[#1F2937] px-1 py-1 rounded-md font-bold text-lg text-[#d1d5db] w-28 border">Save</button>
</>
  )
}
