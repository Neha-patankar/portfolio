import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloudUploadAlt,
  FaGitAlt,
  FaExchangeAlt,
  FaMobileAlt,
  FaTachometerAlt,
  FaPalette,
} from "react-icons/fa";

import { TbBrandReactNative } from "react-icons/tb";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const skillCategories = {
  Frontend: [
    { name: "HTML5", level: 90, icon: <FaHtml5 /> },
    { name: "CSS3", level: 85, icon: <FaCss3Alt /> },
    { name: "JavaScript", level: 85, icon: <FaJs /> },
    { name: "React.js", level: 80, icon: <FaReact /> },
    { name: "React Native", level: 80, icon: <TbBrandReactNative /> },
    { name: "Next.js", level: 75, icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss /> },
  ],
  Backend: [
    { name: "Node.js", level: 75, icon: <FaNodeJs /> },
    { name: "MongoDB", level: 80, icon: <FaDatabase /> },
    { name: "SQL", level: 80, icon: <FaDatabase /> },
  ],
  "Hosting & Deployment": [
    { name: "Vercel", level: 85, icon: <FaCloudUploadAlt /> },
    { name: "GitHub Pages", level: 80, icon: <FaCloudUploadAlt /> },
    { name: "Hostinger", level: 75, icon: <FaCloudUploadAlt /> },
    { name: "IIS Server", level: 70, icon: <FaCloudUploadAlt /> },
  ],
};

const additionalSkills = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "RESTful APIs", icon: <FaExchangeAlt /> },
  { name: "Responsive Design", icon: <FaMobileAlt /> },
  { name: "Web Performance", icon: <FaTachometerAlt /> },
  { name: "UI/UX", icon: <FaPalette /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-10 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-5">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-gray-700">{skill.name}</span>
                      </span>
                      <span className="text-sm text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full transform origin-left transition-transform duration-500 ease-out group-hover:scale-x-105"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-200 rounded-lg p-6 shadow-inner">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Skills</h3>
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill) => (
              <span
                key={skill.name}
                className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow hover:text-blue-600 transition-all duration-300"
              >
                <span>{skill.icon}</span>
                <span>{skill.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
