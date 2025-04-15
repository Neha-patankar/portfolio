import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-950 via-pink-700 to-blue-900  text-white py-4 w-full px-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold hover:text-pink-400">Neha Patankar</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="cursor-pointer font-bold hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#aboutus" className="cursor-pointer font-bold hover:text-blue-500">
              About Us
            </a>
          </li>
          <li>
            <a href="#skills" className="cursor-pointer font-bold hover:text-blue-500">
              Skills
            </a>
          </li>
          <li>
            <a href="#education" className="cursor-pointer font-bold hover:text-blue-500">
              Education
            </a>
          </li>
          <li>
            <a href="#projects" className="cursor-pointer font-bold hover:text-blue-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#certifications" className="cursor-pointer font-bold hover:text-blue-500">
              Certifications
            </a>
          </li>
          <li>
            <a href="#contactus" className="cursor-pointer  font-bold hover:text-blue-500">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
