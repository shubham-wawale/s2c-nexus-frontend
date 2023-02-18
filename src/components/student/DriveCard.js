import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DriveForm from "./CreateDriveForm";


export default function DriveCard() {
  const navigate = useNavigate()
  const handleDriveCardClick = () => {
    navigate("/studentTable") 
  }
  
  const [showModal, setShowModal] = useState(false);

  
  
  
  return (
    
    
      <div class=" mt-10   max-w ">
        <div onClick={handleDriveCardClick} class="max-h-fit hover:scale-105 hover:cursor-grab duration-500 flex flex-col ml-40 mr-40  md:flex-row md:max-w-4xl rounded-lg bg-white shadow-lg group block max-w-xs mx-auto r  hover:bg-[#edecec] ">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div class="p-6 flex flex-col justify-start w-full">
            <h5 class="text-gray-900 text-xl font-medium">TCS NINJA</h5>
            <div class="flex justify-start w-1/2">
              <h2 class= "text-sm mx-1">Associate Software Developer</h2>
              <h2 class= "text-sm mx-1">|</h2>
              <h2 class="text-sm mx-1">Mumbai</h2>
            </div>
            <div class="flex justify-start  w-1/2">
              <h2 class="border-2 border-grey rounded-md my-4 mr-2 px-2">Python</h2>
              <h2 class="border-2 border-grey rounded-md my-4 mr-2 px-2">Java</h2>
            </div>
            <div class="flex justify-start  w-1/2 mb-1">
              <h2 class="text-md text-gray-600 mr-4">CTC Offered:</h2>
              <h2 class="text-md text-gray-800">6 LPA</h2>
            </div>
            <div class="flex justify-start  w-1/2">
              <h2 class="text-md text-gray-600 mr-4 ">Job Type:</h2>
              <h2 class="text-md text-gray-800">Full Time</h2>
            </div>
            <div class="mt-4">

            As an Associate software engineer, you'll be working in a team and on diverse projects. To be successful in this role, you must possess strong analytical, problem solving and technical skills. 
            </div>
            
            
            <div class="flex flex-row flex-right  justify-between ">
            <button
            type="button"
            class="ml-80 inline-block px-6 py-3 bg-[#0f172a] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 ... hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            View Details
          </button>
              <button
                type="button"
                class=" inline-block px-6 py-2 bg-[#0f172a] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 ... hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      
    
  );
}



