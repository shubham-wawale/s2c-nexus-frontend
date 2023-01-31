import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function DriveCard() {
  const navigate = useNavigate()
  const handleDriveCardClick = () => {
    navigate("/studentTable") 
  }
  
  const [showModal, setShowModal] = useState(false);
  
  
  return (
    
    <>
      <div class=" mt-10   max-w">
        <div onClick={handleDriveCardClick} class="hover:scale-105 hover:cursor-grab duration-500 flex flex-col ml-40 mr-40 h-40 md:flex-row md:max-w-4xl rounded-lg bg-white shadow-lg group block max-w-xs mx-auto r  hover:bg-[#edecec] ">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div class="p-6 flex flex-col justify-start w-100">
            <h5 class="text-gray-900 text-xl font-medium mb-2">TCS NINJA</h5>
            <p class="text-gray-700 text-base mb-3">
              TCS NINJA profile offers you a package of 3.6-3.8LPA and if you qualify for NINJA you will be offered the role of Assistant Systems Engineer.

            </p>
            <div class="flex flex-row-reverse">

              <button
                type="button"
                class=" inline-block px-6 py-1.5 bg-[#0f172a] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 ... hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class=" mt-10   max-w">
        <div onClick={handleDriveCardClick} class="hover:scale-105 hover:cursor-grab duration-500 flex flex-col ml-40 mr-40 h-40 md:flex-row md:max-w-4xl rounded-lg bg-white shadow-lg group block max-w-xs mx-auto r  hover:bg-[#edecec] ">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div class="p-6 flex flex-col justify-start w-100">
            <h5 class="text-gray-900 text-xl font-medium mb-2">TCS DIGITAL</h5>
            <p class="text-gray-700 text-base mb-3">
              All TCS aspirants who would eventually be hired through TCS Digital will work in areas like Internet of Things, Big Data & Analytics, Cloud Computing, Artificial Intelligence, etc.
            </p>




          </div>
        </div>

      </div>
      
    </>
  );
}



