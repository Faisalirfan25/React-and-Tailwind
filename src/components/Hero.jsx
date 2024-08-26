import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('path-to-your-image-or-video.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="z-10 text-textLight">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to the Future</h1>
        <p className="text-xl">Explore our cutting-edge solutions today.</p>
      </div>
    </div>
  );
};

export default Hero;
