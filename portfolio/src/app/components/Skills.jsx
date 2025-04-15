const Skills = () => {
    return (
      <section id="skills" className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'].map((skill) => (
              <div key={skill} className="bg-white shadow-lg p-4 rounded-lg">
                <p className="text-center text-gray-600">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  