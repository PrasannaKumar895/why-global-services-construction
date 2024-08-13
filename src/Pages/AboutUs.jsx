import React from 'react';
import IMG1 from '../images/IMG8.jpg';

export const AboutUs = () => {
  return (
    <div className='pb-20'>
      {/* About Section */}
      <div className="bg-gray-800 text-white text-center p-8 md:p-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">About Us Page</h1>
      </div>

      {/* Our Services */}
      <div className="flex flex-col lg:flex-row w-full h-auto lg:h-screen p-4 lg:p-8 xl:p-20">
        {/* Text Div */}
        <div className="bg-white lg:w-1/2 p-4 lg:p-8 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            We offer the best industrial services <span className="text-orange-600">& 25+ years</span> of work experience with global industries.
          </h2>
          <p className="text-gray-700 text-sm lg:text-base mb-4">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying in the 15th century who is thought to have scrambled parts of for use in a type specimen book. It usually begins consectetur.
          </p>
          <p className="text-gray-700 text-xs lg:text-sm font-semibold bg-orange-100 p-4 relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-orange-500 before:mr-4">
            Lorem ipsum or lipsum as it is sometimes known is dummy used laying in the century who is thought to have scrambled parts of for use in a type specimen book. It usually begins consectetur.
          </p>
          <p className="text-gray-700 text-sm lg:text-base mb-4">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying in the 15th century who is thought to have scrambled parts of for use in a type specimen book. It usually begins consectetur.
          </p>
        </div>

        {/* Image Div */}
        <div className="lg:w-1/2 p-4 lg:p-8 flex items-center justify-center">
          <img
            src={IMG1}
            alt="Industrial Services"
            className="w-full h-auto lg:h-full object-cover rounded-lg transition-transform hover:scale-105 hover:shadow-lg hover:shadow-orange-400 duration-300"
          />
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-orange-400 py-6 sm:py-8 w-full lg:w-4/5 xl:w-3/4 mx-auto flex items-center justify-center rounded-xl hover:bg-orange-600">
        <div className="flex flex-wrap items-center justify-around w-full max-w-3xl px-4">
          {['985 Projects', '529 Clients', '888 Success', '100 Awards'].map((text, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center px-2 py-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">{text.split(' ')[0]}</h3>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mt-2">{text.split(' ')[1]}</p>
              </div>
              {index < 3 && <div className="border-l-4 border-white h-10 sm:h-12 lg:h-16"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Our Clients */}
      <h2 className="text-center text-2xl sm:text-3xl font-bold my-8">Our Clients</h2>
      <div className='w-full h-auto bg-orange-500'>
        <div className='flex flex-wrap w-full'>
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className='flex-1 min-w-[150px] mx-1 my-1'
            >
              <img
                src={IMG1} 
                alt={`Client ${item}`}
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
          ))}
        </div>
      </div>

      {/* Our Team */}
      <h2 className="text-center text-2xl sm:text-3xl font-bold my-8">Our Team</h2>
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
                <button className="w-full py-2 text-white bg-orange-600 hover:bg-orange-400">
                  Contact
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};