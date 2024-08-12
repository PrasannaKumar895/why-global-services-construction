import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaArrowDown } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className="relative bg-black py-0 px-12">
      <img 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="https://media.istockphoto.com/id/622798024/photo/teamwork-on-construction-site-working-on-bridge-construction.jpg?s=1024x1024&w=is&k=20&c=D8WU63gFIQGFz-o34zy9koQieILzIYZpsyxCaxrzkJo=" 
        alt="Background"
      />
      <div className="relative max-w-6xl mx-auto mt-15 mb-15 flex flex-wrap">
        {/* Left Side */}
        <div className="flex flex-col justify-center text-white w-full md:w-6/12 mb-8 md:mb-0">
          <div className="px-8">
            <p className="text-3xl font-extrabold mb-4">Contact Us</p>
            <p className="text-lg text-white mb-12 max-w-lg">
              <span className="font-semibold">Address:</span><br />
              68 Havemeyer St, Brooklyn, NY 11211<br />
              United States<br /><br />
              <span className="font-semibold">Phone number:</span><br />
              +1 718-955-2838 or +1 718-955-3290<br /><br />
              <span className="font-semibold">E-mail address:</span><br />
              <a href="mailto:contact@construction.com" className="text-orange-400">contact@construction.com</a>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-700">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-blue-800">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-red-800">
                <FaYoutube />
              </a>
              <a href="#" className="text-white hover:text-pink-700">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-blue-900">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        
        {/* Right Side */}
        <div className="flex justify-center w-full md:w-6/12">
          <form className="bg-white text-orange-600 p-8 max-w-md w-full">
            <p className="text-2xl font-semibold mb-4">Contact</p>
            <p className="text-gray-400 mb-6">We will get back to you in 24 hours</p>
            <div className="flex flex-col space-y-4">
              <input 
                className="w-full h-12 px-4 py-2 bg-white border border-gray-600 rounded text-lg" 
                type="text" 
                name="FirstName" 
                placeholder="First Name" 
              />
              <input 
                className="w-full h-12 px-4 py-2 bg-white border border-gray-600 rounded text-lg" 
                type="text" 
                name="LastName" 
                placeholder="Last Name" 
              />
              <input 
                className="w-full h-12 px-4 py-2 bg-white border border-gray-600 rounded text-lg" 
                type="email" 
                name="Email" 
                placeholder="Email" 
              />
              <input 
                className="w-full h-12 px-4 py-2 bg-white border border-gray-600 rounded text-lg" 
                type="tel" 
                name="PhoneNumber" 
                placeholder="Phone Number" 
              />
              <textarea 
                className="w-full h-56 px-4 py-2 bg-white border border-gray-600 rounded text-lg" 
                name="Message" 
                placeholder="Type message here" 
              />
              <button 
                className="w-full h-14 bg-orange-600 text-white text-lg font-semibold rounded 2xl border border-green-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;