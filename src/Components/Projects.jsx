import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import IMG4 from '../images/IMG4.jpg';
import IMG4Hover from '../images/IMG4Hover.jpg';
import IMG6 from '../images/IMG6.jpg';
import IMG6Hover from '../images/IMG6Hover.jpg';
import IMG7 from '../images/IMG7.jpg';
import IMG7Hover from '../images/IMG7Hover.jpg';

const projects = [
    {
        Img: IMG4,
        ImgHover: IMG4Hover,
        title: "Modern High-Rise Building",
        description: "A state-of-the-art high-rise project featuring contemporary design and advanced construction techniques.",
        link: "/projects/high_rise" //  link for navigation
    },
    {
        Img: IMG6,
        ImgHover: IMG6Hover,
        title: "Contemporary Office Complex",
        description: "A modern office complex designed to foster collaboration and innovation with cutting-edge facilities.",
        link: "/projects/luxury" //  link for navigation
    },
    {
        Img: IMG7,
        ImgHover: IMG7Hover,
        title: "Luxury Residential Tower",
        description: "A luxurious residential tower offering premium amenities and panoramic views of the city.",
        link: "/projects/commercial" // link for navigation
    }
];


export const Project = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="bg-gray-800 z-50  lg:p-1.5 md:1.5 p-4 lg:h-[640px] h-full">
      <div className="max-w-6xl mx-auto py-1 px-4 md:px-8 lg:px-6">
        {/* Title and Subtitle */}
        <div className="text-center mb-10">
          <h2 className="text-lg md:text-xl lg:text-2xl text-orange-600 font-semibold mb-1">
            Our Recent Projects
          </h2>
          <p className="font-light text-white text-xs md:text-sm lg:text-base">
            Showcasing Our Expertise and Quality
          </p>
        </div>

        <div className="flex m-[-15px] flex-col lg:flex-row md:flex-row lg:items-start lg:justify-around md:items-start md:justify-around justify-center items-center lg:gap-2 md:gap-1 gap-6">
          {/* Left Part - Images */}
          <div className=" md:w-1/2 lg:w-[40%] w-[77%] flex items-center justify-center">
            <div
              className=" w-full h-[250px]  md:h-[480px] lg:h-[440px] bg-cover drop-shadow-[0_4px_4px_rgba(255,255,255,0.9)] filter  bg-center rounded-xl"
              style={{
                backgroundImage: `url(${
                  hoverIndex !== null
                    ? projects[hoverIndex].ImgHover
                    : projects[0].Img
                })`,
              }}
              aria-label={`Image for ${
                hoverIndex !== null
                  ? projects[hoverIndex].title
                  : projects[0].title
              }`}
            >
              {/* Optional: Overlay or content inside image */}
            </div>
          </div>

          {/* Right Part - Titles and Descriptions */}
          <div className="mb-4 flex  lg:px-1 md:px-5 px-10 flex-col lg:gap-6 gap-3 md:w-1/2 lg:[60%] ">
            {projects.map((item, index) => (
              <div
                key={index}
                className="py-4 px-6 rounded-xl bg-gray-200 hover:bg-white shadow-lg border-l-8 border-orange-600 "
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <h3 className="text-md text-black font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-justify text-black mb-2">
                  {item.description}
                </p>
                <Link 
                                    to={item.link} // Use the link from the project data
                                    className='cursor-pointer py-0.5 px-4 rounded-sm bg-orange-600 text-white hover:bg-gray-100 border hover:text-orange-600 hover:border hover:border-orange-600 transition-colors duration-1000 text-sm'
                                >
                                    More
                                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center mt-8 justify-center ">
          <Link
            to="/projects"
            routing
            className="text-white  rounded-md px-4 py-2 border-2 border-orange-600  hover:bg-white hover:font-bold hover:text-orange-600 transition-colors duration-300"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
