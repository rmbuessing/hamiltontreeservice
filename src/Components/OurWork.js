import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation'; // Import Navigation component
import before1 from '../Images/before1.jpeg';
import before2 from '../Images/before2.jpeg';
import before3 from '../Images/before3.jpeg';
import before4 from '../Images/before4.jpeg';
import before5 from '../Images/before5.jpeg';
import before6 from '../Images/before6.jpeg';
import after1 from '../Images/after1.jpeg';
import after2 from '../Images/after2.jpeg';
import after3 from '../Images/after3.jpeg';
import after4 from '../Images/after4.jpeg';
import after5 from '../Images/after5.jpeg';
import after6 from '../Images/after6.jpeg';
import './Home.css'; // Adjust the path as per your file structure

const OurWork = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between"> {/* Flex container to stretch the height */}
      <Navigation /> {/* Include Navigation component */}
      <div className="text-center mt-8" style={{ animation: 'fadeInUp 0.5s ease-out' }}> {/* Apply animation here */}
        <h1 className="text-4xl font-bold mb-8">Explore Our Expertise: A Showcase of Our Dedicated Work</h1>
      </div>
      <div className="flex-grow"> {/* Flex container for content */}
        <div className="flex flex-col items-center justify-center" style={{ animation: 'fadeInUp 0.5s ease-out' }}> {/* Apply animation here */}
          {/* Row for the first set of images */}
          <div className="flex w-full max-w-4xl mb-4 justify-center gap-4">
            <img src={before1} alt="Before" className="w-1/2 h-auto max-w-md" />
            <img src={after1} alt="After" className="w-1/2 h-auto max-w-md" />
          </div>
          {/* Row for the second set of images, removed bottom margin */}
          <div className="flex w-full max-w-4xl mb-4 justify-center gap-4">
            <img src={before2} alt="Before" className="w-1/2 h-auto max-w-md" />
            <img src={after2} alt="After" className="w-1/2 h-auto max-w-md" />
          </div>
          <div className="flex w-full max-w-4xl mb-4 justify-center gap-4">
            <img src={before3} alt="Before" className="w-1/2 h-auto max-w-md" />
            <img src={after3} alt="After" className="w-1/2 h-auto max-w-md" />
          </div>
          <div className="flex w-full max-w-4xl mb-4 justify-center gap-4">
            <img src={before4} alt="Before" className="w-1/2 h-auto max-w-md" />
            <img src={after4} alt="After" className="w-1/2 h-auto max-w-md" />
          </div>
          <div className="flex w-full max-w-4xl mb-4 justify-center gap-4">
            <img src={before5} alt="Before" className="w-1/2 h-auto max-w-md" />
            <img src={after5} alt="After" className="w-1/2 h-auto max-w-md" />
          </div>
          <div className="flex w-full max-w-4xl mb-4 justify-center gap-4">
            <img src={before6} alt="Before" className="w-1/2 h-auto max-w-md" />
            <img src={after6} alt="After" className="w-1/2 h-auto max-w-md" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default OurWork;
