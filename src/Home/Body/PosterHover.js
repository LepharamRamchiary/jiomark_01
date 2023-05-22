import React from 'react';

function PosterHover() {
    return (
        <div className="w-full h-full flex cursor-pointer">
            <div
                className="w-full h-20 m-5 bg-cover bg-center rounded-md relative overflow-hidden"
                style={{
                    backgroundImage: 'url("https://www.jiomart.com/images/cms/aw_rbslider/slides/1683833551_1240x209.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '35%',

                }}
            >
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border-2 border-white opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <img
                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1683833551_1240x209.jpg"
                    alt="Poster"
                />
                {/* Content for the rectangular container */}
            </div>
            <div
                className="w-full h-20 mt-5 bg-cover bg-center rounded-md relative overflow-hidden"
                style={{
                    backgroundImage: 'url("https://www.jiomart.com/images/cms/aw_rbslider/slides/1683833613_1240x209.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '35%',
                    
                }}
            >
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border-2 border-white opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <img
                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1683833613_1240x209.jpg"
                    alt="Poster"
                />
                {/* Content for the rectangular container */}
            </div>
        </div>
    );
}

export default PosterHover;