import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Button from './Button';
import { FiList } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
    let [open, setOpen] = useState(false);

    // Navigation links
    let links = [
        { name: "HOME", link: "/" },
        {
            name: "SERVICES", link: "#", subLinks: [
                { name: "ARCHITECTURAL DESIGN", link: "/" },
                { name: "PROJECT MANAGEMENT", link: "/" },
                { name: "CONSTRUCTION PLANNING", link: "/" },
                { name: "RESIDENTIAL CONSTRUCTION", link: "/" },
                { name: "COMMERCIAL CONSTRUCTION", link: "/" },
                { name: "RENOVATION", link: "/" },
                { name: "INTERIOR DESIGN", link: "/" },
                { name: "SUSTAINABLE BUILDING", link: "/" }
            ]
        },
        {
            name: "PROJECTS", link: "/projects", subLinks: [
                { name: "MODERN HIGH-RISE BUILDING", link: "/" },
                { name: "LUXURY RESIDENTIAL COMPLEX", link: "/" },
                { name: "COMMERCIAL OFFICE SPACE", link: "/" },
                { name: "URBAN RETAIL STORE", link: "/" },
                { name: "ECO-FRIENDLY COMMUNITY CENTER", link: "/" }
            ]
        },
        { name: "ABOUT", link: "/about-us" },
        { name: "BLOG", link: "/blog" },
        { name: "CONTACT", link: "/contact-us" },
    ];

    return (
        <div className='shadow-md w-full fixed top-0 left-0 bg-white z-50'>
            <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
                
                {/* Brand/Logo */}
                <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                    <p>Architech<span className='text-orange-600 text-3xl font-extrabold'>X</span></p>
                </div>

                {/* Mobile menu toggle button */}
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-5 cursor-pointer md:hidden'>
                    {open ? <IoMdClose /> : <FiList />}
                </div>

                {/* Navigation Links */}
                <ul className={`md:flex md:items-center absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-19 opacity-100' : 'top-[-460px]'} md:opacity-100 opacity-0`}>
                    {links.map((link) => (
                        <li key={link.name} className='md:ml-8 text-sm text-gray-800 hover:text-orange-600 duration-500 md:my-0 my-7 relative group'>
                            <Link to={link.link}>
                                {link.name}
                            </Link>
                            {/* Submenu */}
                            {link.subLinks && (
                                <ul className="absolute left-0 top-3 mt-2 bg-white shadow-lg rounded-lg w-48 hidden group-hover:block z-50">
                                    {link.subLinks.map((subLink) => (
                                        <li key={subLink.name} className="text-sm text-gray-800 hover:text-orange-600 py-2 px-4">
                                            <Link to={subLink.link}>
                                                {subLink.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    {/* Join Button */}
                    <button className='bg-orange-600 text-white py-2 text-sm px-6 rounded md:ml-8 hover:bg-orange-300 duration-500 mb-5 md:mb-0'>
                        Join
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default NavBar
