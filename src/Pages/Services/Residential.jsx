import React, { useState, useEffect } from 'react';
import banner_img from '../../images/ArchImgbanner.jpg';
import img_1 from '../../images/ArchImg1.jpg';
import img_2 from '../../images/ArchImg2.jpg';
import img_3 from '../../images/ArchImg3.jpg';
import img_4 from '../../images/ArchImg4.jpg';
import img_5 from '../../images/ArchImg5.jpg';
import { TiTick } from "react-icons/ti";

const Residential = () => {
    const images = [img_1, img_2, img_3, img_4, img_5];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
  
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        
        <div className='my-4 px-4'>
            {/* Banner Section */}
            <h1
                className='bg-cover bg-center text-white pl-8 py-8 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl relative overflow-hidden'
                style={{ backgroundImage: `url(${banner_img})`}}
            >
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
                <span className="relative text-orange-600 font-extrabold z-10">
                    Residential Construction
                </span>
            </h1>
            
    
            {/* Main Content */}
            <div className='flex flex-col md:flex-row justify-between gap-2 mt-4'>
               

                {/* Right Column - Image Grid */}
                <div className='md:w-[65%] flex flex-col gap-10 mt-4 md:mt-0'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                        <img 
                            src={img_1} 
                            alt="Project Image 1" 
                            className='w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-lg rounded-md'
                        />
                        <img 
                            src={img_2} 
                            alt="Project Image 2" 
                            className='w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-lg rounded-md'
                        />
                        <img 
                            src={img_3} 
                            alt="Project Image 3" 
                            className='w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-lg rounded-md'
                        />
                        <img 
                            src={img_4} 
                            alt="Project Image 4" 
                            className='w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-lg rounded-md'
                        />
                       
                    </div>
                </div>
                 {/* Left Column */}
                 <div className='md:w-[30%] bg-gray-800 text-white p-4 text-justify rounded-r-xl'>
                    <p>Residential construction involves creating comfortable, functional, and aesthetically pleasing homes tailored to your lifestyle and preferences. Our dedicated team ensures that every residential project, from single-family homes to multi-unit developments, is managed with precision and care. We handle all aspects of the construction process, delivering high-quality results that meet your expectations.</p>
                </div>
            </div>
    
            {/* Additional Sections */}
            <div className='flex flex-col md:flex-row gap-5 mt-8'>
                 {/* Contact Section */}
                 <div className="group md:w-[30%] bg-gray-400 rounded-md flex flex-col items-center justify-center gap-10 px-6 py-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 group-hover:blur-sm transition-all duration-300" style={{ backgroundImage: `url(${banner_img})` }}></div>
                    <h1 className="font-medium text-lg mt-6 text-white text-center z-10">
                        Do you have any questions?
                    </h1>
                    <p className="text-sm text-center text-white z-10">Contact us at the TheBuilt WP office nearest to you or submit a business inquiry online</p>
                    <button className="border-solid border-2 hover:text-white hover:bg-orange-600 text-orange-600 border-white px-4 py-2 z-10">Contact Us</button>
                </div>
                <div className='md:w-[70%] grid gap-4 grid-cols-1 sm:grid-cols-2'>
                    <div className='p-4'>
                        <h1 className='text-lg font-normal'>Custom Home Design and Planning</h1>
                        <p className='font-extralight text-justify'>We begin with a comprehensive consultation to understand your vision and needs. Our design team collaborates with you to create custom home plans that reflect your style and functional requirements.</p>
                    </div>
                    <div className='p-4 bg-orange-200'>
                        <h1 className='text-lg font-normal'>Material Selection and Sourcing</h1>
                        <p className='font-extralight text-justify'>We assist you in selecting high-quality materials that match your aesthetic preferences and budget. This includes Flooring, cabinetry, and countertops, Exterior finishes and roofing materials, Energy-efficient options and sustainable materials</p>
                    </div>
                    <div className='p-4 bg-orange-200'>
                        <h1 className='text-lg font-normal'>Quality Assurance and Inspections</h1>
                        <p className='font-extralight text-justify'>Quality is our top priority. We conduct thorough inspections at each stage of construction to ensure that all work meets our high standards and complies with building codes. We maintain open lines of communication throughout the construction process, providing regular updates</p>
                    </div>
                    <div className='p-4'>
                        <h1 className='text-lg font-normal'>Final Walkthrough and Handover</h1>
                        <p className='font-extralight text-justify'>Upon completion, we conduct a final walkthrough with you to ensure that everything meets your satisfaction. We provide all necessary documentation and guides for the care and maintenance of your new home.</p>
                    </div>
                </div>
    
               
            </div>
    
            {/* Service Provided Section */}
            <div className='flex flex-col md:flex-row gap-5 mt-8'>
                <div className='md:w-1/2'>
                    <h2 className='bg-orange-600 font-bold text-white px-4 py-2'>Addition Construction Step</h2>
                    <p className='text-md text-justify font-medium mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt dignissimos, ipsum soluta earum in ratione esse facilis. Soluta eveniet ex dolorum, quaerat repudiandae perferendis corporis laborum reprehenderit optio maiores? Consectetur.</p>
                    <ul className='flex flex-col justify-start mt-4'>
                        <li className='flex items-center gap-3 ml-4'><TiTick className='text-orange-600' /> Cost Reporting</li>
                        <li className='flex items-center gap-3 ml-4'><TiTick className='text-orange-600' /> Project Management</li>
                        <li className='flex items-center gap-3 ml-4'><TiTick className='text-orange-600' /> Quality Assurance</li>
                    </ul>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque earum sunt harum consequuntur, nesciunt architecto.</p>
                </div>
                <div className='md:w-1/2 bg-gray-800 rounded-md'>
                    <h2 className='text-xl px-10 pt-6 font-medium text-orange-600'>Service Provided</h2>
                    <div className='flex flex-col sm:flex-row'>
                        <div className='w-full sm:w-1/2 h-60 rounded-md flex justify-center items-center'>
                            <img src={images[currentIndex]} alt="Slideshow" className='w-full h-full object-cover py-4 sm:py-8' />
                        </div>
                        <div className='w-full sm:w-1/2 p-5 flex flex-col gap-4 text-orange-600'>
                            <p className='border-solid border-2 mt-4 px-4 py-2 border-white-500 hover:bg-orange-600 hover:text-white rounded-sm'>One</p>
                            <p className='border-solid border-2 px-4 py-2 border-white-500 hover:bg-orange-600 hover:text-white rounded-sm'>Two</p>
                            <p className='border-solid border-2 px-4 py-2 border-white-500 hover:bg-orange-600 hover:text-white rounded-sm'>Three</p>
                            <p className='border-solid border-2 px-4 py-2 border-white-500 hover:bg-orange-600 hover:text-white rounded-sm'>Four</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Content Section */}
            {/* <section className="py-16 flex justify-center items-center" id="section_2">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap gap-10 items-center">
                        <div className="flex justify-center w-full md:w-[40%] gap-10 items-center">
                            <div className="w-1/3 md:w-3/12">
                                <img
                                    src={banner_img}
                                    className="rounded-full shadow-2xl w-full h-auto"
                                    alt="Additional Content 1"
                                />
                            </div>
                            <div className="w-1/3 md:w-4/12">
                                <img
                                    src={banner_img}
                                    className="rounded-full shadow-2xl w-full h-auto"
                                    alt="Additional Content 2"
                                />
                            </div>
                            <div className="w-1/3 md:w-3/12">
                                <img
                                    src={banner_img}
                                    className="rounded-full shadow-2xl w-full h-auto"
                                    alt="Additional Content 3"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-5/12 ml-3 mb-8 lg:mb-0">
                            <small className="text-gray-500 uppercase tracking-wider">Content</small>
                            <h2 className="mt-2 mb-4 text-3xl text-orange-600 font-bold">
                                <span className="text-gray-500">Introducing</span> Moso
                            </h2>
                            <h4 className="text-gray-500 mb-3">
                                Since 1986, We crafted interior products for better spaces
                            </h4>
                            <p className="text-justify">
                                Moso Interior is a free Bootstrap 5 HTML CSS template for your website. Tooplate is one of the best websites to download 100% free HTML Templates for web designers and developers around the world. Thank you for visiting.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
}

export default Residential
