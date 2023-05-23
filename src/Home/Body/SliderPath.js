import React, { useState } from "react";

const SliderPath = () => {
  const images = [
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1682855336_Smartphones.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1682855373_AC.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1682855935_Laptops_and_Tablets.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1682855336_Smartphones.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1682855336_Smartphones.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1682855336_Smartphones.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1682855336_Smartphones.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1682855336_Smartphones.jpg'
    // Add more image URLs as needed
  ];

  const blockSize = 5;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - blockSize : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= images.length - blockSize ? 0 : prevIndex + 1));
  };

  return (
    <div className="container mx-auto my-4 relative h-full w-full overflow-x-hidden">
      <div
        className={`flex overflow-hidden transition-all duration-300 ${
          currentIndex === 0 ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
        style={{ width: `calc(${blockSize} * 200px + (${blockSize} - 1) * 80px)` }}
      >
        {images.slice(currentIndex, currentIndex + blockSize).map((image, index) => (
          <div className="w-full" key={index} style={{ marginRight: index < blockSize - 1 ? '20px' : 0 }}>
            <img src={image} alt={`Image ${index}`} className="block h-64 w-58 object-cover" />
          </div>
        ))}
      </div>
      
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-1 bg-gray-500 text-white rounded-l shadow hover:bg-gray-700"
        onClick={handlePrev}
      >
        Previous
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2 py-1 bg-gray-500 text-white rounded-r shadow hover:bg-gray-700"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default SliderPath;
