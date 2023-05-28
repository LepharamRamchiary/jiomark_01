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
    <div className="h-full w-full overflow-x-hidden mt-3 ">
      <h1 className='ml-10 text-xl font-bold'>Mega Deals on Electronics & Smartphones</h1>
      <Slider {...settings} ref={sliderRef}>
        <div className='p-4'>
          <img
            className=""
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1685031059_redmi_A2_desktop.jpg"
            alt="image 1"
          />
        </div>
        <div className='p-4'>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1685211151_fridge.jpg"
            alt="image 2"
            className=" "
          />
        </div>
        <div className='p-4'>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1685121538_bestdealsontws.jpg"
            alt="image 3"
            className=""
          />
        </div>
        <div className='p-4'>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1685211172_laptop.jpg"
            alt="image 4"
            className=""
          />
        </div>
        <div className='p-4'>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1685121602_televisions.jpg"
            alt="image 5"
            className=""
          />
        </div>

        <div className='p-4'>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1685211215_10.jpg"
            alt="image 6"
            className=""
          />
        </div>
        <div className='p-4'>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1685240787_ptron2.jpg"
            alt="image 7"
            className=""
          />
        </div>
        <div className='p-4'>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1685211191_vivoy33.jpg"
            alt="image 6"
            className=""
          />
        </div>
      </Slider>

      <div className="flex justify-around  mt-4">
        <button onClick={previousSlide} className="bg-blue-500 text-white px-4 py-2 rounded-full">
          {"<"}
        </button>
        <button onClick={nextSlide} className="bg-blue-500 text-white px-4 py-2 rounded-full">
          {">"}
        </button>
      </div>
    </div>
  );
}

export default SliderPath;
