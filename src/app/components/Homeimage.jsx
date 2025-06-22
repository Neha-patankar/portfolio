"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Download,
  Eye,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code,
  Coffee,
} from "lucide-react";

const Homeimage = () => {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "MERN Stack Developer",
    "Frontend Developer",
    "Full Stack Engineer",
    "React Specialist",
    "Node.js Developer",
  ];

  const skills = ["React", "Next.js", "Node.js", "MongoDB", "Express", "JavaScript"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden py-10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-60 h-60 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="text-center lg:text-left flex-1">
          {/* Greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-white text-sm mb-4 border border-white border-opacity-20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Available for work
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
            Hi, I’m <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Neha Patankar</span>
          </h1>

          {/* Role */}
          <h2 className="text-xl sm:text-2xl text-white text-opacity-80 mb-6 min-h-[2.5rem]">
            {roles[currentRole]}
          </h2>

          {/* Description */}
          <p className="text-white text-opacity-70 text-base sm:text-lg leading-relaxed max-w-xl mb-6">
            Passionate about creating exceptional web experiences with modern technologies. I build scalable applications and beautiful user interfaces.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-white bg-opacity-10 border border-white border-opacity-20 text-white rounded-full backdrop-blur-sm hover:bg-opacity-20 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
            <a
              href="/certificates/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-lg transition shadow hover:scale-105"
            >
              <Download className="w-5 h-5" /> Download Resume
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 bg-white bg-opacity-10 border border-white border-opacity-20 text-white hover:bg-opacity-20 px-6 py-3 rounded-lg transition shadow"
            >
              <Eye className="w-5 h-5" /> View Projects
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <a href="https://github.com/Neha-patankar" target="_blank" className="hover:scale-110 transition">
              <Github className="w-6 h-6 text-white hover:text-blue-400" />
            </a>
            <a href="https://linkedin.com/in/neha-patankar-42b274296" target="_blank" className="hover:scale-110 transition">
              <Linkedin className="w-6 h-6 text-white hover:text-blue-400" />
            </a>
            <a href="mailto:nehapatanka122@gmail.com" className="hover:scale-110 transition">
              <Mail className="w-6 h-6 text-white hover:text-blue-400" />
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative mb-10 lg:mb-0 flex-1 flex justify-center">
          <div className="relative mt-10">
            {/* Glow */}
            <div className="absoluteinset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 rounded-full blur-2xl scale-110"></div>

            {/* Image Wrapper */}
            <div className="relative p-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-56 h-56 sm:w-64 sm:h-64">
              <div className="w-full h-full  rounded-full bg-gradient-to-br from-slate-800 to-slate-900 p-3 flex items-center justify-center">
                <Image
                  src="/image.png"
                  alt="Neha Patankar"
                  width={180}
                  height={180}
                  className="rounded-full object-cover border-4 border-white border-opacity-10 w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full animate-bounce shadow-lg">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -bottom-3 -left-3 bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full animate-bounce delay-1000 shadow-lg">
              <Coffee className="w-5 h-5 text-white" />
            </div>

            {/* Location Badge */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full border border-white border-opacity-20">
              <div className="flex items-center gap-2 text-white text-opacity-80 text-sm">
                <MapPin className="w-4 h-4" />
                <span className="text-nowrap">Bhopal, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeimage;
