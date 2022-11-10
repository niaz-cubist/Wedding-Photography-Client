import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Services from './Services/Services';

const Home = () => {


    useEffect(() => {
        document.title = 'Wedding Graphy';
    }, [])


    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Link to={'/service'}><button className="my-4 btn btn-outline btn-warning">See all</button></Link>
            <p className="text-5xl my-4 font-bold text-orange-500">About Us</p>
            <About></About>
            <h2 className='text-5xl font-bold text-orange-600'>Contact</h2>
            <Contact></Contact>
        </div>
    );
};

export default Home;