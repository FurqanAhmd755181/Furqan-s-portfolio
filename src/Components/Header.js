const Navbar = ({ activeSection, setActiveSection }) => {
  const sections = ["About", "Resume", "Portfolio", "Blog", "Contact"];

  return (
    <div className="flex justify-between items-center">
      {/* Section Title with underline below the entire heading area */}
      <div className="flex flex-col pl-7">
        <h1 className="text-yellow-400 font-semibold text-2xl">
          {activeSection}
        </h1>
        <div className="mt-1 w-full h-1 bg-yellow-400 rounded-full" />
      </div>

      <div className="flex items-center justify-center space-x-6 bg-zinc-800 rounded-l-xl py-4 px-6 h-16 min-w-[400px]">
        {sections.map((section) => (
          <button
            key={section}
            className={`px-6 py-3 text-lg font-semibold transition-colors duration-200 rounded-md ${
              activeSection === section
                ? "text-yellow-400"
                : "text-gray-300 hover:text-yellow-400"
            }`}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
