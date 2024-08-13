import React from 'react';
import banner_img from '../../images/IMG1.jpg';
import { FaRegUserCircle } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { SiZedindustries } from "react-icons/si";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk, MdDoubleArrow } from "react-icons/md";
import { FaStar } from 'react-icons/fa';


const CommercialBuilding = () => {
 
    const detail = [
        { name: "Client", desc: "Marvin Kinney1", icon: <FaRegUserCircle /> },
        { name: "Location", desc: "Anna Nagar, Chennai", icon: < IoLocationOutline /> },
        { name: "Project Value", desc: "$ 28,300 USD", icon: <AiOutlineDollarCircle /> },
        { name: "Project Size", desc: "31,400 Sq Ft.", icon: <SiZedindustries /> },
    ];

    const list = [
        { des: "Sit vulputate aliquam cras aliquam. Et, nibh congue consequat pellentesque." },
        { des: "Sit vulputate aliquam cras aliquam. Et, nibh congue consequat pellentesque." },
        { des: "Sit vulputate aliquam cras aliquam. Et, nibh congue consequat pellentesque." },
        { des: "Sit vulputate aliquam cras aliquam. Et, nibh congue consequat pellentesque." },
        { des: "Sit vulputate aliquam cras aliquam. Et, nibh congue consequat pellentesque." },
    ];

    const reviews = [
        {
            id: 1,
            image: banner_img,
            message: 'This company provided excellent service and the team was very professional.',
            rating: 4,
            name: 'John Doe',
            position: 'CEO, ExampleCorp',
        },
        {
            id: 1,
            image: banner_img,
            message: 'This company provided excellent service and the team was very professional.',
            rating: 5,
            name: 'John Doe',
            position: 'CEO, ExampleCorp',
        },
        
    ];

    return (
        <div className='p-4 sm:p-6 lg:py-4'>
            <h2 className='font-medium text-lg px-4 pb-2'>Modern High-Rise Building</h2>
            <p className='font-extralight px-4 pb-4'>
                A state-of-the-art high-rise project featuring contemporary design and advanced construction techniques.
            </p>

            <div className='flex flex-col px-3 lg:flex-row gap-10'>
                {/* Image Section */}
                <div className='w-full lg:w-[60%] bg-slate-500'>
                    <img src={banner_img} alt="Project" className='w-full h-auto rounded-md' />
                </div>

                {/* Details Section */}
                <div className='w-full lg:w-[30%] border-2 flex flex-col gap-2 border-gray-300 rounded-md p-4'>
                    {detail.map((item, index) => (
                        <div key={index} className='flex justify-between items-center pb-4 px-6'>
                            <div className='flex items-center'>
                                <div className='flex flex-col'>
                                    <h2 className='text-md font-medium'>{item.name}</h2>
                                    <p className='text-sm font-light'>{item.desc}</p>
                                </div>
                            </div>
                            <div className='text-orange-600 text-xl'>
                                {item.icon}
                            </div>
                        </div>
                    ))}

                    {/* Connect Section */}
                    <div className='border-b-2 border-gray-300 pb-2'>
                        <h2 className='text-md font-medium'>Connect</h2>
                    </div>
                    <div className='flex items-center justify-center mt-2'>
                        <IoMailOpenOutline className='text-orange-600 text-lg mr-2' />
                        <h2 className='text-md'>info@example.com</h2>
                    </div>
                    <div className='flex items-center justify-center'>
                        <MdOutlinePhoneInTalk className='text-orange-600 text-lg mr-2' />
                        <h2 className='text-md'>+91 123 456 7890</h2>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <button className='bg-orange-600 text-white px-6 py-2 rounded'>
                            Get Contact
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:items-start lg:flex-row w-full gap-8 mt-8'>
                <div className='w-full lg:w-[30%] border-2 p-4 border-red-300'>
                    <div>
                        <h4 className='font-extrabold text-2xl sm:text-4xl lg:text-5xl'>SOMEDAY IS NOW"</h4>

                        <p className='p-2 font-light text-sm sm:text-base'>
                            Living in a modern home is no longer about someday, it’s accessible now. Connect Homes offers curated design options with the efficiency of modern prefab house manufacturing. If you’re seeking lots of natural light, open-concept floor plans and a stress-free build process, you’ve come to the right place.
                        </p>
                    </div>
                    <div className="bg-gray-100 py-6 sm:py-8 lg:py-7 w-full">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 lg:mb-12">Happy Client</h2>
                            <div className="flex flex-col lg:flex-col md:flex-row gap-4">
                                {reviews.map((review) => (
                                    <div key={review.id} className="bg-white hover:bg-orange-100 rounded-lg shadow-lg p-6 flex items-center">
                                        <div className='flex flex-col  text-center justify-center items-center'>
                                            <img
                                                src={review.image}
                                                alt={review.name}
                                                className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-2 border-orange-600 object-cover mb-4"
                                            />
                                            <p className="text-gray-700 text-justify font-thin text-xs sm:text-sm py-2">{review.message}</p>
                                            <div className="flex items-center mb-4">
                                                {Array.from({ length: review.rating }).map((_, index) => (
                                                    <FaStar key={index} className="text-yellow-500 mr-1" />
                                                ))}
                                            </div>
                                            <p className="font-bold text-gray-800">{review.name}</p>
                                            <p className="text-sm text-gray-500">{review.position}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-[68%] bg-orange-200 p-4 h-fit'>
                    <h1 className='font-bold text-lg'>Project Overview</h1>
                    <p className='py-2'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, doloribus quasi perspiciatis eum, sequi, quibusdam facilis id sit enim est autem porro earum eligendi cumque! Labore autem consequuntur impedit optio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, doloribus quasi perspiciatis eum,  sequi, quibusdam facilis id sit enim est autem porro earum eligendi cumque! Labore autem consequuntur impedit optio!
                    </p>
                    <div
                        className="relative mt-3 bg-cover bg-center h-[300px] sm:h-[400px] flex items-center justify-center"
                        style={{ backgroundImage: `url(${banner_img})` }}
                    >
                        <div className="bg-white bg-opacity-80 p-6 sm:p-8 rounded-lg text-center max-w-md mx-auto">
                            <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-4">Ready To Race</h2>
                            <p className="text-sm sm:text-lg text-orange-600">
                                Get ready to build your future house and explore new things that might inspire you.
                            </p>
                        </div>
                    </div>
                    <p className='pt-4'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, doloribus quasi perspiciatis eum, sequi, quibusdam facilis id sit enim est autem porro earum eligendi cumque! Labore autem consequuntur impedit optio!
                    </p>
                    <div className='bg-orange-200'>
                        <h2 className='text-center font-bold py-1'>Our Works</h2>
                        <div className='flex flex-wrap gap-4 justify-between p-4'>
                            <img className='w-[45%] sm:w-[30%] lg:w-[20%] h-auto rounded-md' src={banner_img} alt="Work 1" />
                            <img className='w-[45%] sm:w-[30%] lg:w-[20%] h-auto rounded-md' src={banner_img} alt="Work 2" />
                            <img className='w-[45%] sm:w-[30%] lg:w-[20%] h-auto rounded-md' src={banner_img} alt="Work 3" />
                            <img className='w-[45%] sm:w-[30%] lg:w-[20%] h-auto rounded-md' src={banner_img} alt="Work 4" />
                            
                        </div>
                    </div>

                    <div className='p-4 bg-white'>
                        <h1 className='text-lg font-semibold py-2'>Services Offered</h1>
                        <div>
                            {list.map((item, index) => (
                                <div key={index} className='flex items-center gap-2 p-2'>
                                    <MdDoubleArrow className='text-orange-600' />
                                    <p>{item.des}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommercialBuilding
