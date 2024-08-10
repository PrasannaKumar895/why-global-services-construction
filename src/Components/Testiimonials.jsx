import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import IMG3 from '../images/IMG3.jpg'
import { useMediaQuery } from 'react-responsive';

export const Testimonials = () => {
    const client = [
        { name: "Client 1", img: IMG3, msg: "ArchitecX delivered first beyond our expectations with their exceptional project management and design expertise" },
        { name: "Client 2", img: IMG3, msg: "ArchitecX delivered second beyond our expectations with their exceptional project management and design expertise" },
        { name: "Client 3", img: IMG3, msg: "ArchitecX delivered third beyond our expectations with their exceptional project management and design expertise" },
    ];

    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handlePrevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrent(current === 0 ? client.length - 1 : current - 1);
    };

    const handleNextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrent(current === client.length - 1 ? 0 : current + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [current]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsAnimating(false);
        }, 600); // Match the duration with the CSS transition

        return () => clearTimeout(timeout);
    }, [current]);

    return (
        <div className='flex flex-col md:flex-row items-center justify-center bg-orange-600 text-white w-full h-full'>
            {/* Testimonial Slider */}
            <div className='w-full md:w-1/2 p-8 relative'>
                <div className='relative h-full flex justify-center items-center'>
                    <div 
                        key={client[current].name} 
                        className={`bg-white rounded-xl p-6 transition-transform transform hover:scale-105 duration-500 opacity-0 ease-in-out ${isAnimating ? 'opacity-100' : 'opacity-100'}`}
                    >
                        <img 
                            src={client[current].img} 
                            alt={client[current].name} 
                            className='h-20 w-20 mx-auto rounded-full border-4 border-orange-600 transition-transform transform hover:scale-110'
                        />
                        <h4 className='text-xl text-orange-600 font-bold mt-4'>{client[current].name}</h4>
                        <p className='text-sm text-black leading-7 my-3 font-normal'>{client[current].msg}</p>
                    </div>
                </div>
                {/* Left Arrow */}
                <button 
                    onClick={handlePrevSlide} 
                    className='absolute top-1/2 transform -translate-y-1/2 left-0 bg-black bg-opacity-50 text-white p-3 rounded-full focus:outline-none hover:bg-opacity-75'>
                    <FaChevronLeft size={20} />
                </button>
                {/* Right Arrow */}
                <button 
                    onClick={handleNextSlide} 
                    className='absolute top-1/2 transform -translate-y-1/2 right-0 bg-black bg-opacity-50 text-white p-3 rounded-full focus:outline-none hover:bg-opacity-75'>
                    <FaChevronRight size={20} />
                </button>
            </div>

            {/* Reach Us Section */}
            <div className='w-full md:w-1/2 p-8 bg-gray-800 flex flex-col justify-center items-center text-center'>
                <h2 className='text-3xl font-bold text-orange-600 mb-6'>Reach Us</h2>
                <p className='text-sm leading-7 mb-6'>We are here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.</p>
                <form className='flex flex-col items-center gap-4'>
                    <input 
                        type='email' 
                        placeholder='Enter your email' 
                        className='w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-600' 
                    />
                    <button 
                        type='submit' 
                        className='bg-orange-600 text-white py-2 px-6 rounded-full hover:bg-orange-500 transition-all duration-300'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
};