import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      liveLink: "https://your-project-url.com",
      githubLink: "https://github.com/yourusername/project",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with real-time updates, user collaboration features, and customizable workspaces.",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB", "React"],
      liveLink: "https://your-project-url.com",
      githubLink: "https://github.com/yourusername/project",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with Next.js and Tailwind CSS, featuring responsive design and smooth animations.",
      technologies: ["Next.js", "Tailwind CSS", "React"],
      liveLink: "https://your-project-url.com",
      githubLink: "https://github.com/yourusername/project",
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                  >
                    Live Demo
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

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
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