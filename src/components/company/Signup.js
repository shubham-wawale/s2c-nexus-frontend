import React from "react";
// import { useForm } from "react-hook-form";
// import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import login from "../../images/login.png";

export default function Signup() {
  return (
    <div className="flex flex-row h-screen overfow-hidden ">
      <img
        src={login}
        alt="Company Signup"
        className="w-3/5 md:block max-h-screen"
      />
      <div className="flex flex-col items-center w-full p-10 overflow-auto">

        <h3 className="text-3xl md:text-5xl text-center mt-2 font-body font-bold text-gray-800"
          style={{ display: "inline-block", marginTop: "42px" }}
        >
          Sign Up Now!
        </h3>
        <form className="flex flex-col items-center pt-2 md:pt-8 w-full max-w-md mx-auto"

        >

          {/* <input
        className="font-body mt-2 py-2 px-4 block w-full rounded text-lg focus:ring-2 focus:border-transparent focus:ring-blue-500 outline-none border-2 border-gray-300 placeholder-gray-500"
        type="name"
        placeholder="Name"
      /> */}

          <input
            className="font-body mt-2 py-2 px-4 block w-full rounded text-lg focus:ring-2 focus:border-transparent focus:ring-blue-500 outline-none border-2 border-gray-300 placeholder-gray-500"
            type="email"
            placeholder="Email"
          />


          <input
            className="font-body mt-2 py-2 px-4 block w-full rounded text-lg focus:ring-2 focus:border-transparent focus:ring-blue-500 outline-none border-2 border-gray-300 placeholder-gray-500"
            type="password"
            placeholder="Password"
          />

          {/* <input
            className="font-body mt-2 py-2 px-4 block w-full rounded text-lg focus:ring-2 focus:border-transparent focus:ring-blue-500 outline-none border-2 border-gray-300 placeholder-gray-500"
            type="password2"
            placeholder="Confirm Password"
          /> */}

          <input
            type="submit"
            value="Sign Up"
            className="font-body font-semibold tracking-wider disabled:bg-blue-100 w-full max-w-md uppercase py-2 md:py-4 px-4 md:px-6 mt-4 rounded bg-blue-500 text-white text-lg md:text-xl transition duration-500 hover:bg-blue-300 hover:text-white cursor-pointer"
          />
          <div>
            {/* <p className="font-body text-center text-gray-800 pb-4">
              By clicking the signup button you agree to our Terms & Conditions and Privacy Policy.
            </p> */}
            <a
              href="/"
              className="font-body text-black hover:text-blue-500 text-sm md:text-base"
              style={{ display: "inline-block", marginTop: "18px" }}
            >
              Already have an account? Login here
            </a>
          </div>
        </form>
        <hr className="w-full h-1 bg-black rounded-full my-6 block" />
        <div>
          <p className="font-body font-bold text-center text-gray-800 pb-4">
            Or continue with
          </p>
          <a
            // href="login"
            className="flex items-center space-between py-2 px-4 m-2 bg-white text-black hover:bg-gray-400 transition-all duration-500 rounded shadow-2xl border-2 border-gray-600 text-base font-semibold font-body cursor-pointer"
          >
            <FcGoogle
              style={{ display: "inline-block", marginRight: "8px" }}
              size={21}
            />
            Google
          </a>
        </div>
      </div>
    </div>
  );
}
