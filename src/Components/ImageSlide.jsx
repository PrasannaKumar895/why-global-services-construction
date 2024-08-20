import React, { useEffect, useState } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useMediaQuery } from 'react-responsive';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import IMG1 from '../images/IMG1.jpg';
import IMG2 from '../images/IMG2.jpg';
import IMG3 from '../images/IMG4.jpg'; // Fixed the typo in the image import
import { Link } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';

const fadeImages = [
  { url: IMG1, heading: 'WELCOME to', caption: 'Innovative Design' },
  { url: IMG2, heading: 'We Offer', caption: 'Expert Craftsmanship' },
  { url: IMG3, heading: 'We Provide', caption: 'Construction Services' },
];

export const ImageSlider = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
    AOS.refresh(); // Ensure AOS is refreshed initially
  }, []);

  useEffect(() => {
    // Refresh AOS whenever the window is resized
    const handleResize = () => AOS.refresh();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (index) => {
    setCurrentIndex(index);
    AOS.refresh(); // Refresh AOS on slide change
  };

  return (
    <div className="pb-10">
      <div>
        <Fade
          duration={3000}
          transitionDuration={2000}
          indicators={false}
          arrows={true}
          onChange={handleChange} // Update index on slide change
        >
          {fadeImages.map((fadeImage, index) => (
            <div
              key={index}
              className={`flex flex-col items-start justify-center bg-cover ${isTabletOrMobile ? 'h-[90vh] sm:h-[500px]' : 'h-[600px]'} bg-center relative transition-all duration-1000 ease-in-out ${currentIndex === index ? 'fade-in' : 'fade-out'}`}
              style={{
                backgroundImage: `url(${fadeImage.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
              <div className="relative h-full w-full p-1 flex flex-col items-start justify-center z-20 px-4 sm:px-8 md:px-12 lg:px-16">
                <div className="pl-5 sm:pl-10 w-full sm:w-2/3 md:w-1/2 flex flex-col gap-2 sm:gap-4 pt-20">
                  <h1
                    data-aos="fade-up"
                    data-aos-delay={index === 0 ? '300' : index === 1 ? '600' : '900'}
                    className={`text-lg sm:text-xl md:text-xl lg:text-xl text-white uppercase transform ${currentIndex === index ? 'title-fade-up' : 'title-hidden'} transition-all duration-1000 ease-in-out`}
                  >
                    {fadeImage.heading}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-delay={index === 0 ? '600' : index === 1 ? '900' : '1200'}
                    className={`text-4xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white uppercase transform ${currentIndex === index ? 'title-fade-up' : 'title-hidden'} transition-all duration-1000 ease-in-out`}
                  >
                    {fadeImage.caption}
                  </p>
                  <Link
                    data-aos="fade-up"
                    data-aos-delay={index === 0 ? '900' : index === 1 ? '1200' : '1500'}
                    className={`lg:text-[15px]  sm:text-sm md:text-sm flex items-center justify-left text-white hover:font-bold hover:text-white transform ${currentIndex === index ? 'title-fade-up' : 'title-hidden'} transition-all duration-1000 ease-in-out`}
                    to="/contact"
                  >
                    Know More
                    <FaArrowDown className="ml-2 text-white" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};