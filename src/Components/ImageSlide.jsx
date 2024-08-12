import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useMediaQuery } from 'react-responsive';
import IMG1 from '../images/IMG1.jpg';
import IMG2 from '../images/IMG2.jpg';
import IMG3 from '../images/IMG3.jpg';

const fadeImages = [
  { url: IMG1, caption: 'Slide 1' },
  { url: IMG2, caption: 'Slide 2' },
  { url: IMG3, caption: 'Slide 3' },
];

export const ImageSlider = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <div className="pt-16">
      <Fade duration={3000} transitionDuration={2500} indicators={true} arrows={true}>
        {fadeImages.map((fadeImage, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center bg-cover ${isTabletOrMobile ? 'h-[500px]' : 'h-[600px]'} bg-center relative transition-all duration-1000 ease-in-out`}
            style={{ backgroundImage: `url(${fadeImage.url})` }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10 transition-all duration-1000 ease-in-out"></div>
            <div className={`relative h-full w-full p-5 flex flex-col ${index === 1 || index === 2 ? 'items-start' : 'items-center'} justify-center z-20`}>
              {index === 0 && (
                <>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">WELCOME</h1>
                  <p className="block text-white text-sm sm:text-base mb-4 text-center">TO THE NEXT CHAPTER IN CONSTRUCTION</p>
                </>
              )}
              {index === 1 && (
                <>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-left pl-[20px] sm:pl-[150px]">CONSTRUCTION1</h1>
                  <p className="block text-white text-sm sm:text-base mb-4 text-left pl-[20px] sm:pl-[150px]">
                    Ideal theme for any construction business you need With visual Composer,<br />
                    Revolution slider and other awesome features,<br />
                    you cannot go wrong.
                  </p>
                </>
              )}
              {index === 2 && (
                <>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-left pl-[20px] sm:pl-[100px]">CONSTRUCTION2</h1>
                  <p className="block text-white text-sm sm:text-base mb-4 text-left pl-[20px] sm:pl-[100px]">
                    We offer free consulting and the best project management for your ideas,<br />
                    100% delivery guaranteed. See for yourself,<br />
                    get on board now.
                  </p>
                </>
              )}
              <div className={`flex gap-2.5 ${index === 1 || index === 2 ? 'justify-start' : 'justify-center'}`}>
                <button className={`px-6 sm:px-8 py-2 border-2 border-[#fab702] bg-[#fab702] text-white cursor-pointer rounded transition-colors duration-300 ease-in-out text-xs sm:text-sm ${index === 1 || index === 2 ? 'ml-[20px] sm:ml-[150px]' : ''}`}>EXPLORE</button>
                <button className={`px-6 sm:px-8 py-2 border-2 border-[#fab702] bg-white text-black cursor-pointer rounded transition-colors duration-300 ease-in-out text-xs sm:text-sm ${index === 1 || index === 2 ? 'ml-2.5' : ''}`}>BUY NOW</button>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};
