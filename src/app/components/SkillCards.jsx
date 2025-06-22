import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaMobileAlt } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiTailwindcss, SiExpress, SiFirebase, SiRedux } from 'react-icons/si';
import { MdOutlineSecurity } from 'react-icons/md';

const skills = [
  {
    icon: <FaReact className="text-blue-500 w-6 h-6" />,
    title: 'React.js',
    text: 'Dynamic UI development with React',
  },
  {
    icon: <SiNextdotjs className="text-black w-6 h-6" />,
    title: 'Next.js',
    text: 'SSR and optimized frontend performance',
  },
  {
    icon: <FaNodeJs className="text-green-600 w-6 h-6" />,
    title: 'Node.js',
    text: 'Backend server with Express.js',
  },
  {
    icon: <SiMongodb className="text-green-700 w-6 h-6" />,
    title: 'MongoDB',
    text: 'NoSQL database integration',
  },
  {
    icon: <SiExpress className="text-gray-700 w-6 h-6" />,
    title: 'Express.js',
    text: 'Lightweight backend framework',
  },
  {
    icon: <FaHtml5 className="text-orange-600 w-6 h-6" />,
    title: 'HTML5',
    text: 'Semantically structured layout',
  },
  {
    icon: <FaCss3Alt className="text-blue-600 w-6 h-6" />,
    title: 'CSS3',
    text: 'Styling and responsive design',
  },
  {
    icon: <FaJs className="text-yellow-500 w-6 h-6" />,
    title: 'JavaScript',
    text: 'Core logic and interactivity',
  },
  {
    icon: <SiTailwindcss className="text-cyan-500 w-6 h-6" />,
    title: 'Tailwind CSS',
    text: 'Utility-first responsive styling',
  },
  {
    icon: <FaMobileAlt className="text-pink-500 w-6 h-6" />,
    title: 'React Native',
    text: 'Cross-platform mobile development',
  },
  {
    icon: <SiFirebase className="text-yellow-600 w-6 h-6" />,
    title: 'Firebase',
    text: 'Cloud storage & hosting',
  },
  {
    icon: <MdOutlineSecurity className="text-red-500 w-6 h-6" />,
    title: 'JWT Auth',
    text: 'User authentication & security',
  },
  {
    icon: <FaGithub className="text-gray-700 w-6 h-6" />,
    title: 'GitHub',
    text: 'Version control & collaboration',
  },
  {
    icon: <SiRedux className="text-purple-600 w-6 h-6" />,
    title: 'Redux',
    text: 'State management for large apps',
  },
];

const SkillCards = () => {
  return (
    <section className=" py-5 text-white">
      <div className="max-w-8xl mx-auto">
       
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 flex justify-center items-center mr-3">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-bold text-pink-700">{skill.title}</h4>
              </div>
              <p className="text-sm font-medium">{skill.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillCards;
