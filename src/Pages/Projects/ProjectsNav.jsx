import React from 'react';
import { Link, Outlet} from 'react-router-dom';


const OurProject = () => {
  let porjectLinks = [
    { name: "MODERN HIGH-RISE BUILDING", link: "/projects/high_rise" },
    { name: "LUXURY RESIDENTIAL COMPLEX", link: "/projects/luxury" },
    { name: "COMMERCIAL OFFICE SPACE", link: "/projects/commercial" }
  ];

  return (
    <div className="px-4 ">
      <nav className="flex justify-evenly flex-wrap lg:gap-8 gap-2 ">
        {porjectLinks.map((item, index) => (
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
      </nav>
     
      
     <Outlet />
    
    </div>
  );
};

export default OurProject;