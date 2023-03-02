import React, { useState } from "react";
import { FiThumbsUp } from 'react-icons/fi';
import { FiThumbsDown } from 'react-icons/fi';
import { AiOutlineStar } from "react-icons/ai";



function Response(){

    return(
        <div class="m-4 border-gray-300 border-2 rounded-md">
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
            
        </div>
        </div>
    );
}
export default Response;