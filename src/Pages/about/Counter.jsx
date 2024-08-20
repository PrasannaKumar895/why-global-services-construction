import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export const Counter = () => {
  const data = [
    { count: 985, label: 'Projects' },
    { count: 52, label: 'Clients' },
    { count: 888, label: 'Success' },
    { count: 100, label: 'Awards' }
  ];

  // Set up Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true, // Counter will start only once when in view
    threshold: 0.2 // Counter will start when 20% of the section is in view
  });

  return (
    <div ref={ref}>
      <div className="bg-gray-200 py-6 md:py-8 w-full flex items-center justify-center">
        <div className="flex md:flex-col lg:flex-row items-center justify-around w-full px-10">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center px-2 py-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                  {inView && <CountUp end={item.count} duration={2.5} />}+
                </h3>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-orange-600 mt-2">
                  {item.label}
                </p>
              </div>
              {index < 3 && <div className="border-l-4 border-white h-10 sm:h-12 lg:h-16"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
