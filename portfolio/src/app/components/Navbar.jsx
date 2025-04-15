import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Neha Patankar</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link href="/aboutus" className="cursor-pointer">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/skills" className="cursor-pointer">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/educations" className="cursor-pointer">
              Education
            </Link>
          </li>
          <li>
            <Link href="/projects" className="cursor-pointer">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/certifications" className="cursor-pointer">
              Certifications
            </Link>
          </li>
          <li>
            <Link href="/contactus" className="cursor-pointer">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;