import {React, useEffect} from 'react';
import { Link, Outlet} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const OurServices = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // Automatically navigate to /services/architecture when /services is accessed
  //   navigate('/services/architecture');
  // }, [navigate]);

  // services
  let serviceLinks = [
    { name: "Architectural Design", link: "/services/architecture" },
    { name: "Project Management", link: "/services/pro_management" },
    { name: "Construction Planning", link: "/services/construction" },
    { name: "Residential Construction", link: "/services/residential" },
    { name: "Commercial Construction", link: "/services/commercial" },
    { name: "Renovation and Remodeling", link: "/services/renovation" },
  ];

  return (
    <div className="px-4">
      <nav className="flex justify-evenly flex-wrap lg:gap-6 gap-2 ">
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
      </nav>
     
      
     <Outlet />
    
    </div>
  );
};

export default OurServices;