import React from 'react';
import StudentSideNav from './StudentSideNav';
import Navbar from '../company/dashboard/navBar';

const StudentDriveInfo = () => {
    return (
        
<div>
        <div>
            <Navbar/>
            <StudentSideNav/>

            <header class="card-header ">
                <p class="card-header-title text-3xl font-semibold mt-5">
                    <span class="icon"><i class="mdi mdi-account-multiple"></i></span>
                    Drive Information
                </p>
            </header>
        </div>
  
      <div class="container mx-auto my-1 p-5">
        <div class="md:flex no-wrap md:-mx-2 ">

          <div class="w-full md:w-3/12 md:mx-2">

            <div class="bg-white p-3 border-t-4 border-green-400">
              <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">TCS Digital</h1>
              <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">As a member of our Software Engineering Group, we look first and foremost for people who are passionate around solving business problems through innovation and engineering practices. You'll be required to apply your depth of knowledge and expertise to all aspects of the software development lifecycle, as well as partner continuously with your many stakeholders on a daily basis to stay focused on common goals.</p>
              <ul
                class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li class="flex items-center py-3">
                  <span>Drive Status</span>
                  <span class="ml-auto"><span
                    class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                </li>

              </ul>
            </div>
          </div>
          
          
          <div class="w-full md:w-9/12 mx-2 h-64">

            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span class="tracking-wide">About</span>
              </div>
              <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Type of Company</div>
                    <div class="px-4 py-2">Product Based</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Year of Establishment</div>
                    <div class="px-4 py-2">2002</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Required Skills</div>
                    <div class="px-4 py-2">Java,Python</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Eligibility Criteria</div>
                    <div class="px-4 py-2">10th Pass</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">CTC Offered</div>
                    <div class="px-4 py-2">7 LPA</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Job Location</div>
                    <div class="px-4 py-2">Mumbai, Banglore</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Passing Year</div>
                    <div class="px-4 py-2">
                      <a class="text-blue-800" href="mailto:jane@example.com">2023</a>
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Preferred Branches</div>
                    <div class="px-4 py-2">Comps, IT</div>
                  </div>
                </div>
              </div>
              <button
              className="bg-blue-200 text-black active:bg-blue-500 
          font-bold px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ml-96 mt-10"
              type="button"
            //   onClick={this.showModal}
            >
              Apply Drive
            </button>
            </div>
            
          </div>
          
        </div>
      </div>
      </div>

    );
};

export default StudentDriveInfo;