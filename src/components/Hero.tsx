import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const handleButtonClick = () => {
    // Implement button click functionality
    console.log('Button clicked');
  };

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-7xl h-full flex flex-col items-center justify-center">
        <div className="w-full h-full bg-white flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 p-8">
            <h1 className="text-6xl font-bold text-gray-900 leading-none tracking-tight mb-6">
              Meet the New Landingfolio Kit
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.
            </p>
            <button
              className="w-full md:w-auto bg-blue-600 text-white rounded-lg py-4 px-8 flex items-center justify-center"
              onClick={handleButtonClick}
            >
              <span className="text-lg">Start using LandingFolio</span>
            </button>
          </div>
          <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
            <div className="w-full max-w-lg h-full bg-blue-100 rounded-3xl flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-gray-400 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faImage} className="w-12 h-12 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;