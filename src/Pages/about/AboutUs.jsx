import React from 'react';
import IMG1 from '../../images/IMG1.jpg';
import MainComponent from '../../main/Bannermain';
import { Counter } from './Counter';
import { Ourclient } from './Ourclient';
import { Testimonials } from '../../Components/Testiimonials';

export const AboutUs = () => {
  return (
    <div>
    <MainComponent/>
      {/* Our Services */}
      <div className="flex flex-col lg:flex-row  px-4 py-4 md:px-6 md:py-6 lg:py-8 lg:px-10">
        {/* Text Div */}
        <div className="bg-white lg:w-1/2 p-4 lg:p-8 flex flex-col justify-center">
        <p className='text-orange-600 py-2 text-lg'>Welcome to our company</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
  Delivering <span className="text-orange-600">25+ years</span> of exceptional services to global industries.
</h2>

          <p className="text-gray-700 text-sm lg:text-base mb-4 text-justify">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying in the 15th century who is thought to have scrambled parts of for use in a type specimen book. It usually begins consectetur.
          </p>
          
          <p className="text-gray-700 text-sm lg:text-base mb-4 text-justify">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying in the 15th century who is thought to have scrambled parts of for use in a type specimen book. It usually begins consectetur.
          </p>
        </div>

        {/* Image Div */}
        <div className="lg:w-1/2 p-4 lg:p-8 flex items-center justify-center">
          <img
            src={IMG1}
            alt="Industrial Services"
            className="w-full h-auto lg:h-full object-cover rounded-lg transition-transform hover:scale-105 hover:shadow-lg  duration-300"
          />
        </div>
      </div>

      {/* Statistics */}
      <Counter/>
      <Testimonials/>
      <Ourclient/>


            

      {/* Our Team */}
      {/* <h2 className="text-center text-2xl sm:text-3xl font-bold my-8">Our Team</h2>
      <div className="flex flex-wrap p-4 lg:p-6">
        {['Jane Doe', 'Mike Ross', 'John Doe'].map((name, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 hover:shadow-orange-400 duration-300">
              <img src={IMG1} alt={name} className="w-full h-auto object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-gray-600">Role Description</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>{name.toLowerCase().replace(' ', '@example.com')}</p>
                <button className="w-full py-2 text-white bg-orange-600 hover:bg-orange-400 mt-5 rounded-lg">
                  Contact
                </button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};