//import img_1 from '../assets/banner_cons.jpg'
import img_1 from '../../images/IMG7.jpg'
import img_2 from  '../../images/IMG8.jpg'
// import img_2 from '../assets/img_2.jpg'
// import img_3 from '../assets/img_3.jpg'

// import img_4 from '../assets/img_4.jpg'

// import img_5 from '../assets/img_5.jpg'

import { TiTick } from "react-icons/ti";
import React, { useState, useEffect } from 'react';

const Architectural = () => {
    const images = [
        img_1,
        img_2,
        img_1,
        img_2,
        img_1
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

  return (
    <div className='mb-5'>
       <h1 
    className='bg-cover bg-center text-white pl-8 py-8 font-semibold text-2xl relative overflow-hidden'
    style={{ backgroundImage: `url(${img_1}) `}}
>
    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div> 
    <span className="relative text-orange-600 font-extrabold font-2xl z-10">Architecture Design</span>
</h1>


        <div className='flex justify-between gap-2'>
            <div className='w-[30%] bg-gray-800 text-white mt-2 px-4 py-2 text-justify rounded-r-xl'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, aut. Libero, culpa vitae? Ullam, quod hic neque similique perferendis atque et aliquam sit, harum enim sed consequuntur. Delectus, sint illum!</p>
            </div>
            <div className='w-[65%] mt-2 flex flex-col gap-20'>
    <div className='flex w-full justify-between px-3 py-3'>
        <img 
            src={img_1} 
            alt="" 
            className='w-[20%] transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-lg rounded-md'
        />
        <img 
            src={img_1} 
            alt="" 
            className='w-[20%] transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-lg rounded-md'
        />
        <img 
            src={img_1} 
            alt="" 
            className='w-[20%] transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-lg rounded-md'
        />
        <img 
            src={img_1} 
            alt="" 
            className='w-[20%] transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-lg rounded-md'
        />
    </div>
</div>

        </div>
        <div className='flex w-full gap-5 '>
        <div className=' w-[70%] grid gap-2 grid-cols-2 my-4'>
            <div className='p-4 '>
                <h1 className='text-lg  font-normal'>First Heading</h1>
                <p className=' font-extralight text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, consequuntur temporibus? Voluptatem laudantium reiciendis rerum! Deleniti hic labore optio dolorem at, reprehenderit, expedita, neque harum excepturi voluptatibus delectus quasi quo.</p>
            </div>
            <div className='p-4 bg-orange-200 '>
                <h1 className='text-lg  font-normal'>First Heading</h1>
                <p className=' font-extralight text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, consequuntur temporibus? Voluptatem laudantium reiciendis rerum! Deleniti hic labore optio dolorem at, reprehenderit, expedita, neque harum excepturi voluptatibus delectus quasi quo.</p>
            </div>
            <div className='p-4 bg-orange-200 '>
                <h1 className='text-lg  font-normal'>First Heading</h1>
                <p className=' font-extralight text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, consequuntur temporibus? Voluptatem laudantium reiciendis rerum! Deleniti hic labore optio dolorem at, reprehenderit, expedita, neque harum excepturi voluptatibus delectus quasi quo.</p>
            </div>
            <div className='p-4 '>
                <h1 className='text-lg  font-normal'>First Heading</h1>
                <p className=' font-extralight text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, consequuntur temporibus? Voluptatem laudantium reiciendis rerum! Deleniti hic labore optio dolorem at, reprehenderit, expedita, neque harum excepturi voluptatibus delectus quasi quo.</p>
            </div>
           
        </div>
        <div className='w-[30%] bg-gray-400 rounded-md flex flex-col items-center justify-center gap-10 px-10 py-8 my-4'>
            <h1 className='font-light mt-6'>
                Do you have any questions?
            </h1>
            <p className='text-sm'>Contact us at the TheBuilt WP office nearest to you or submit a business inquiry online</p>
            <button className="border-solid border-2 border-white px-4 py-2" >Contact Us</button>
         
        </div>
        {/* <div 
            className='w-[30%] bg-gray-400 rounded-md flex flex-col items-center justify-center gap-10 px-10 py-8 my-4 transition-all duration-500'
            style={{ 
                backgroundImage: url(${img_1}),
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
            >
            <h1 className='font-light mt-6'>
                Do you have any questions?
            </h1>
            <p className='text-sm'>Contact us at the TheBuilt WP office nearest to you or submit a business inquiry online</p>
            <button className="border-solid border-2 border-white px-4 py-2">Contact Us</button>
        </div> */}
        {/* <div className='w-[30%] bg-gray-400 rounded-md flex flex-col items-center justify-center gap-10 px-10 py-8 my-4'>
            <h1 className='font-light mt-6'>
                Do you have any questions?
            </h1>
            <p className='text-sm'>Contact us at the TheBuilt WP office nearest to you or submit a business inquiry online</p>
            <div className='w-full flex justify-center'>
                <img 
                    src={img_1} 
                    alt="Contact Us" 
                    className='w-full transition-all duration-500 hover:filter hover:blur-md'
                />
            </div>
            <button className="border-solid border-2 border-white px-4 py-2">Contact Us</button>
        </div> */}

        </div>
        <div className='flex gap-10 p-2 '>
            <div className='w-1/2'>
                <h2 className='bg-orange-600 font-bold text-white px-4 w-[70%] py-2'>Additon Construction Step</h2>

                <p className='text-md text-justify font-medium  mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt dignissimos, ipsum soluta earum in ratione esse facilis. Soluta eveniet ex dolorum, quaerat repudiandae perferendis corporis laborum reprehenderit optio maiores? Consectetur.</p>
                <ul className='flex flex-col justify-start' >
                    <li className='flex items-center gap-3 ml-4' ><TiTick className='text-orange-600' />Cost Reporting</li>
                    <li className='flex items-center gap-3 ml-4' ><TiTick className='text-orange-600' />Cost Reporting</li>
                    <li className='flex items-center gap-3 ml-4' ><TiTick className='text-orange-600' />Cost Reporting</li>
                    
                </ul>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque earum sunt harum consequuntur, nesciunt architecto.</p>
            </div>
            <div className='w-1/2  bg-gray-800 rounded-md'>
            <h2 className='text-xl px-10 pt-6 font-medium text-orange-600'>Service Provided</h2>
            {/* <div className='flex bg-gray-800'>
            <div className='w-[50%] h-[50%]'>
                <img src={img_1} alt="" /></div>
                <div className='w-1/2 p-5 flex flex-col gap-1 text-orange-600'> 
                <p className='border-solid border-2 px-4 py-2 border-white-500 hover:bg-orange-600 hover:text-white rounded-sm' >One</p>
                <p className='border-solid border-2 px-4 py-2 border-white-500 hover:bg-orange-600 hover:text-white rounded-sm' >One</p>
                <p className='border-solid border-2 px-4 py-2 border-white-500 hover:bg-orange-600 hover:text-white rounded-sm' >One</p>
                <p className='border-solid border-2 px-4 py-2 border-white-500 hover:bg-orange-600 hover:text-white rounded-sm' >One</p>
                
                </div>
            </div> */}
            <div className='flex'>
            <div className='w-1/2 h-[30%] rounded-md'>
                <img src={images[currentIndex]} alt="Slideshow" className='w-[80%] py-8 px-5 h-[80%] object-cover' />
            </div>
            <div className='w-1/2 p-5 flex flex-col gap-4 text-orange-600'>
                <p className='border-solid border-2 mt-4 px-4 py-2 border-white-500 hover:bg-orange-600 hover:text-white rounded-sm'>One</p>
                <p className='border-solid border-2 px-4 py-2 border-white-500 hover:bg-orange-600 hover:text-white rounded-sm'>Two</p>
                <p className='border-solid border-2 px-4 py-2 border-white-500 hover:bg-orange-600 hover:text-white rounded-sm'>Three</p>
                <p className='border-solid border-2 px-4 py-2 border-white-500 hover:bg-orange-600 hover:text-white rounded-sm'>Four</p>
            </div>
        </div>
           
            </div>
         
            
        </div>
       </div>
  )
}

export default Architectural