import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            My <span className="text-blue-600">Education</span>
          </h2>
          <p className="text-gray-500 mt-2 text-lg">A journey of learning and growth</p>
          <div className="h-1 w-24 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* B.Tech Card */}
          <div className="bg-white border-l-4 border-blue-600 shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-800">B.Tech in Computer Science Engineering</h3>
            <p className="text-gray-600 mt-1">Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)</p>
            <div className="flex justify-between items-center mt-4">
              <span className="bg-blue-100 text-blue-800 text-sm px-4 py-1 rounded-full font-medium">2019 - 2022</span>
              <span className="text-blue-600 font-bold text-sm">8.67 CGPA</span>
            </div>
          </div>

          {/* Diploma Card */}
          <div className="bg-white border-l-4 border-blue-600 shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-800">Diploma in Computer Science</h3>
            <p className="text-gray-600 mt-1">Computer Science and Engineering</p>
            <div className="flex justify-between items-center mt-4">
              <span className="bg-blue-100 text-blue-800 text-sm px-4 py-1 rounded-full font-medium">2016 - 2019</span>
              <span className="text-blue-600 font-bold text-sm">7.20 CGPA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
