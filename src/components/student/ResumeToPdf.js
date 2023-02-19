import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import "tailwindcss/tailwind.css";

function ResumePDF({ data }) {
  const ref = useRef();

  function handleDownload() {
    const opt = {
      margin: 1,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(ref.current).save();
  }

  return (
    <>
    <div ref={ref} className="bg-white mx-auto max-w-4xl p-8 rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">John Doe</h2>
        <p className="text-gray-600">Front-end Developer</p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Skills</h3>
        <ul className="list-disc list-inside">
          <li>ReactJS</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>Tailwind CSS</li>
          <li>Git/Github</li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Experience</h3>
        <div>
          <p className="text-gray-600 mb-1">Front-end Developer - ABC Company (2019 - present)</p>
          <ul className="list-disc list-inside">
            <li>Developed and maintained web applications using ReactJS and Tailwind CSS</li>
            <li>Collaborated with the team to ensure code quality and project timelines were met</li>
          </ul>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 mb-1">Web Developer - XYZ Agency (2017 - 2019)</p>
          <ul className="list-disc list-inside">
            <li>Designed and developed websites using HTML/CSS and JavaScript</li>
            <li>Managed website content and updates using CMS platforms</li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Education</h3>
        <div>
          <p className="text-gray-600 mb-1">Bachelor of Science in Computer Science - University of ABC (2013 - 2017)</p>
          <ul className="list-disc list-inside">
            <li>Specialized in software development and programming languages</li>
          </ul>
        </div>
        <div>
          <p className="text-gray-600 mb-1">Bachelor of Science in Computer Science - University of ABC (2013 - 2017)</p>
          <ul className="list-disc list-inside">
            <li>Specialized in software development and programming languages</li>
          </ul>
        </div>
        <div>
          <p className="text-gray-600 mb-1">Bachelor of Science in Computer Science - University of ABC (2013 - 2017)</p>
          <ul className="list-disc list-inside">
            <li>Specialized in software development and programming languages</li>
          </ul>
        </div>
      </div>
    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8" onClick={handleDownload}>
    Download PDF
  </button>
  </>
  );
}

export default ResumePDF;
