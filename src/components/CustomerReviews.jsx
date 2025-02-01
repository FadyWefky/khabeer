import React, { useState, useEffect } from 'react';

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Array of image paths
  const images = [
    '/reviews/1.jpeg',
    '/reviews/2.jpeg',
    '/reviews/3.jpeg',
    '/reviews/4.jpeg',
    '/reviews/5.jpeg',
    '/reviews/6.jpeg',
    '/reviews/7.jpeg',
    '/reviews/8.jpeg'
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" py-16 px-4 md:px-8 my-20">
      <div className="max-w-2/3 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-4">أراء عملائنا</h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="relative w-full">
          {/* Main image container */}
          <div className="relative h-64 md:h-96 overflow-hidden rounded-lg">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute w-full h-full rounded-xl transition-opacity duration-500 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={img}
                  alt={`Review ${index + 1}`}
                  className="object-contain w-full h-full rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center pt-4 gap-4">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none"
            >
             <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none"
            >


<svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
              
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-emerald-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;