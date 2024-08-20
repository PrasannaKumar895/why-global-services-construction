import React from 'react'
import IMG1 from '../../images/IMG1.jpg';

const MainComponent =()=>{
    return (
        <div>
          <div className="bg-gray-800 text-white text-center ">
              <img
                src={IMG1}
                alt="About Us"
                className="w-full h-[200px] object-cover rounded-lg"
              />
            </div>
        </div>
      )
}

export default MainComponent