import { useState } from "react";
import { Menu, X } from "lucide-react"; // or use any burger/close icon

const Navbar = ({ activeSection, setActiveSection }) => {
  const sections = ["About", "Resume", "Portfolio", "Blog", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full relative">
      {/* Section Title */}
      <div className="flex flex-col pl-4 sm:pl-7 mb-4 sm:mb-0">
        <h1 className="text-yellow-400 font-semibold text-2xl">
          {activeSection}
        </h1>
        <div className="mt-1 w-full h-1 bg-yellow-400 rounded-full" />
      </div>

      {/* Burger icon (visible on mobile) */}
      <div className="sm:hidden absolute top-2 right-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-yellow-400 p-2"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Nav Links */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col sm:flex sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 bg-zinc-800 rounded-xl py-4 px-4 sm:px-6 w-full sm:w-auto mt-12 sm:mt-0`}
      >
        {sections.map((section) => (
          <button
            key={section}
            className={`px-4 py-2 text-base sm:text-lg font-semibold transition-colors duration-200 rounded-md w-full sm:w-auto text-left sm:text-center ${
              activeSection === section
                ? "text-yellow-400"
                : "text-gray-300 hover:text-yellow-400"
            }`}
            onClick={() => {
              setActiveSection(section);
              setMenuOpen(false); // Close menu after selection
            }}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
