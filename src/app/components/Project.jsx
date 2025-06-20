'use client';
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Shreem Enter",
      description: "A professional business website built using React and Tailwind CSS, featuring a responsive UI and engaging layout.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "https://shreem-enter-kmsnwecmx-neha-patankars-projects.vercel.app/",
      githubLink: "https://github.com/Neha-patankar/shreem-enter",
    },
    {
      title: "Talent Max Jobs",
      description: "A job listing platform for employers and job seekers with dynamic filtering and responsive design.",
      technologies: ["React", "Tailwind CSS", "JSON"],
      liveLink: "https://talent-max-jobs-bgpfk8r6g-neha-patankars-projects.vercel.app/",
      githubLink: "https://github.com/Neha-patankar/talent-max-jobs",
    },
    {
      title: "Sample Company",
      description: "Sample landing page designed for startup/company websites with clean UI and easy navigation.",
      technologies: ["React", "Tailwind CSS"],
      liveLink: "https://sample-company-pmndg9dbq-neha-patankars-projects.vercel.app/",
      githubLink: "https://github.com/Neha-patankar/sample-company",
    },
    {
      title: "Aanshi Solutions",
      description: "Corporate site for Aanshi Solutions including About, Services, and Contact sections with smooth scroll.",
      technologies: ["React", "Tailwind CSS"],
      liveLink: "https://aanshi-solutions-ax7yhnxja-neha-patankars-projects.vercel.app/",
      githubLink: "https://github.com/Neha-patankar/aanshi-solutions",
    }
  ];

  return (
    <section id="projects" className="py-10 bg-gradient-to-b from-gray-100 to-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            <span className="text-blue-600">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                {/* <img 
                  src={`https://via.placeholder.com/600x300?text=${project.title}`} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                /> */}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                  >
                    Live Demo project
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
