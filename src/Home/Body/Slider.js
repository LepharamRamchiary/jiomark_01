import React, { useState } from 'react'


const Slider = () => {

    const images = [
        'https://www.jiomart.com/images/cms/aw_rbslider/slides/1683130376_5G_Smartphones_v1.jpg',
        // '../assets/Desktop2.jpg',
        // Add more image URLs here
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const previousImage = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <button
                className="absolute left-0 p-2 bg-gray-500 text-white"
                onClick={previousImage}
            >
                Previous
            </button>
            <img src={images[currentImage]} alt="Slider" className="w-64" />
            <button
                className="absolute right-0 p-2 bg-gray-500 text-white"
                onClick={nextImage}
            >
                Next
            </button>
        </div>

    )
}

export default Slider;
