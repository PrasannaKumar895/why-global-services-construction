import React from 'react';
import IMG3 from '../images/IMG3.jpg'; // Replace with actual image paths
import IMG5 from '../images/IMG5.jpg'
import IMG9 from '../images/IMG5 (2).jpg'
import IMG8 from '../images/IMG8.jpg'




export const About = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center bg-white py-20 px-6 md:px-12 lg:px-24'>
            {/* Left Side: Heading and Content */}
            <div className='flex flex-col gap-3 w-full md:w-1/2 mb-8 md:mb-0 md:pr-8'>
                <h2 className='text-xl md:text-2xl lg:text-[2rem] text-orange-600 font-semibold mb-3'>
                    About Us
                </h2>
                <p className='text-gray-700 text-justify font-thin text-base md:text-lg lg:text-md'>
                    We are a dedicated team of professionals committed to delivering high-quality projects. Our expertise spans across various domains, and we pride ourselves on our innovative approaches and exceptional service.
                </p>
                <p className='text-gray-700 text-justify font-thin text-base md:text-lg lg:text-md'>
                    Our mission is to create sustainable and efficient solutions that meet the unique needs of each client. We believe in the power of collaboration and work closely with our clients to bring their visions to life.
                </p>
                <p className='text-gray-700 text-justify font-thin text-base md:text-lg lg:text-md '>
                    We are a dedicated team of professionals committed to delivering high-quality projects. 
                </p>
                <div>
                <button className=' border border-orange-600 hover:bg-orange-600 hover:text-white rounded-md px-3 py-1'> Read More... </button>
                </div>
               
            </div>

            {/* Right Side: Image Collage with Different Angles */}
            <div className='w-full md:w-1/2'>
                <div className='grid grid-cols-2 grid-rows-2 '>
                    <img src={IMG3} alt='Team Image 1' className='w-full h-40 md:h-48 lg:h-70 object-cover rounded-lg transform rotate-12 border-8  border-orange-500' />
                    <img src={IMG5} alt='Team Image 2' className='w-full h-40 md:h-48 lg:h-70 object-cover rounded-lg transform -rotate-3 border-8  border-orange-500' />
                    <img src={IMG8} alt='Team Image 3' className='w-full h-40 md:h-48 lg:h-70 object-cover rounded-lg transform rotate-6 border-8  border-orange-500' />
                    <img src={IMG9} alt='Team Image 4' className='w-full h-40 md:h-48 lg:h-70 object-cover rounded-lg transform -rotate-6 border-8  border-orange-500' />
                </div>
            </div>
        </div>
    );

}