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
    <div className="w-full h-auto lg:h-[100%] flex flex-col lg:flex-row p-4 lg:p-4 bg-orange-600">
      <div className="lg:w-1/2 w-full h-auto lg:h-[100%] relative pb-0 overflow-hidden">
        <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white p-2 md:p-8 text-center lg:text-center">Testimonials</p>
        <Slide
          className="bg-white shadow-lg rounded-2xl p-6 lg:p-8 mx-auto"
          autoplay
          speed={6000}
          infinite
          prevArrow={<img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/t33.png" className="w-8 h-8 md:w-9 md:h-9 absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer" alt="Prev" />}
          nextArrow={<img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/t32.png" className="w-8 h-8 md:w-9 md:h-9 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" alt="Next" />}
          dots={false}
        >
          {testimonials.map((item, index) => (
            <div key={index} className="flex flex-wrap justify-center w-full p-2 md:p-4">
              {/* Each Slide Wrapper */}
              <div className="flex flex-col items-center text-center bg-white p-4 md:p-5 rounded-lg shadow-md mx-2 w-full max-w-md lg:max-w-lg">
                <div className="relative w-full flex items-center justify-center mb-4">
                  <div className="absolute text-2xl md:text-3xl lg:text-4xl text-gray-900 left-4 md:left-5 top-2 md:top-3">“</div>
                  <img src={item.profileImg} className="w-10 h-10 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full mb-4" alt={`${item.name} profile`} />
                </div>
                <p className="text-sm md:text-base lg:text-lg text-gray-800 mb-4 md:mb-6 overflow-hidden">{item.description}</p>
                <p className="text-base md:text-lg lg:text-xl font-extrabold text-gray-900 mb-1">{item.name}</p>
                <p className="text-sm md:text-base lg:text-lg text-gray-600">{item.post}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      {/* Left Side Div */}
      <div className="lg:w-1/2 w-full flex justify-center items-center mb-8 lg:mb-0">
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-white shadow-lg rounded-2xl p-6 lg:p-8 max-w-md lg:max-w-lg w-full h-full flex flex-col">
            <p className="text-orange-600 text-2xl lg:text-3xl font-bold mb-4 text-center">Get Quotation</p>
            <form className="flex flex-col h-full">
              <div className="grid gap-4 md:grid-cols-2 flex-grow">
                <div>
                  <p className="text-black text-base lg:text-lg font-semibold">Name</p>
                  <input className="w-full h-10 lg:h-12 px-3 lg:px-4 text-base lg:text-lg border-b-2 border-gray-300 focus:outline-none rounded-md" type="text" name="FirstName" />
                </div>
                
                <div>
                  <p className="text-black text-base lg:text-lg font-semibold">Email</p>
                  <input className="w-full h-10 lg:h-12 px-3 lg:px-4 text-base lg:text-lg border-b-2 border-gray-300 focus:outline-none rounded-md" type="email" name="Email" />
                </div>
               
                <div className="md:col-span-2">
                  <p className="text-black text-base lg:text-lg font-semibold mb-2 lg:mb-3">Message</p>
                  <textarea className="w-full h-24 lg:h-32 px-3 lg:px-4 text-base lg:text-lg border-2 border-gray-200 rounded-lg bg-gray-100 focus:outline-none" placeholder="Write your message..."></textarea>
                </div>
              </div>
              <button className="lg:mt-8 mt-4 bg-orange-600 text-white font-semibold py-2 lg:py-3 px-4 lg:px-6 rounded-full w-full md:w-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Right Side Div for Slides */}
      
    </div>
  );
};