import React from 'react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Professional <span className="text-blue-600">Certifications</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="border-l-4 border-blue-600">
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Full Stack Java Development
                  </h3>
                  <div className="mt-2 space-y-2">
                    <p className="text-gray-600">
                      Naresh IT Institute of Technology
                    </p>
                    <div className="flex items-center space-x-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded">
                        2023
                      </span>
                      <span className="text-gray-500">
                        • Comprehensive Java Development
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src="/api/placeholder/800/400" 
                    alt="Full Stack Java Development Certificate" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Certificate of Completion - Full Stack Java Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;