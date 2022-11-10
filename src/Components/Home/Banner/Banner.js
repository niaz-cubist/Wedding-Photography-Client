import React from 'react';
import img1 from '../../Images/Banner/img1.jpeg'
import img2 from '../../Images/Banner/img2.jpg'
import img3 from '../../Images/Banner/img3.jpeg'
import img4 from '../../Images/Banner/img4.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className="carousel-item carousel  h-80 mx-auto w-9/12 mb-12">
            <div id="slide1" className="carousel-item relative w-full">
                <img alt="" src={img1} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-14 top-28">
                    <h1 className='text-4xl text-left font-bold text-white'>
                        He stole my heart <br />
                        So I'm going to steal <br />
                        His last name.
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 mx-2 left-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img alt="" src={img2} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-14 top-28">
                    <h1 className='text-4xl text-left font-bold text-white'>
                        Diamonds are forever <br />
                        And so is this love.
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 mx-2 left-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img alt="" src={img3} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-14 top-28">
                    <h1 className='text-4xl text-left font-bold text-white'>
                        She Said Yaaas!
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 mx-2 left-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img alt="" src={img4} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-14 top-28">
                    <h1 className='text-4xl text-left font-bold text-white'>
                        Affordable <br />
                        Price for Wedding <br />
                        Photography
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 mx-2 left-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;