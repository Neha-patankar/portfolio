import React from 'react';

const certificationsData = [
  {
    title: 'Full Stack Java Development',
    institution: 'Naresh IT Institute of Technology',
    year: '2023',
    description: 'Complete training in Java, Spring Boot, and Web Development',
    image: '/certificates/java.png',
    alt: 'Full Stack Java Development Certificate',
  },
  {
    title: 'JavaScript Training',
    institution: 'Naresh IT Institute of Technology',
    year: '2024',
    description: 'Core concepts of JavaScript including ES6 and DOM manipulation',
    image: '/certificates/javascript.png',
    alt: 'JavaScript Training Certificate',
  },
  {
    title: 'SQL Training',
    institution: 'Naresh IT Institute of Technology',
    year: '2024',
    description: 'Advanced SQL queries, joins, indexing, and database design',
    image: '/certificates/sql.png',
    alt: 'SQL Training Certificate',
  },
];


const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Professional <span className="text-blue-600">Certifications</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600"
            >
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{cert.title}</h3>
                <p className="text-gray-600 mt-1">{cert.institution}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                    {cert.year}
                  </span>
                  <span className="text-gray-500 text-sm">• {cert.description}</span>
                </div>

                <div className="mt-4">
                  <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.alt}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Certificate of Completion - {cert.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
