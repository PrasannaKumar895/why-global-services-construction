import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Architectural from '../Components/Architectural';
import Pro_Management from '../Components/Pro_Management';

const OurServices = () => {
  let serviceLinks = [
    { name: "Architectural Design", link: "architecture" },
    { name: "Project Management", link: "pro_management" },
    { name: "Construction Planning", link: "construction_planning" },
    { name: "Residential Construction", link: "residential_construction" },
    { name: "Commercial Construction", link: "commercial_construction" },
    { name: "Renovation and Remodeling", link: "renovation_remodeling" },
  ];

  return (
    <div className="px-4 ">
      <nav className="flex justify-evenly" >
        {serviceLinks.map((item, index) => (
          <p key={index} className=' border-b-2 py-1 font-light border-black'>
            <Link to={item.link} className="text-orange-600 cursor-pointer">
              {item.name}
            </Link>
          </p>
        ))}
      </nav>
      <Architectural />

    

    
    </div>
  );
};

export default OurServices;