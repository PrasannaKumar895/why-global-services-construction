import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import IMG1 from '../images/IMG1.jpg';
import IMG2 from '../images/IMG2.jpg';

const BlogPost = ({ title, description, image }) => (
  <div className="p-4 md:p-6 mb-8 shadow-lg rounded-lg border border-orange-400 bg-orange-400">
    <h2 className="text-2xl md:text-3xl font-semibold mb-2">{title}</h2>
    <h5 className="text-white mb-4">Title description</h5>
    <img src={image} alt="Blog Post" className="w-full h-80 md:h-100 object-cover rounded-lg mb-4" />
    <p className="text-white leading-relaxed">{description}</p>
  </div>
);

const SideSection = ({ title, children }) => (
  <div className="bg-white p-4 md:p-6 mb-8 shadow-lg rounded-lg border  border-orange-400">
    <h2 className="text-xl md:text-2xl font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

const Blog = () => {
  const blogPosts = [
    { id: 1, title: "We Just Completed a $17.6 Million Medical Clinic in Mid-Missouri", image: IMG1, description: "The strategic layout of your manufacturing facility is crucial for its success. In the highly competitive world of Engineering, Procurement, and Construction (EPC) projects, efficiency and cost management are critical to success. This article explores proven strategies and best practices for optimizing processes, reducing waste, and maximizing resources throughout." },
    { id: 2, title: "Maximizing Efficiency and Cost Savings in EPC Projects", image: IMG2, description: "Enhance your manufacturing efficiency with optimized factory layouts. In the highly competitive world of Engineering, Procurement, and Construction (EPC) projects, efficiency and cost management are critical to success. This article explores proven strategies and best practices for optimizing processes, reducing waste, and maximizing resources throughout." },
    { id: 3, title: "Explore Types and Applications of Steel Piles in Construction", image: IMG2, description: "Steel piles play a significant role in construction, offering strength and durability. In the highly competitive world of Engineering, Procurement, and Construction (EPC) projects, efficiency and cost management are critical to success. This article explores proven strategies and best practices for optimizing processes, reducing waste, and maximizing resources throughout." },
  ];

  return (
    <div className="p-4 md:p-6 bg-white">
      {/* Header */}
      <div className="bg-white w-full  md:p-10 text-center text-3xl md:text-5xl font-bold rounded-lg mb-8 md:mb-12 shadow-md border border-orange-400">
       <img src="" alt="blog header image"/>
      </div>

      <div className="flex flex-wrap ">
        {/* Left Column */}
        <div className="w-full md:w-3/4 pr-0 md:pr-8 ">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} title={post.title} image={post.image} description={post.description} />
          ))}
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/4 mt-8 md:mt-0  ">
          <SideSection title="About Us">
            <img src={IMG1} alt="About Us" className="w-full h-24 md:h-32 object-cover rounded-lg mb-4" />
            <p className="text-gray-700 leading-relaxed">We are a leading construction firm specializing in building resilient structures that stand the test of time. Our mission is to deliver excellence in every project we undertake.</p>
          </SideSection>
          
          <SideSection title="Latest News">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="mb-6  border border-orange-400 bg-orange-500 rounded-lg p-2">
                <Link to={`/post/${post.id}`}>
                  <img src={post.image} alt={`Popular Post ${post.id}`} className="w-full h-20 md:h-24 object-cover rounded-lg mb-2" />
                  <h5 className="text-white font-medium">{post.title}</h5>
                </Link>
              </div>
            ))}
          </SideSection>

          <SideSection title="Follow Us">
            <div className="flex space-x-4 text-2xl">
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
          </SideSection>

          {/* Call Section */}
          <div className="bg-orange-600 h-fit p-4 flex flex-col items-center justify-center gap-6 rounded-xl mt-8 border border-orange-400">
            <h4 className="text-center font-bold text-white text-2xl md:text-3xl">Make a call for <br /> any type query.</h4>
            <div className="bg-white p-4 rounded-full mb-4">
              <FaPhone className="text-orange-600 text-4xl md:text-5xl" /> 
            </div>
            <h4 className="text-center font-bold text-white text-2xl md:text-3xl">+9876543210</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;