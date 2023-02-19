import React, { useState } from "react";
import { FiThumbsUp } from 'react-icons/fi';
import { FiThumbsDown } from 'react-icons/fi';
import { AiOutlineStar } from "react-icons/ai";
import DiscussionTopic from "./DiscussionTopic";
import Response from "./Response";



function OpenDiscussion(){

    return(
        <div class="container h-screen  border-gray-200 border-2 ">
          <div class="mx-4 my-4">
          <h5 class="text-2xl font-bold ">Question</h5>
          <DiscussionTopic />
          <button class="w-32 ml-96 mt-1 px-6 py-3 bg-[#0f172a] text-white font-medium text-xs uppercase rounded shadow-md hover:bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 ... hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Resolve </button>
          </div>
          <div class="mx-4 my-4">
          <h5 class="text-2xl font-bold ">Response</h5>
          <Response />
          </div>
          <div class="mx-4 my-4">
          <h5 class="text-2xl font-bold ">Add Response</h5>
          <form class="my-4 flex flex-col">
            <input type="text"class="border-gray-300 border-2 my-2 mx-4 rounded-md p-2 " placeholder="Enter Name"/>
            <textarea type="text" class="border-gray-300 border-2 my-2 mx-4 rounded-md p-2" placeholder="Enter Comment"/>
            <button class="w-32 ml-96 mt-4 px-6 py-3 bg-[#0f172a] text-white font-medium text-xs uppercase rounded shadow-md hover:bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 ... hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
          </form>
          </div>
          
          {/*<div class="m-4 border-gray-300 border-2">
          <h3 class="text-gray-400">Question</h3>
          <p class="text-md font-bold mx-4 my-2">subject</p>
          <p class="text-sm mx-4 my-2">question</p>
          <div class="flex justify-end mr-8 ">
          <div class="flex mx-1" name="likes">
          <p class="mx-1">0</p>
          <FiThumbsUp />
          
          
          </div>
          <div class="flex mx-1 " name="likes">
          <p class="mx-1">0</p>
          <FiThumbsDown />
          
          
          </div>
          <div class=" mx-1 " name="fav">
          <button class="mx-1">
          <AiOutlineStar class="font-yellow-200" />
          </button>
          </div>
          </div>
    </div>*/}
          </div>
          );
}
export default OpenDiscussion;