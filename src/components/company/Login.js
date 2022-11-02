import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import login from "../../images/login.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email:"",
    password:""
  })
  const [companyUserId, setCompanyUserid] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleLoginChange = (e) => {
    const {name, value} = e.target
    console.log(name,value)
    setCredentials(prevValue => (
      {
        ...prevValue,
        [name]:value
      }
    ))
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log(credentials)
    axios.post('http://localhost:8080/company/login', credentials)
    .then(function (response) {
      if(response.data.success) {
        setCompanyUserid(response.data.companyId) 
        console.log(response.data.message)
        navigate("/compdashboard")
      } else {
        setErrorMessage(response.data.message)
        console.log(response.data.message)
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  return (
    <div className="flex flex-row h-screen overfow-hidden ">
      <img
        src={login}
        alt="Company Login"
        className="w-3/6 md:block max-h-screen"
      />
      <div className="flex  flex-col items-center w-full p-10 overflow-auto">
        <h2 className="text-xl md:text-3xl text-center mt-4 font-body uppercase font-bold">
          Welcome Back
        </h2>
        <h3 className="text-3xl md:text-5xl text-center mt-2 font-body font-bold">
          Log into your account
        </h3>
        <form className="flex flex-col items-center pt-2 md:pt-8 w-full max-w-md mx-auto">
          <input
            name="email"
            onChange={handleLoginChange}
            className="font-body mt-2 py-2 px-4 block w-full rounded text-lg focus:ring-2 focus:border-transparent focus:ring-blue-500 outline-none border-2 border-gray-300 placeholder-gray-500"
            placeholder="Email"
          />

          <input
            name="password"
            onChange={handleLoginChange}
            className="font-body mt-2 py-2 px-4 block w-full rounded text-lg focus:ring-2 focus:border-transparent focus:ring-blue-500 outline-none border-2 border-gray-300 placeholder-gray-500"
            placeholder="Password"
          />

          <button
            onClick={handleLoginSubmit}
            type="submit"
            className="font-body font-semibold tracking-wider disabled:bg-gray-400 w-full max-w-md uppercase py-2 md:py-4 px-4 md:px-6 mt-4 rounded bg-black text-white text-lg md:text-xl transition duration-500 hover:bg-gray-600 cursor-pointer"
          >Login</button>
          <div className="flex pt-6 justify-between w-full max-w-md">
            <a
              href="login"
              className="font-body text-gray-700 hover:text-black text-sm md:text-base"
            >
              Forgot password?
            </a>
            <a
              href="/signup"
              className="font-body text-gray-700 hover:text-black text-sm md:text-base"
            >
              Create new account
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
