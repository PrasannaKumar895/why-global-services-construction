import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import reviewer1 from '../images/reviewr1.jpg';
import reviewer2 from '../images/reviewr2.jpg';
import reviewer3 from '../images/reviewr3.jpg';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jane Doe',
      description: 'Exceptional renovation of our commercial building. The project was completed on schedule, and the quality is top-notch. Highly satisfied with the results!',
      post: 'CEO',
      profileImg: reviewer1,
      reviewImg: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/t82.jpg',
    },
    {
      name: 'Jane Doe',
      description: 'Outstanding work on our home extension. The team was punctual, communicative, and delivered exceptional results on time. We’re thrilled with the outcome!',
      post: 'CEO',
      profileImg: reviewer2,
      reviewImg: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/t82.jpg',
    },
    {
      name: 'Jane Doe',
      description: 'Exceptional renovation of our commercial building. The project was completed on schedule, and the quality is top-notch. Highly satisfied with the results!',
      post: 'CEO',
      profileImg: reviewer3,
      reviewImg: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/t82.jpg',
    },
  ];

  return (
    <div className="w-full  px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-0 lg:pt-10 ">
      <div className=" w-full relative pb-0 overflow-hidden">
        <p className='text-black text-center text-lg font-bold'>Testimonials</p>
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-black p-2 md:p-4 text-center lg:text-center">what our clients say<br/> about our company</p>
        <Slide
          className="bg-white  mx-auto"
          autoplay
          speed={6000}
          infinite
          prevArrow={<img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/t33.png" className="w-8 h-8 md:w-9 md:h-9 absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer" alt="Prev" />}
          nextArrow={<img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/t32.png" className="w-8 h-8 md:w-9 md:h-9 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" alt="Next" />}
          dots={false}
        >
          {testimonials.map((item, index) => (
            <div key={index} className="w-full p-2 ">
              {/* Each Slide Wrapper */}
              <div className="flex flex-col items-center text-center bg-white  w-full ">
                <div className="relative w-full flex items-center justify-center ">
                  <div className="absolute text-2xl md:text-3xl lg:text-4xl text-gray-900 left-4 md:left-5 top-2 md:top-3"></div>
                  <img src={item.profileImg} className="w-10 h-10 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full mb-4" alt={`${item.name} profile`} />
                </div>
                <p className="text-sm md:text-base lg:text-lg text-center px-6 md:w-1/2 text-gray-800 mb-4 overflow-hidden">{item.description}</p>
                <p className="text-base md:text-lg lg:text-xl font-bold text-orange-600 mb-1">{item.name}</p>
                {/* <p className="text-sm md:text-base lg:text-lg text-gray-600">{item.post}</p> */}
              </div>
            </div>
          ))}
        </Slide>
      </div>
      

      {/* Right Side Div for Slides */}
      
    </div>
  );
};