import React, { useState, useEffect } from 'react';
import inn from '../Assets/inn.jpg'
import man from '../Assets/man.png'
// import out from '../Assets/ouy.jpg'
import land from '../Assets/land.png'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { 
      image: inn, 
      description: 'Welcome to Prestige Homes',
     
    },
    { 
      image: man, 
      description: 'Own or Rent a Home with Ease',
      
    },
    { 
      image: land, 
      description: 'Get Legitimate Lands & Documents',
      
    },
    
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full max-w-full mx-auto ">
      <div className="overflow-hidden relative">
        <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} className="w-full max-h-[30rem] caro-img" />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-30 p-4 text-white text-center">
          <p className="text-lg font-semibold bottom-0 left-0 right-0 md:top-56 top-28  absolute font-mono md:text-4xl">{slides[currentIndex].description} </p> 
        </div>
      </div>
      <button 
        onClick={prevSlide} 
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        &#10094;
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
