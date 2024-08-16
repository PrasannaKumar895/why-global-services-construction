import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiList } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false); 

    // Navigation links
    const links = [
        { name: "HOME", link: "/" },
        {
            name: "SERVICES", link: "/services", subLinks: [
                { name: "ARCHITECTURAL DESIGN", link: "/services/architecture" },
                { name: "PROJECT MANAGEMENT", link: "/services/pro_management" },
                { name: "CONSTRUCTION PLANNING", link: "/services/construction" },
                { name: "RESIDENTIAL CONSTRUCTION", link: "/services/residential" },
                { name: "COMMERCIAL CONSTRUCTION", link: "/services/commercial" },
                { name: "RENOVATION", link: "/services/renovation" },
            ]
        },
        {
            name: "PROJECTS", link: "/projects", subLinks: [
                { name: "MODERN HIGH-RISE BUILDING", link: "/projects/high_rise" },
                { name: "LUXURY RESIDENTIAL COMPLEX", link: "/projects/luxury" },
                { name: "COMMERCIAL OFFICE SPACE", link: "/projects/commercial" },
            ]
        },
        { name: "ABOUT", link: "/about-us" },
        { name: "BLOG", link: "/blog" },
        { name: "CONTACT", link: "/contact" },
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
                <ul className={`md:flex md:items-center absolute md:static bg-white shadow-none md:z-auto z-[-1] right-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear ${open ? 'top-19 opacity-100 w-1/2 rounded-md shadow-xl ' : 'top-[-460px]'} md:opacity-100 opacity-0`} >
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
                    <button
                        onClick={() => setShowPopup(true)} // Show popup on click
                        className='bg-orange-600 text-white py-2 text-sm px-6 rounded md:ml-8 hover:bg-orange-300 duration-300 mb-5 md:mb-0'>
                        Join
                    </button>
                </ul>
            </div>

            {/* Popup */} 
            {showPopup && (
                    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
                        <div className="bg-white shadow-lg rounded-2xl p-6 lg:p-8 max-w-md lg:max-w-lg w-full h-auto max-h-[90vh] flex flex-col relative">
                            <p className="text-orange-600 text-2xl lg:text-3xl font-bold mb-4 text-center">Get Quotation</p>
                            <form className="flex flex-col h-full">
                                <div className="grid gap-4 md:grid-cols-2 flex-grow">
                                    <div>
                                        <p className="text-black text-base lg:text-lg font-semibold mb-2 lg:mb-3">Name</p>
                                        <input className="w-full h-10 lg:h-12 px-3 lg:px-4 text-base lg:text-lg border-b-2 border-gray-300 focus:outline-none rounded-md" type="text" name="FirstName" />
                                    </div>
                                    
                                    <div>
                                        <p className="text-black text-base lg:text-lg font-semibold mb-2 lg:mb-3">Email</p>
                                        <input className="w-full h-10 lg:h-12 px-3 lg:px-4 text-base lg:text-lg border-b-2 border-gray-300 focus:outline-none rounded-md" type="email" name="Email" />
                                    </div>
                                
                                    <div className="md:col-span-2">
                                        <p className="text-black text-base lg:text-lg font-semibold mb-2 lg:mb-3">Message</p>
                                        <textarea
                                            className="w-full h-[150px] lg:h-[200px] px-3 lg:px-4 text-base lg:text-lg border-2 border-gray-200 rounded-lg bg-gray-100 focus:outline-none"
                                            placeholder="Write your message..."
                                        ></textarea>
                                    </div>
                                </div>
                                <button className="mt-6 lg:mt-8 bg-orange-600 text-white font-semibold py-2 lg:py-3 px-4 lg:px-6 rounded-full w-full md:w-auto">
                                    Send Message
                                </button>
                            </form>
                            <button onClick={() => setShowPopup(false)} className="absolute top-2 right-2 text-2xl text-gray-600">
                                <IoMdClose />
                            </button>
                        </div>
                    </div>
)}

        </div>
    );
}

export default NavBar;