import React, { useState, useEffect } from 'react';

const Slider = () => {
  const images = [
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1683875837_Grand_Savings_on_Groceries.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1683791687_Best_Selling_Smartphones.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1683791687_Best_Selling_Smartphones.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1683791930_Gone_in_a_Flash.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1683876497_Unbeatable_offers_on_Kitchenware.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1683876417_Affordable_Summer_Makeovers.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1683875837_Grand_Savings_on_Groceries.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1683809878_Never_Before_Deals_Air_Conditioners.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1683875837_Grand_Savings_on_Groceries.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1683875873_Mega_Offers_On_Top_Fashion_Styles.jpg'
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const previousImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, 4000); // Auto slide interval (4000ms = 4 seconds)

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  useEffect(() => {
    const threshold = 200; // Change this value as needed
    setIsNavbarVisible(scrollPosition <= threshold);
  }, [scrollPosition]);

  return (
    <div className="flex items-center justify-center mt-36 w-full overflow-hidden">
      {isNavbarVisible && (
        <button
          className="absolute left-3 bg-slate-200  h-12 w-12 rounded-full text-xl text-blue-800 font-bold"
          onClick={previousImage}
        >
          {'<'}
        </button>
      )}
      <div className="flex-1 mx-4 cursor-pointer">
        <div
          className="w-screen h-80 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        ></div>
      </div>
      {isNavbarVisible && (
        <button
          className="absolute right-3 bg-slate-200 h-12 w-12 rounded-full text-xl text-blue-800 font-bold"
          onClick={nextImage}
        >
          {'>'}
        </button>
      )}
    </div>
  );
};

export default Slider;

