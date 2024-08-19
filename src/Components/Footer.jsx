import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Office Contact */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4">Office Contact</h2>
            <p className="flex items-center mb-2 text-sm sm:text-base">
              <FaMapMarkerAlt className="mr-2" />
              123 Street, New York, USA
            </p>
            <p className="flex items-center mb-2 text-sm sm:text-base">
              <FaPhoneAlt className="mr-2" />
              +012 345 67890
            </p>
            <p className="flex items-center mb-4 text-sm sm:text-base">
              <FaEnvelope className="mr-2" />
              info@example.com
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <FaTwitter />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF />
              </a>
              <a href="#" className="text-red-600 hover:text-red-800">
                <FaYoutube />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700">
                <FaInstagram />
              </a>
              <a href="#" className="text-blue-800 hover:text-blue-900">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Services Areas */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4 border-b-2 border-gray-600 pb-2">Services Areas</h2>
            <a href="#" className="block mb-2 text-sm sm:text-base hover:text-orange-400">Commercial Construction</a>
            <a href="#" className="block mb-2 text-sm sm:text-base hover:text-orange-400">House Renovation</a>
            <a href="#" className="block mb-2 text-sm sm:text-base hover:text-orange-400">Architecture Design</a>
            <a href="#" className="block mb-2 text-sm sm:text-base hover:text-orange-400">Project Management</a>
            <a href="#" className="block mb-2 text-sm sm:text-base hover:text-orange-400">Construction Planning</a>
          </div>

          {/* Useful Pages */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4 border-b-2 border-gray-600 pb-2">Useful Pages</h2>
            <a href="/about-us" className="block mb-2 text-sm sm:text-base hover:text-orange-400">About Us</a>
            <a href="/contact" className="block mb-2 text-sm sm:text-base hover:text-orange-400">Contact Us</a>
            <a href="/blog" className="block mb-2 text-sm sm:text-base hover:text-orange-400">Blog</a>
            <a href="/projects" className="block mb-2 text-sm sm:text-base hover:text-orange-400">Projects</a>
            <a href="#" className="block mb-2 text-sm sm:text-base hover:text-orange-400">Testimonial</a>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4 border-b-2 border-gray-600 pb-2">Newsletter</h2>
            <p className="mb-4 text-justify text-sm sm:text-base">Sustainability isn't just a buzzword for us. Discover how we're integrating eco-friendly materials and practices into our projects, reducing our carbon footprint while delivering top-quality results.</p>
          </div>
        </div>
      </div>

      {/* Footer Menu */}
      <div className="container mx-auto mt-8">
        <div className="flex flex-wrap justify-center space-x-4 text-sm sm:text-base">
          <a href="#" className="hover:text-orange-400">Terms of use</a>
          <a href="#" className="hover:text-orange-400">Privacy policy</a>
          <a href="#" className="hover:text-orange-400">Cookies</a>
          <a href="#" className="hover:text-orange-400">Help</a>
          <a href="#" className="hover:text-orange-400">FQAs</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-8">
        <div className="flex items-center justify-center text-xs sm:text-sm"> 
          <p>&copy; <a href="#" className="hover:text-orange-400">Why Themes</a>, All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;