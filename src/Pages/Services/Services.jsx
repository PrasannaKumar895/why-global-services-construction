import { React } from 'react';
import { Outlet } from 'react-router-dom';

const OurServices = () => {
  return (
    <div className="px-4">
      {/* Remove or comment out the navigation code to prevent rendering the list of services */}
      {/* <nav className="flex justify-evenly flex-wrap lg:gap-6 gap-2 ">
        {serviceLinks.map((item, index) => (
          <p
            key={index}
            className="border-b-2 rounded-b-md lg:py-1 py-1 font-light hover:border-black 
                       text-sm sm:text-base md:text-lg lg:text-md"
          >
            <Link to={item.link} className="text-orange-600 cursor-pointer">
              {item.name}
            </Link>
          </p>
        ))}
      </nav> */}
      
      <Outlet />
    </div>
  );
};

export default OurServices;
