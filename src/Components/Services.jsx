import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBuildingColumns, FaHammer } from 'react-icons/fa6';
import { IoNewspaper, IoHome } from 'react-icons/io5';
import { MdOutlineConstruction } from 'react-icons/md';
import { BsBuildingFillGear } from 'react-icons/bs';
// Import other icons if needed

export const Services = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const services = [
        { 
            name: "Architectural Design", 
            icon: <FaBuildingColumns />, 
            title: "Innovative Architectural Design", 
            description: "Our team creates visually stunning and functional architectural designs tailored to your vision and needs",
            link: "services/architecture" // Route for detailed page
        },
        { 
            name: "Project Management", 
            icon: <IoNewspaper />, 
            title: "Efficient Project Management", 
            description: "We ensure your projects are completed on time and within budget with our expert project management services.",
            link: "/services/pro_management" // Route for detailed page
        },
        { 
            name: "Construction Planning", 
            icon: <MdOutlineConstruction />, 
            title: "Detailed Construction Planning", 
            description: "Our meticulous planning process guarantees every aspect of your construction project is carefully considered and executed.",
            link: "/services/construction" // Route for detailed page
        },
        { 
            name: "Residential Construction", 
            icon: <IoHome />, 
            title: "Quality Residential Construction", 
            description: "Building homes with superior craftsmanship and attention to detail, ensuring comfort and durability.",
            link: "/services/residential" // Route for detailed page
        },
        { 
            name: "Commercial Construction", 
            icon: <BsBuildingFillGear />, 
            title: "Robust Commercial Construction", 
            description: "From office buildings to retail spaces, we deliver commercial construction solutions that meet your business needs.",
            link: "/services/commercial" // Route for detailed page
        },
        { 
            name: "Renovation and Remodeling", 
            icon: <FaHammer />, 
            title: "Expert Renovation and Remodeling", 
            description: "Transform existing spaces with our renovation and remodeling services, adding value and functionality to your property",
            link: "/services/renovation" // Route for detailed page
        }
    ];

    const handleLearnMore = (link) => {
        navigate(link); // Navigate to the service detail page
    };

  return (
    <div>
      <div className="w-[100%] flex flex-col items-center rounded-lg py-12">
        <div className="flex flex-col items-center justify-center mb-3">
          <h2 className="text-center text-2xl md:text-2xl lg:text-[2rem] text-orange-600 font-semibold">
            Comprehensive Construction Solutions
          </h2>
          <p className="font-light text-md md:text-base lg:text-lg">
            From Concept to Completion
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:w-[90%] w-[80%] justify-center items-center gap-5 bg-transparent p-2">
          {services.map((item, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg h-full flex flex-col justify-center items-start gap-4 px-8 py-8 rounded-xl border-b-4 border-orange-600 transition-all duration-500 hover:bg-white hover:text-white"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`p-6 rounded-full bg-orange-600 text-white transition-all duration-500 ${
                  hoveredIndex === index ? "opacity-0" : "opacity-100"
                }`}
              >
                {item.icon}
              </div>
              <h4 className="text-black lg:text-[1.1rem] md:text-base font-semibold">
                {item.title}
              </h4>
              {hoveredIndex === index && (
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-100 transition-opacity duration-500 gap-2 px-5 bg-gray-800 rounded-lg">
                  <p className="text-[0.9rem] font-normal md:text-sm lg:text-[1rem] text-justify text-white">
                    {item.description}
                  </p>
                  <button onClick={()=>{handleLearnMore(item.link)}} className="border-b-2 cursor-pointer border-white hover:border-orange-600 text-orange-600 hover:text-white text-[0.9rem] md:text-sm font-semibold mt-2">
                    Learn More
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center mt-3">
          <button className="bg-white rounded-md mt-2 px-4 py-2 text-blue-950 border-2 border-orange-600  hover:bg-white hover:font-bold hover:text-orange-600 transition-colors duration-300">
            Know More
          </button>
          {/* mt-2 px-4 py-2 bg-orange-600 rounded text-sm hover:bg-orange-500 */}
        </div>
      </div>
    </div>
  );
};
