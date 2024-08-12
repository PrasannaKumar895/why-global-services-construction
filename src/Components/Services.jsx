import React from 'react';
// import { BsFillBuildingsFill } from "react-icons/bs";
import { FaBuildingColumns } from "react-icons/fa6";
import { IoNewspaper } from "react-icons/io5";
import { MdOutlineConstruction } from "react-icons/md";
import { BsBuildingFillGear } from "react-icons/bs";
import { FaHammer } from "react-icons/fa6";
import { MdChair } from "react-icons/md";
import { IoHome } from "react-icons/io5";
// import { GiPlantRoots } from "react-icons/gi";
import { PiPlantFill } from "react-icons/pi";

export const Services = () => {
    let   services = [
        { name: "Architectural Design", icon: <FaBuildingColumns />, title: "Innovative Architectural Design", description: "Our team creates visually stunning and functional architectural designs tailored to your vision and needs" },
        { name: "Project Management", icon: <IoNewspaper />, title: "Efficient Project Management", description: "We ensure your projects are completed on time and within budget with our expert project management services." },
        { name: "Construction Planning", icon: <MdOutlineConstruction />, title: "Detailed Construction Planning", description: "Our meticulous planning process guarantees every aspect of your construction project is carefully considered and executed." },
        { name: "Residential Construction", icon: <IoHome />, title: "Quality Residential Construction", description: "Building homes with superior craftsmanship and attention to detail, ensuring comfort and durability." },
        { name: "Commercial Construction", icon: <BsBuildingFillGear />, title: "Robust Commercial Construction", description: "From office buildings to retail spaces, we deliver commercial construction solutions that meet your business needs." },
        { name: "Renovation and Remodeling", icon: <FaHammer />, title: "Expert Renovation and Remodeling", description: "Transform existing spaces with our renovation and remodeling services, adding value and functionality to your property" },
        { name: "Interior Design", icon: <MdChair />, title: "Stylish Interior Design", description: "Our interior design services bring your spaces to life with creative and practical solutions." },
        { name: "Sustainable Building", icon: <PiPlantFill />, title: "Sustainable Building Practices", description: "We incorporate eco-friendly and sustainable building practices to minimize environmental impact." },
    ];

    return (
        <div className=' flex flex-col items-center rounded-lg p-4'>
            <div className="flex flex-col items-center justify-center mb-10">
                <h2 className='text-center text-xl md:text-2xl lg:text-[2rem] text-orange-600 font-semibold'>Comprehensive Construction Solutions</h2>
                <p className='font-light text-sm md:text-base lg:text-lg'>From Concept to Completion</p>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-[90%] justify-center items-center gap-5 bg-transparent p-2'>
                {services.map((item, index) => (
                    <div key={index} className=' bg-white shadow-lg  h-full px-3 py-4 flex flex-col justify-center items-start gap-1 rounded-xl border-b-4 border-orange-600'>
                        <div className='p-4 rounded-full bg-orange-600 text-white'>
                            {item.icon}
                        </div>
                        <h2 className='text-orange-600 text-base md:text-lg lg:text-[0.9rem] font-bold'>{item.name}</h2>
                        <h4 className='text-black text-sm lg:text-[0.8rem] md:text-base font-medium'>
                            {item.title}
                        </h4>
                        <p className='text-xs font-normal md:text-sm lg:text-[0.9rem] text-justify text-slate-600'>{item.description}</p>
                        <button className='border-b-2 cursor-pointer border-orange-600 text-orange-600 text-xs md:text-sm font-semibold mt-2'>Learn More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};