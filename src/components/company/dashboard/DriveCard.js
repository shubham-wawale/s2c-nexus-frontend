import React from "react";

export default function DriveCard() {
  return (
    <section>
        {/* card1 */}
    <div class="  mt-10  max-w">
      <div class="flex flex-col ml-40 mr-40 h-40 md:flex-row md:max-w-4xl rounded-lg bg-white shadow-lg group block max-w-xs   hover:bg-[#edecec] ">

        <img
          class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />
        <div class="p-6 flex flex-col justify-start w-100">
          <h5 class="text-gray-900 text-xl font-medium mb-2"> TCS NINJA Drive</h5>
          <p class="text-gray-700 text-base mb-3">
            TCS Ninja 2023 is the name given to the employment model in TCS that is the beginner’s step towards building a professional career with Tata Consultancy Services. 
          </p>
          <div class="flex items-center justify-between">
          <button
            type="button"
            class=" inline-block px-6 py-1.5 bg-[#0f172a] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Update
          </button>
          </div>
          
        </div>
      </div>
    </div>

    {/* card2 */}
    <div class="  mt-10  max-w">
    <div class="flex flex-col ml-40 mr-40 h-40 md:flex-row md:max-w-4xl rounded-lg bg-white shadow-lg group block max-w-xs mx-auto r  hover:bg-[#edecec] ">
        <img
          class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />
        <div class="p-6 flex flex-col justify-start w-100">
          <h5 class="text-gray-900 text-xl font-medium mb-2">TCS DIGITAL Drive</h5>
          <p class="text-gray-700 text-base mb-3">
          TCS Digital hires for the Digital Technology Domain, specializing in IoT, AI, ML, Big Data, Virtual Reality, BlockChain, NLP, etc. 
          </p>
          <div class="flex items-center justify-between">
          <button
            type="button"
            class=" inline-block px-6 py-1.5 bg-[#0f172a] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Update
          </button>
          </div>
          
        </div>
      </div>
    </div>

    {/* card3 */}
    <div class="  mt-10   max-w">
    <div class="flex flex-col ml-40 mr-40 h-40 md:flex-row md:max-w-4xl rounded-lg bg-white shadow-lg group block max-w-xs mx-auto r  hover:bg-[#edecec] ">
        <img
          class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />
        <div class="p-6 flex flex-col justify-start w-100">
          <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
          <p class="text-gray-700 text-base mb-3">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div class="flex items-center justify-between">
          <button
            type="button"
            class=" inline-block px-6 py-1.5 bg-[#0f172a] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Update
          </button>
          </div>
          
        </div>
      </div>
    </div>
    </section>
  );
}
