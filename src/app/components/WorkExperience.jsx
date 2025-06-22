'use client';
import React, { useState } from "react";
import { Briefcase, MapPin, Calendar, Code, ChevronRight, Building } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Aanshi Solutions Pvt. Ltd.",
    duration: "February 2025 – Present",
    location: "Work From Home",
    type: "Full-time",
    responsibilities: [
      "Full ownership of end-to-end development for an Association Industry-Level Project",
      "Built responsive, mobile-first UI and ensured seamless cross-browser compatibility",
      "Developed and integrated secure REST APIs and handled full backend logic",
      "Efficiently managed data storage and querying in MongoDB",
      "Deployed application on GitHub and Vercel with CI/CD implementation",
    ],
    techStack: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    highlight: "current"
  },
  {
    role: "Full Stack Developer",
    company: "Brandsmashers Tech Pvt. Ltd.",
    duration: "August 2024 – February 2025",
    location: "Work From Office",
    type: "Full-time",
    responsibilities: [
      "Worked mainly on React-based frontend development for multiple products",
      "Enhanced responsiveness and UI for Brandsmashers Tech website using Next.js",
      "Collaborated with design team to implement pixel-perfect UI components",
      "Optimized application performance and improved loading times by 40%",
    ],
    techStack: ["React.js", "JavaScript", "SCSS", "Bootstrap", "HTML5", "CSS Modules", "Node.js", "MongoDB"],
    highlight: "recent"
  },
  {
    role: "Frontend Developer",
    company: "SSS Technologies Pvt. Ltd.",
    duration: "March 2024 – August 2024",
    location: "Work From Office",
    type: "Internship",
    responsibilities: [
      "Developed frontend UI for Shreem Enterprises Website",
      "Built interactive features using React.js and styled components with Tailwind CSS",
      "Implemented responsive design principles for mobile and desktop views",
      "Gained hands-on experience with modern web development workflows",
    ],
    techStack: ["HTML5", "CSS Modules", "JavaScript", "React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    highlight: "learning"
  },
];

const WorkExperience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getHighlightColor = (highlight) => {
    switch (highlight) {
      case 'current': return 'from-green-400 to-blue-500';
      case 'recent': return 'from-blue-400 to-purple-500';
      case 'learning': return 'from-orange-400 to-pink-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Full-time': return 'bg-green-100 text-green-800 border-green-200';
      case 'Internship': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My professional journey in software development, building scalable applications and innovative solutions.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative transform transition-all duration-500 hover:scale-[1.02] ${
                  hoveredIndex === index ? 'translate-x-2' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-lg hidden md:block"></div>
                
                {/* Experience card */}
                <div className="md:ml-20 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Gradient top border */}
                  <div className={`h-1 bg-gradient-to-r ${getHighlightColor(exp.highlight)}`}></div>
                  
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-800">{exp.role}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(exp.type)}`}>
                            {exp.type}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-blue-600 font-semibold mb-3">
                          <Building className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <ChevronRight className="w-5 h-5 text-blue-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <Code className="w-5 h-5 text-purple-500" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-800 font-medium rounded-lg border border-blue-200 hover:shadow-md transition-all duration-200 hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  );
};

export default WorkExperience;