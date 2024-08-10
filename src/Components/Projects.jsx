import React from 'react'
import IMG4 from '../images/IMG4.jpg'
import IMG6 from '../images/IMG6.jpg'
import IMG7 from '../images/IMG7.jpg'

import { MdLocationPin } from "react-icons/md";

export const Project = () => {

    
    let project = [
        {
            Img: IMG4,
            title: "Modern High-Rise Building",
            description: "A state-of-the-art high-rise project featuring contemporary design and advanced construction techniques."
        },
        {
            Img: IMG6,
            title: "Contemporary Office Complex",
            description: "A modern office complex designed to foster collaboration and innovation with cutting-edge facilities."
        },
        {
            Img: IMG7,
            title: "Luxury Residential Tower",
            description: "A luxurious residential tower offering premium amenities and panoramic views of the city."
        },
        // {
        //     Img: pro_img,
        //     title: "Sustainable Urban Development",
        //     description: "A project focused on creating sustainable and eco-friendly urban spaces for future generations."
        // },
        // {
        //     Img: pro_img,
        //     title: "Cultural Landmark",
        //     description: "A landmark project that blends cultural heritage with modern architectural innovation."
        // }
    ]

    return (
        <div className='bg-gray-800 z-50  mt-5 pt-10'>
                    <div className="flex flex-col items-center justify-center py-4">
           <h2 className='text-center text-xl md:text-2xl lg:text-[2rem] text-orange-600 font-semibold'>Our Recent Projects</h2>
           <p className='font-light text-white'>Showcasing Our Expertise and Quality</p>
           </div>
       
        <div className='  md:w-[90%] m-auto lg:mt-[-5%] lg:py-28 px-12 py-10 w-full flex flex-col justify-center items-start gap-10 '>
                    


            {/* Project Grid */}
            <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-4 gap-10  bg-transparent '>
                {project.map((item, index) => (
                    <div key={index} className=' rounded-xl shadow-lg w-full overflow-hidden bg-orange-500  border-8  border-orange-500'>
                     <div className='bg-cover bg-center h-60 relative' style={{ backgroundImage: `url(${item.Img})` }}>
                                <div className='absolute top-3 right-3 bg-white flex rounded-lg items-center px-2 py-1'>
                                    <MdLocationPin className='text-orange-600' />
                                    <p className='text-black text-sm'>Anna Nagar</p>
                                </div>
                     </div>
                        <div className='flex flex-col  p-6'>
                            <h3 className='text-[1rem] text-black font-bold mb-2'>{item.title}</h3>
                            <p className='text-sm text-justify text-white mb-4'>{item.description}</p>
                            <button className='cursor-pointer px-4 py-2 bg-white text-orange-600 hover:bg-gray-100  rounded'>
                                More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default Project;