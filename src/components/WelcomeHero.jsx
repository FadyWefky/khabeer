"use client"

import React from 'react';

const WelcomeHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
      >
        <source src="/welcome.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#4CAF50] mb-8 animate-fade-in">
          الخبير لتوصيات الأسهم 
        </h1>
        
        <button 
          className="bg-[#FFA500] hover:bg-red-700 text-white px-8 py-3 rounded-lg 
                     text-xl font-bold transition-all duration-300 transform hover:scale-105
                     shadow-lg hover:shadow-xl animate-bounce"
        >
       تواصل معنا
        </button>
      </div>

      {/* Optional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 pointer-events-none"></div>
    </div>
  );
};

export default WelcomeHero;

// Add these styles to your global CSS
const styles = `
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
`;