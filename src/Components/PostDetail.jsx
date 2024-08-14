import React from 'react';
import { useParams } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaPhone, FaQuoteLeft } from 'react-icons/fa';
import IMG1 from '../images/IMG1.jpg';
import IMG2 from '../images/IMG2.jpg';

const BlogPost = ({ title, description, image }) => (
  <div className="bg-white p-6 mb-8 shadow-lg rounded-lg">
    <h2 className="text-2xl md:text-3xl font-semibold mb-2">{title}</h2>
    <h5 className="text-gray-500 mb-4">Title description</h5>
    <img src={image} alt="Blog Post" className="w-full h-60 md:h-80 object-cover rounded-lg mb-4" />
    <div className="text-gray-700 leading-relaxed">{description.main}</div>
    <div className="bg-orange-100 border-l-4 rounded-md border-orange-500 p-4 mt-4 text-gray-800 relative">
      <FaQuoteLeft className="absolute top-0 left-0 text-orange-500 text-2xl md:text-3xl -mt-3 -ml-3" />
      {description.separate.orange}
    </div>
    <div className="bg-white p-4 mt-4 text-gray-800">{description.separate.white}</div>
    <div className="bg-orange-100 border-l-4 rounded-md border-orange-500 p-4 mt-4 text-gray-800">
      In the highly competitive world of Engineering, Procurement, and Construction (EPC) projects, efficiency and cost management are critical to success.
    </div>
  </div>
);

const SideSection = ({ title, children }) => (
  <div className="bg-white p-6 mb-8 shadow-lg rounded-lg">
    <h2 className="text-xl md:text-2xl font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

const PostDetail = () => {
  const { id } = useParams();
  const blogPosts = [
    {
      id: 1,
      title: "We Just Completed a $17.6 Million Medical Clinic in Mid-Missouri",
      image: IMG1,
      description: {
        main: "In the highly competitive world of Engineering, Procurement, and Construction (EPC) projects, efficiency and cost management are critical to success.",
        separate: {
          orange: "Significant cost savings in your EPC projects.",
          white: "In the highly competitive world of Engineering, Procurement, and Construction (EPC) projects, efficiency and cost management are critical to success.",
        }
      }
    },
    {
      id: 2,
      title: "We Just Completed a $17.6 Million Medical Clinic in Mid-Missouri",
      image: IMG2,
      description: {
        main: "In the highly competitive world of Engineering, Procurement, and Construction (EPC) projects, efficiency and cost management are critical to success.",
        separate: {
          orange: "Significant cost savings in your EPC projects.",
          white: "In the highly competitive world of Engineering, Procurement, and Construction (EPC) projects, efficiency and cost management are critical to success.",
        }
      }
    },
    {
      id: 3,
      title: "We Just Completed a $17.6 Million Medical Clinic in Mid-Missouri",
      image: IMG1,
      description: {
        main: "In the highly competitive world of Engineering, Procurement, and Construction (EPC) projects, efficiency and cost management are critical to success.",
        separate: {
          orange: "Significant cost savings in your EPC projects.",
          white: "In the highly competitive world of Engineering, Procurement, and Construction (EPC) projects, efficiency and cost management are critical to success.",
        }
      }
    }
  ];

  const post = blogPosts.find((post) => post.id === parseInt(id, 10));

  return (
    <div className="p-6">
      <div className="bg-white p-10 text-center text-3xl md:text-5xl font-bold rounded-lg mb-12 shadow-md">
        Latest News
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-3/4 pr-0 md:pr-8">
          {post && <BlogPost {...post} />}
        </div>
        <div className="w-full md:w-1/4 mt-8 md:mt-0">
          <SideSection title="Follow Us">
            <div className="flex space-x-4 text-xl md:text-2xl">
              <a href="#" className="text-blue-500 hover:text-blue-700"><FaTwitter /></a>
              <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebookF /></a>
              <a href="#" className="text-red-600 hover:text-red-800"><FaYoutube /></a>
              <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram /></a>
              <a href="#" className="text-blue-800 hover:text-blue-900"><FaLinkedinIn /></a>
            </div>
          </SideSection>
          <div className="bg-orange-600 h-72 md:h-96 flex flex-col items-center justify-center gap-6 rounded-xl mt-8">
            <h4 className="text-center font-bold text-white text-2xl md:text-3xl">Make a call for <br/>any type of query.</h4>
            <div className="bg-white p-4 rounded-full mb-4"><FaPhone className="text-orange-600 text-4xl md:text-5xl" /></div>
            <h4 className="text-center font-bold text-white text-2xl md:text-3xl">+9876543210</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;