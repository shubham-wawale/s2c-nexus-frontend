import React, { useState, useEffect } from 'react';

const Resume = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch('hhttp://localhost:8080/student/getDetails')
      .then(res => res.json())
      .then(data => setResumeData(data))
      .catch(error => console.error(error));
  }, []);



  return (
    <div className="container flex-col items-center p-4 " >
      <h1 className="text-3xl font-bold">Resume</h1>
      <div className="w-full bg-white rounded-lg p-6 shadow-lg">
      <div className="flex justify-center items-center mb-4">
          <img src="" alt="Profile" className="w-32 h-32 rounded-full" />
        </div>
        <h2 className="text-2xl font-bold">Personal Details</h2>
        <div className="mt-4">
          <p className="text-lg font-bold">Name:</p>
          <p className="text-lg">{resumeData.name}</p>
        </div>
        <div className="mt-4">
          <p className="text-lg font-bold">Date of Birth:</p>
          <p className="text-lg">{resumeData.dob}</p>
        </div>
        <div className="mt-4">
          <p className="text-lg font-bold">College ID:</p>
          <p className="text-lg">{resumeData.collegeId}</p>
        </div>
        <div className="mt-4">
          <p className="text-lg font-bold">Mobile:</p>
          <p className="text-lg">{resumeData.mobile}</p>
        </div>
        <div className="mt-4">
          <p className="text-lg font-bold">Permanent Address:</p>
          <p className="text-lg">{resumeData.address}</p>
        </div>
        <h2 className="text-2xl font-bold">Academic Details</h2>
        <div className="mt-4">
          <p className="text-lg font-bold">Name:</p>
          <p className="text-lg">{resumeData.name}</p>
        </div>
        <div className="mt-4">
          <p className="text-lg font-bold">Date of Birth:</p>
          <p className="text-lg">{resumeData.dob}</p>
        </div>
        <div className="mt-4">
          <p className="text-lg font-bold">College ID:</p>
          <p className="text-lg">{resumeData.collegeId}</p>
        </div>
        <div className="mt-4">
          <p className="text-lg font-bold">Mobile Number:</p>
          <p className="text-lg">{resumeData.mobile}</p>
        </div>
       
      </div>
    </div>
  );
};

export default Resume;

