import React, { useEffect } from 'react';
import img1 from '../../Images/Banner/img1.jpeg'
import img2 from '../../Images/Banner/img2.jpg'
const About = () => {

    useEffect(() => {
        document.title = 'About'
    }, [])

    return (
        <div className="hero w-9/12 mx-auto my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={img1} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={img2} alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h1 className="my-5 text-3xl font-bold">
                        We are qualified <br />
                        & of experience <br />
                        in this field</h1>
                    <p className="py-6">Here are some compelling reasons why you should hire us as your wedding photographer. Our Promise to You.. </p>
                    <p className="py-6">Make you both look amazing
                        <br />
                        Capture candid pictures that make you feel
                        <br />
                        Photograph the small moments that together tell your story
                        <br />
                        Help you look natural in photos</p>
                </div>
            </div>
        </div>
    );
};

export default About;