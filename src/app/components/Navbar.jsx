// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav className="bg-gradient-to-r from-purple-950 via-pink-700 to-blue-900  text-white py-4 w-full px-10">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold hover:text-pink-400">Neha Patankar</h1>
//         <ul className="flex space-x-6">
//           <li>
//             <a href="#home" className="cursor-pointer font-bold hover:text-blue-500">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#aboutus" className="cursor-pointer font-bold hover:text-blue-500">
//               About Us
//             </a>
//           </li>
//            <li>
//             <a href="#experience" className="cursor-pointer font-bold hover:text-blue-500">
//               Experience
//             </a>
//           </li>
//           <li>
//             <a href="#skills" className="cursor-pointer font-bold hover:text-blue-500">
//               Skills
//             </a>
//           </li>
//           <li>
//             <a href="#education" className="cursor-pointer font-bold hover:text-blue-500">
//               Education
//             </a>
//           </li>
//           <li>
//             <a href="#projects" className="cursor-pointer font-bold hover:text-blue-500">
//               Projects
//             </a>
//           </li>
//           <li>
//             <a href="#certifications" className="cursor-pointer font-bold hover:text-blue-500">
//               Certifications
//             </a>
//           </li>
//           <li>
//             <a href="#contactus" className="cursor-pointer  font-bold hover:text-blue-500">
//               Contact Us
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gradient-to-r from-purple-950 via-pink-700 to-blue-900 text-white w-full z-50 shadow-md fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold hover:text-pink-400">Neha Patankar</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {[
            ['Home', '#home'],
            ['About Us', '#aboutus'],
            ['Experience', '#experience'],
            ['Skills', '#skills'],
            ['Education', '#education'],
            ['Projects', '#projects'],
            ['Certifications', '#certifications'],
            ['Contact Us', '#contactus'],
          ].map(([title, href]) => (
            <li key={href}>
              <a href={href} className="font-bold hover:text-blue-400">
                {title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          {menuOpen ? (
            <X size={28} onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <Menu size={28} onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-purple-950 px-6 pb-4">
          <ul className="space-y-4">
            {[
              ['Home', '#home'],
              ['About Us', '#aboutus'],
              ['Experience', '#experience'],
              ['Skills', '#skills'],
              ['Education', '#education'],
              ['Projects', '#projects'],
              ['Certifications', '#certifications'],
              ['Contact Us', '#contactus'],
            ].map(([title, href]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-bold hover:text-blue-400"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
