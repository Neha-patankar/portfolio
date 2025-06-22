'use client';
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Zap, Eye, Star, Calendar, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const projects = [
    {
      title: "Shreem Enter",
      description: "A professional business website built using React and Tailwind CSS, featuring a responsive UI and engaging layout with modern design principles.",
      technologies: ["React", "Tailwind CSS", "JavaScript" ,"Node.js", "Express", "MongoDB"],
      liveLink: "https://shreem-enter-kmsnwecmx-neha-patankars-projects.vercel.app/",
      githubLink: "https://github.com/Neha-patankar/",
      category: "Business Website",
      status: "Live",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Talent Max Jobs",
      description: "A comprehensive job listing platform connecting employers and job seekers with dynamic filtering, search functionality, and responsive design.",
      technologies: ["React", "Tailwind CSS", "JSON", "Node.js", "Express", "MongoDB"],
      liveLink: "https://talent-max-jobs-bgpfk8r6g-neha-patankars-projects.vercel.app/",
      githubLink: "https://github.com/Neha-patankar/",
      category: "Job Portal",
      status: "Live",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Sample Company",
      description: "A modern startup landing page template with clean UI, smooth animations, and optimized user experience for company websites.",
      technologies: ["React", "Tailwind CSS"],
      liveLink: "https://sample-company-pmndg9dbq-neha-patankars-projects.vercel.app/",
      githubLink: "https://github.com/Neha-patankar/",
      category: "Landing Page",
      status: "Live",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Aanshi Solutions",
      description: "Corporate website for Aanshi Solutions featuring comprehensive About, Services, and Contact sections with smooth scroll navigation.",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      liveLink: "https://aanshi-solutions-ax7yhnxja-neha-patankars-projects.vercel.app/",
      githubLink: "https://github.com/Neha-patankar/",
      category: "Corporate Site",
      status: "Live",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "Business Website": "bg-blue-100 text-blue-800 border-blue-200",
      "Job Portal": "bg-green-100 text-green-800 border-green-200",
      "Landing Page": "bg-orange-100 text-orange-800 border-orange-200",
      "Corporate Site": "bg-purple-100 text-purple-800 border-purple-200"
    };
    return colors[category] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6">
            <Code className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Showcasing my recent work in web development, from business websites to complex applications.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${
                hoveredIndex === index ? 'transform scale-[1.02]' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient top border */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`}></div>
              
              {/* Project Header */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        {project.status}
                      </span>
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-200 hover:shadow-md transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                  >
                    <Eye className="w-4 h-4" />
                    <span className='text-nowrap'>Live Demo</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                     
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

       

     
      </div>
    </section>
  );
};

export default Projects;