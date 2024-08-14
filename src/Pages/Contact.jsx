import React from 'react';
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
    <div className="relative bg-black py-0 px-4 sm:px-12">
      <img 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="https://media.istockphoto.com/id/622798024/photo/teamwork-on-construction-site-working-on-bridge-construction.jpg?s=1024x1024&w=is&k=20&c=D8WU63gFIQGFz-o34zy9koQieILzIYZpsyxCaxrzkJo=" 
        alt="Background"
      />
      <div className="relative max-w-6xl mx-auto mt-10 sm:mt-15 mb-10 sm:mb-15 flex flex-wrap">
        {/* Left Side */}
        <div className="flex flex-col justify-center text-white w-full md:w-6/12 mb-8 md:mb-0">
          <div className="px-4 sm:px-8">
            <p className="text-2xl sm:text-3xl font-extrabold mb-4">Contact Us</p>
            <p className="text-base sm:text-lg text-white mb-12 max-w-lg">
              <span className="font-semibold">Address:</span><br />
              68 Havemeyer St, Brooklyn, NY 11211<br />
              United States<br /><br />
              <span className="font-semibold">Phone number:</span><br />
              +1 718-955-2838 or +1 718-955-3290<br /><br />
              <span className="font-semibold">E-mail address:</span><br />
              <a href="mailto:contact@construction.com" className="text-orange-400">contact@construction.com</a>
            </p>
            <div className="flex space-x-4 ">
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
        <div className="flex justify-center w-full mt-10 mb-10 md:w-6/12">
          <form className="bg-white text-black p-4 sm:p-8 max-w-md w-full rounded-lg ">
            <p className="text-2xl sm:text-2xl font-semibold  text-orange-600 flex justify-center mb-4">Contact</p>
            <p className="text-sm sm:text-base text-gray-400 mb-6">We will get back to you in 24 hours</p>
            <div className="flex flex-col space-y-4">
              <input 
                className="w-full h-12 px-4 py-2 bg-white border border-gray-600 rounded text-sm sm:text-lg" 
                type="text" 
                name="FirstName" 
                placeholder="First Name" 
              />
              <input 
                className="w-full h-12 px-4 py-2 bg-white border border-gray-600 rounded text-sm sm:text-lg" 
                type="text" 
                name="LastName" 
                placeholder="Last Name" 
              />
              <input 
                className="w-full h-12 px-4 py-2 bg-white border border-gray-600 rounded text-sm sm:text-lg" 
                type="email" 
                name="Email" 
                placeholder="Email" 
              />
              <input 
                className="w-full h-12 px-4 py-2 bg-white border border-gray-600 rounded text-sm sm:text-lg" 
                type="tel" 
                name="PhoneNumber" 
                placeholder="Phone Number" 
              />
              <textarea 
                className="w-full h-40 sm:h-56 px-4 py-2 bg-white border border-gray-600 rounded text-sm sm:text-lg" 
                name="Message" 
                placeholder="Type message here" 
              />
             <button 
                 className="w-full h-12 sm:h-14  bg-orange-600 text-white text-sm sm:text-lg font-semibold rounded-2xl border border-orange-400 transition-transform transform hover:bg-orange-400 "
                  >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>

      {/* Google Map */}
      <div className="relative my-10 h-80 w-full">
        <iframe 
          title="Google Map"
          className="w-full h-full border-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.575315874237!2d-73.95655568459425!3d40.713448379331594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bea5c1cb6f7%3A0x5dbd7ff1f1749c7c!2s68%20Havemeyer%20St%2C%20Brooklyn%2C%20NY%2011211%2C%20USA!5e0!3m2!1sen!2sin!4v1606001203441!5m2!1sen!2sin"
          allowFullScreen="" 
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Contact;