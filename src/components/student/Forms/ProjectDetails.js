import React from 'react'


export default function ProjectDetails() {
  return (
    <>
    <div className='font-open-sans overflow-scroll scrollbar-hide h-105 mx-4 shadow-md border-b mb-5 rounded-md'>
    <div className="left-0 my-2 uppercase focus:outline-none border-none 
        bg-[#C2D3E4] border font-bold text-[#1F2937] text-xs  py-1 px-2 ">
      <span>Enter Your Project Details</span></div>
    <div className='mx-5 mt-2 grid grid-cols-2 gap-4'>
      <div class="mb-0">
        <label for="tenthPassingYear" class="block  text-sm font-bold text-[#1F2937]">Project Name</label>
        <input name='tenthPassingYear' type="text" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
      p-1.5  w-full   bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
      </div>
      <div class="mb-3 col-span-2">
          <label for="address" class="block  text-sm font-bold text-[#1F2937]">Project Details</label>
          <textarea name='address' type="text" id="address" class="shadow-sm focus:bg-[#C2D3E4] focus:outline-none 
          p-2.5 w-full bg-gray-50 border border-gray-300 text-[#1F2937]  text-sm rounded-lg" />
        </div>
    </div>
    </div>
    
  <button className="float-right mr-4 ml-auto focus:outline-none bg-[#1F2937] px-1 py-1 rounded-md font-bold text-lg text-[#d1d5db] w-28 border">Save</button>
</>

  )
}
