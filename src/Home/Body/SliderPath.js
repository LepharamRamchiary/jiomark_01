import React, { useRef } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderPath() {
  const sliderRef = useRef(null);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: (
      <button className="slick-next">
        Next
      </button>
    ),
    prevArrow: (
      <button className="slick-prev">
        Previous
      </button>
    ),
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="h-full w-full overflow-x-hidden">
      <Slider {...settings} ref={sliderRef}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="w-2/3 mx-2"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="w-2/3 mx-2"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="w-2/3 mx-2"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 4"
            className="w-2/3 mx-2"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 5"
            className="w-2/3 mx-2"
          />
        </div>
      </Slider>

      <div className="flex justify-center mt-4">
        <button onClick={previousSlide} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          Previous
        </button>
        <button onClick={nextSlide} className="bg-blue-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
}

export default SliderPath;
