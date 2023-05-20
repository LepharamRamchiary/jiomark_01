import React, { useState } from 'react';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <h1 className='ml-5 text-lg font-bold'>Top Deals On Electronics</h1>
      <div className="flex items-center justify-center h-screen">
        <div className="relative w-full max-w-lg">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}

          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full focus:outline-none"
            onClick={handlePrev}
          >
            &lt;
          </button>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full focus:outline-none"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};


const App = () => {
  const images = [
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1684524781_Samsung_Galaxy_A34_5G.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1684524804_boAt_Airdopes_138_pro.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1684524886_Tecno_POVA3.jpg',
  ];

  return <Slider images={images} />;
};

export default App;



