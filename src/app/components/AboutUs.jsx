import React from 'react';
import { UserCircle, Code, Database, Layout } from 'lucide-react';

const AboutUs = () => {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Frontend',
      text: 'React.js, Next.js, React Native, Tailwind CSS, JavaScript, HTML5, CSS3',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Backend',
      text: 'Node.js, Express.js, MongoDB, REST APIs',
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'UI/UX',
      text: 'Responsive Design, User Experience, Mobile-First Design',
    },
  ];

  return (
    <section
      id="aboutus"
      className="bg-gradient-to-br from-purple-950 via-pink-700 to-blue-900 text-white py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">About <span className="text-yellow-300">Me</span></h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full" />
        </div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-3 gap-10 items-center mb-16">
          {/* Profile Circle */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="p-[5px] bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-500 rounded-full">
                <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center">
                  <UserCircle className="w-32 h-32 text-pink-700" />
                </div>
              </div>
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-pink-700 text-white px-6 py-1 rounded-full text-sm font-semibold shadow-lg">
                Full Stack Developer
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="md:col-span-2 space-y-5 text-lg">
            <h3 className="text-2xl font-bold text-yellow-300">Neha Patankar</h3>
            <p>
              I’m a passionate Full Stack Developer with <strong>1 year of hands-on experience</strong> in the MERN stack.
              I specialize in building smooth, scalable, and intuitive web applications that blend beauty with functionality.
            </p>
            <p>
              I thrive on turning ideas into impactful digital solutions and love working with JavaScript, React, Node.js, and MongoDB.
              Whether it’s frontend finesse or backend logic, I bring dedication and curiosity to every project.
            </p>
          </div>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-xl shadow-xl hover:scale-105 transform transition duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full mb-4 text-pink-700">
                {skill.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
              <p className="text-gray-600">{skill.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
