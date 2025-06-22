"use client";
import React from "react";

const ContactUs = () => {
  return (
    <>
      {/* Contact Section */}
      <section
        id="contactus"
        className="py-0 bg-gradient-to-b from-[#f0f4f8] via-[#e0ecf7] to-[#d4e4f7]"
      >
        {/* You can add contact form here later */}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-700 pb-8 mb-8">
            {/* Logo & Info */}
            <div>
              <h2 className="text-xl font-bold">Neha Patankar</h2>
              <p className="text-gray-400 mt-1">Full Stack Developer</p>
            </div>

            {/* Social Media Links */}
              <div  className="flex flex-col sm:flex-row gap-8">
            <div>
              <h3 className="font-medium mb-2 text-blue-300">Social Media Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.linkedin.com/in/neha-patankar-42b274296"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition flex items-center"
                  >
                    <span className="mr-2">🔗</span> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Neha-patankar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition flex items-center"
                  >
                    <span className="mr-2">💻</span> GitHub
                  </a>
                </li>
              </ul>
            </div>
            </div>

            {/* Quick Links & Contact */}
            <div className="flex flex-col sm:flex-row gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="font-medium mb-2 text-blue-300">Quick Links</h3>
                <ul className="space-y-1">
                  <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition">Home</a></li>
                  <li><a href="#aboutus" className="text-gray-300 hover:text-blue-400 transition">About</a></li>
                  <li><a href="#projects" className="text-gray-300 hover:text-blue-400 transition">Projects</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-medium mb-2 text-blue-300">Contact</h3>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="mailto:nehapatanka122@gmail.com"
                      className="text-gray-300 hover:text-blue-400 transition flex items-center"
                    >
                      📧 <span className="ml-2">nehapatanka122@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+917909444055"
                      className="text-gray-300 hover:text-blue-400 transition flex items-center"
                    >
                      📞 <span className="ml-2">7909444055</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Neha Patankar. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/neha-patankar-42b274296"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Neha-patankar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactUs;
