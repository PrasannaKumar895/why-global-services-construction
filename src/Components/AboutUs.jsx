import React from 'react';
import { Link } from 'react-router-dom'; 
import IMG3 from '../images/IMG3.jpg'; 
import IMG5 from '../images/IMG5.jpg';
import IMG9 from '../images/IMG5 (2).jpg';
import IMG8 from '../images/IMG8.jpg';

export const About = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-3xl font-bold text-orange-600 mb-5">About Us</h1>
            <div className="flex flex-col  p-5 md:flex-row items-center justify-center bg-white pb-5 sm:pb-12 md:pb-20  sm:px-6 md:px-12 lg:px-20">
                <div className="flex flex-col gap-3 w-full md:w-1/2 md:pr-8 ">
                    <p className="text-gray-700 text-justify text-sm lg:text-[18px] sm:text-base md:text-lg">
                        We are a dedicated team of professionals committed to delivering high-quality projects. Our expertise spans across various domains, and we pride ourselves on our innovative approaches and exceptional service.
                    </p>
                    <p className="text-gray-700 text-justify text-sm  lg:text-[18px] sm:text-base md:text-lg">
                        Our mission is to create sustainable and efficient solutions that meet the unique needs of each client. We believe in the power of collaboration and work closely with our clients to bring their visions to life.
                    </p>
                    <p className="text-gray-700 text-justify text-sm lg:text-[18px] sm:text-base md:text-lg">
                        We are a dedicated team of professionals committed to delivering high-quality projects.
                    </p>
                    <div className="flex ">
                        <Link 
                            to="/about-us" 
                            className="w-30 text-white bg-orange-600 rounded-md px-4 py-2 border-2 hover:bg-orange-400 transition duration-300 ease-in-out"
                        >
                            Read More...
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-10">
                    <div className="grid grid-cols-2 grid-rows-2 gap-2">
                        <img src={IMG3} alt="Team Image 1" className="w-full h-36 sm:h-40 md:h-48 object-cover rounded-lg transform rotate-12 border-4 border-orange-500" />
                        <img src={IMG5} alt="Team Image 2" className="w-full h-36 sm:h-40 md:h-48 object-cover rounded-lg transform -rotate-3 border-4 border-orange-500" />
                        <img src={IMG8} alt="Team Image 3" className="w-full h-36 sm:h-40 md:h-48 object-cover rounded-lg transform rotate-6 border-4 border-orange-500" />
                        <img src={IMG9} alt="Team Image 4" className="w-full h-36 sm:h-40 md:h-48 object-cover rounded-lg transform -rotate-6 border-4 border-orange-500" />
                    </div>
                </div>
            </div>
        </div>
    );
};