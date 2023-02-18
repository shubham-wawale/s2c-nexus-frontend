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
    <div ref={ref} className="p-4">
      <h1 className="text-4xl font-bold mb-4">Ashutosh</h1>
      <p className="text-lg font-medium mb-2">
        abc@gmail.com | 9888889888
      </p>
      <p className="text-lg font-medium mb-2">Anantyamn</p>
      <h2 className="text-2xl font-bold mt-6 mb-2">Summary</h2>
      <p className="text-lg">Good boy is me. honest and discipline is my forte how are you i am handpump.</p>
      <h2 className="text-2xl font-bold mt-6 mb-2">Education</h2>
      {/* {data.education.map((item, index) => ( */}
        <div  className="mb-4">
          <h3 className="text-xl font-bold">RI VIddya mandoir</h3>
          <p className="text-lg">Btech</p>
          <p className="text-lg">2021</p>
        </div>
      {/* ))} */}
      <h2 className="text-2xl font-bold mt-6 mb-2">Experience</h2>
      {/* {data.experience.map((item, index) => ( */}
        <div className="mb-4">
          <h3 className="text-xl font-bold">TCS</h3>
          <p className="text-lg">HR</p>
          <p className="text-lg">2nd Aug - 3rd jan</p>
          <ul className="list-disc list-inside text-lg">
            {/* {item.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))} */}
          </ul>
        </div>
      {/* ))} */}
      
    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8" onClick={handleDownload}>
    Download PDF
  </button>
  </>
  );
}

export default ResumePDF;
