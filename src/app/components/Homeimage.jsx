// pages/index.js
import Image from "next/image";

const Homeimage = () => {
  return (
    <div
      className="relative w-full h-[250px] md:h-[450px] bg-cover bg-center"
      style={{ backgroundImage: "url('homeimage.png')" }}
    >
      {/* Background Image */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
        {/* Your Image */}
        <div className="mb-4">
          <div className="p-[4px] rounded-full bg-gradient-to-r from-purple-950 to-pink-700 w-[152px] h-[152px]">
            <Image
              src="/image.png"
              alt="Neha Patankar"
              width={144}
              height={144}
              className="rounded-full bg-white object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Introduction Text */}
        <h1 className="text-3xl md:text-5xl font-bold">
          Hi, I'm Neha Patankar
        </h1>
        <p className="text-xl md:text-2xl mt-2">MERN Stack Developer</p>

        {/* Action Buttons */}
        <div className="mt-6 space-x-4">
          <a
            href="/certificates/cv.pdf"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-2 px-4 rounded"
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homeimage;
