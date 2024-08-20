import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBuildingColumns, FaHammer, FaPlus } from 'react-icons/fa6';
import { IoHome } from 'react-icons/io5';

export const Services = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const services = [
        { 
            name: "Architectural Design", 
            icon: <FaBuildingColumns size={40} />, 
            title: "Innovative Design", 
            description: "Our team creates visually stunning and functional architectural designs tailored to your vision and needs.",
            link: "/services/architecture" // Route for detailed page
        },
        { 
            name: "Residential Construction", 
            icon: <IoHome size={40} />, 
            title: "Quality  Construction", 
            description: "Building homes with superior craftsmanship and attention to detail, ensuring comfort and durability.",
            link: "/services/residential" // Route for detailed page
        },
        { 
            name: "Renovation and Remodeling", 
            icon: <FaHammer size={40} />, 
            title: "Expert Renovation ", 
            description: "Building homes with superior craftsmanship and attention to detail, ensuring comfort and durability.",
            link: "/services/renovation" // Route for detailed page
        }
    ];

    const handleLearnMore = (link) => {
        navigate(link); // Navigate to the service detail page
    };

    return (
        <div className="p-3 sm:px-2">
            <div className="w-full flex flex-col items-center rounded-lg py-8 sm:py-12">
                <div className="flex flex-col items-center justify-center mb-10 space-y-6">
                    <h2 className="font-semibold text-[15px]">
                        WHAT WE DO
                    </h2>
                    <p className="text-center text-xl sm:text-2xl md:text-2xl lg:text-[2rem] text-orange-600 font-semibold uppercase tracking-tighter">
                        We develop and provide stylish modular<br/> construction services                    
                    </p>

                </div>

                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:w-[80%]">
                    {services.map((item, index) => (
                        <div
                        key={index}
                        className="w-full sm:w-[48%] lg:w-[30%] bg-white h-full flex flex-col justify-start items-center gap-2 px-6 py-6 sm:px-8 sm:py-8 rounded-xl border shadow-lg  hover:shadow-gray-400"
                    >
                            <div className="flex items-center bg-gray-200 justify-center p-4 sm:p-6 rounded-full text-orange-500 transition-all duration-300 hover:bg-orange-600 hover:text-white">
                                {item.icon}
                            </div>
                                  <h4 className="text-black text-sm sm:text-base md:text-base lg:text-[1.1rem] font-semibold mt-4 text-center whitespace-nowrap overflow-hidden text-ellipsis uppercase">
                                      {item.title}
                                  </h4>
                            <p className="text-sm sm:text-base text-gray-400 lg:text-[1rem] text-justify mt-2  ">
                                {item.description}
                            </p>
                            <button 
                                onClick={() => handleLearnMore(item.link)} 
                                className="text-orange-600 text-sm sm:text-[0.9rem] font-semibold mt-4 flex items-center justify-center transition-all duration-300 relative group"
                            >
                                <span className="relative flex items-center justify-center w-full h-full">
                                <FaPlus size={16} className="transform transition-transform duration-300 group-hover:opacity-0" />
                                <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    LearnMore
                                </span>
                            </span>

                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};