import React, { useState } from "react";
import DiscussionTopic from "./DiscussionTopic";

function NewDiscussion() {

    return(
        <div class="container h-screen  border-gray-200 border-2 ">
          <div class="mx-4 my-4">
          <h5 class="text-2xl font-bold ">Welcome to Discussion Portal!</h5>
          <p>Enter a subject and question to get started</p>
          </div>
          <form class="my-4 flex flex-col">
            <input type="text"class="border-gray-300 border-2 my-2 mx-4 rounded-md p-2 " placeholder="Subject"/>
            <textarea type="text" class="border-gray-300 border-2 my-2 mx-4 rounded-md p-2" placeholder="Type your Question here"/>
            <button class="w-40 ml-96 mt-4 px-6 py-3 bg-[#0f172a] text-white font-medium text-xs uppercase rounded shadow-md hover:bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 ... hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
          </form>
        </div>
);
}

export default NewDiscussion;

        