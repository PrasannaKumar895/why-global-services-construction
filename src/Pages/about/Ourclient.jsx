import React from 'react'
import IMG1 from '../../images/IMG1.jpg';


export const Ourclient = () => {
  return (
    <div className='bg-gray-100'>
        {/* Our Clients */}
        <h2 className="text-center text-2xl sm:text-3xl font-bold my-8">Our Clients</h2>
        <div className="w-full h-auto">
          <div className="flex flex-wrap w-full">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="flex-1 min-w-[150px] mx-1 my-1"
              >
                <img
                  src={IMG1}
                  alt={`Client ${item}`}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

    </div>
  )
}
