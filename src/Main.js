import Profile from "./Pages/Profile";
import Navbar from "./Components/Header";
import About from "../src/Pages/About";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import { useState } from "react";

const Main = () => {
  const [activeSection, setActiveSection] = useState("About");

  const renderContent = () => {
    switch (activeSection) {
      case "About":
        return <About />;
      case "Resume":
        return <Resume />;
      case "Portfolio":
        return <Portfolio />;
      case "Blog":
        return <p>This is the Blog section content.</p>;
      case "Contact":
        return <Contact />;
      default:
        return <p>Select a section to display its content.</p>;
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 pt-24 sm:pt-32 bg-black">
      <div className="flex flex-col lg:flex-row gap-6 max-w-[96%] mx-auto">
        {/* Profile Section */}
        <div className="w-full lg:w-[25%] bg-gray-900 border border-gray-700 rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.03)] p-4">
          <Profile />
        </div>

        {/* Navbar and Content Section */}
        <div className="flex-1 flex flex-col w-full">
          {/* Navbar (top only border + rounded top) */}
          <div className="bg-gray-900 border-t border-l border-r border-gray-700 rounded-t-lg">
            <Navbar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>

          {/* Main Content */}
          <div className="rounded-b-lg bg-gray-900 border border-t-0 border-gray-700 shadow-[0_0_10px_rgba(255,255,255,0.03)]">
            <div className="p-4 sm:p-6">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
