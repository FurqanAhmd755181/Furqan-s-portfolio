import { useState } from "react";
import HomePageD from "../Assests/HomepageD.png";

import HomeD2 from "../Assests/HomeDesign2.png";
import HomeD3 from "../Assests/HomeD3.png";
import HomeD4 from "../Assests/HomeD4.png";
import HomeD5 from "../Assests/HomeD5.png";
import HomeD6 from "../Assests/HomeD6.png";
import HomeD7 from "../Assests/HomeD7.png";
import HomeD8 from "../Assests/HomeD8.png";
import HomeD9 from "../Assests/HomeD9.png";
import rays1 from "../Assests/4rays1.png";
import rays2 from "../Assests/4rays2.png";
import rays3 from "../Assests/4rays3.png";
import rays4 from "../Assests/4rays4.png";
import rays5 from "../Assests/4rays5.png";
import rays6 from "../Assests/4rays6.png";
import rays7 from "../Assests/4rays7.png";
import rays8 from "../Assests/4rays8.png";
import web from "../Assests/4raysApplication.png"
import plant from "../Assests/Mobile1.png";
import weather from "../Assests/weather.png"

const portfolioItems = [
  { title: "4Rays-casino plateform", category: "Web development", img: web },
  { title: "Habba-Wa-Jumla--Ecommerce", category: "Web development", img:HomeD2},
  { title: "Habba-Wa-Jumla", category: "Web design", img: HomePageD },
  { title: "Habba-Wa-Jumla", category: "Web design", img: HomeD2 },
  { title: "Habba-Wa-Jumla", category: "Web design", img: HomeD3 },
  { title: "Habba-Wa-Jumla", category: "Web design", img: HomeD4 },
  { title: "Habba-Wa-Jumla", category: "Web design", img: HomeD5 },
  { title: "Habba-Wa-Jumla", category: "Web design", img: HomeD6 },
  { title: "Habba-Wa-Jumla", category: "Web design", img: HomeD7 },
  { title: "Habba-Wa-Jumla", category: "Web design", img: HomeD9 },
  { title: "Habba-Wa-Jumla", category: "Web design", img: HomeD8 },
  { title: "4Rays", category: "Web design", img: rays1 },
  { title: "4Rays", category: "Web design", img: rays2 },
  { title: "4Rays", category: "Web design", img: rays3 },
  { title: "4Rays", category: "Web design", img: rays4 },
  { title: "4Rays", category: "Web design", img: rays5 },
  { title: "4Rays", category: "Web design", img: rays6 },
  { title: "4Rays", category: "Web design", img: rays7 },
  { title: "4Rays", category: "Web design", img: rays8 },

  // {
  //   title: "Plant diagnose system",
  //   category: "Applications",
  //   img: "/images/brawlhalla.png",
  // },

  {
    title: "Dashboard",
    category: "Web development",
    img: HomeD9,
  },
  { title: "Plant diagnose system", category: "Applications", img:plant},
  { title: "Weather", category: "Applications", img: weather }
];

const categories = ["All", "Web design", "Applications", "Web development"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className=" text-white px-8 py-16 font-sans">
      <h2 className="text-3xl font-bold mb-8">Portfolio</h2>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-6 mb-12 text-sm font-medium text-gray-300">
        {categories.map((category) => (
          <button
            key={category}
            className={`pb-1 border-b-2 transition-all duration-300 ${
              selectedCategory === category
                ? "text-yellow-400 border-yellow-400"
                : "border-transparent hover:text-yellow-300"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#1c1c1e] rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-md"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
