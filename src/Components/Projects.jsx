import React, { useState } from 'react';
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
        description: "A state-of-the-art high-rise project featuring contemporary design and advanced construction techniques."
    },
    {
        Img: IMG6,
        ImgHover: IMG6Hover,
        title: "Contemporary Office Complex",
        description: "A modern office complex designed to foster collaboration and innovation with cutting-edge facilities."
    },
    {
        Img: IMG7,
        ImgHover: IMG7Hover,
        title: "Luxury Residential Tower",
        description: "A luxurious residential tower offering premium amenities and panoramic views of the city."
    }
];

export const Project = () => {
    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div className='bg-gray-800 z-50 mt-5 h-auto'>
            <div className="max-w-6xl mx-auto py-4 px-4 md:px-8 lg:px-6">
                {/* Title and Subtitle */}
                <div className="text-center mb-10">
                    <h2 className='text-lg md:text-xl lg:text-2xl text-orange-600 font-semibold mb-2'>
                        Our Recent Projects
                    </h2>
                    <p className='font-light text-white text-xs md:text-sm lg:text-base'>
                        Showcasing Our Expertise and Quality
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-start gap-8">
                    {/* Left Part - Images */}
                    <div className='flex-1 md:w-1/2 flex items-center justify-center'>
                        <div 
                            className='relative w-full h-[300px]  md:h-[500px] lg:h-[565px] bg-cover bg-center rounded-xl'
                            style={{ 
                                backgroundImage: `url(${hoverIndex !== null ? projects[hoverIndex].ImgHover : projects[0].Img})`
                            }}
                            aria-label={`Image for ${hoverIndex !== null ? projects[hoverIndex].title : projects[0].title}`}
                        >
                            {/* Optional: Overlay or content inside image */}
                        </div>
                    </div>

                    {/* Right Part - Titles and Descriptions */}
                    <div className='flex-1 md:w-1/2'>
                        {projects.map((item, index) => (
                            <div
                                key={index}
                                className='mb-6 p-4 rounded-xl shadow-lg bg-orange-500'
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(null)}
                            >
                                <h3 className='text-lg text-black font-bold mb-2'>{item.title}</h3>
                                <p className='text-base text-justify text-white mb-4'>{item.description}</p>
                                <button className='cursor-pointer px-4 py-2 bg-white text-orange-600 hover:bg-gray-100 rounded'>
                                    More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
