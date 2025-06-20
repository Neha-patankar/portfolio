'use client';
import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Aanshi Solutions Pvt. Ltd.",
    duration: "February 2025 – Present",
    responsibilities: [
      "Full ownership of end-to-end development for an Association Industry-Level Project.",
      "Built responsive, mobile-first UI and ensured seamless cross-browser compatibility.",
      "Developed and integrated secure REST APIs and handled full backend logic.",
      "Efficiently managed data storage and querying in MongoDB.",
      "Deployed application on GitHub and Vercel.",
    ],
    techStack: "React.js, Next.js, Tailwind CSS, JavaScript, Node.js, Express.js, MongoDB",
  },
  {
    role: "Full Stack Developer",
    company: "Brandsmashers Tech Pvt. Ltd.",
    duration: "August 2024 – February 2025",
    responsibilities: [
      "Worked mainly on React-based frontend development for multiple products.",
      "Enhanced responsiveness and UI for Brandsmashers Tech website using Next.js.",
    ],
    techStack: "React.js, JavaScript, SCSS, Bootstrap, HTML5, CSS Modules, Node.js, MongoDB",
  },
  {
    role: "Frontend Developer (Internship)",
    company: "SSS Technologies Pvt. Ltd.",
    duration: "March 2024 – August 2024",
    responsibilities: [
      "Developed frontend UI for Shreem Enterprises Website.",
      "Built interactive features using React.js and styled components with Tailwind CSS.",
    ],
    techStack: "HTML5, CSS Modules, JavaScript, React.js, Tailwind CSS, Node.js, MongoDB",
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="py-10 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex justify-center items-center gap-2">
            <Briefcase className="w-6 h-6 text-blue-600" />
            Work <span className="text-blue-600 ml-1">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start md:items-center mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                  <p className="text-blue-700 font-semibold">{exp.company}</p>
                </div>
                <span className="text-sm text-blue-600">{exp.duration}</span>
              </div>

              <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-2">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <p className="text-sm text-gray-800">
                <span className="text-black font-bold">Tech Stack:</span>{" "}
                <span className="inline-block bg-blue-100 text-blue-800 font-medium px-2 py-1 rounded">
                  {exp.techStack}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
