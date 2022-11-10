import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicePageDetails from './ServicePageDetails';


const Services = () => {

    useEffect(() => {
        document.title = 'Service'
    }, [])

    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('https://weddinggraphy.vercel.app/service')
            .then(res => res.json())
            .then(data => {
                setUser(data)

            })
    }, [])

    return (
        <div className='my-4 '>
            <h3 className='my-4 text-orange-500 text-3xl font-bold'>Services</h3>
            <h3 className='my-4 text-blue-500 text-5xl font-semiBold'>Our Service Area</h3>
            <p className='text-2xl'>What is included in a wedding photography package? Let's have a look...</p>
            <div className='grid grid-cols-3 xxl:grid xxl:mx-auto xxl:grid-cols-3 xxl:w-9/12 xl:grid xl:mx-auto xl:grid-cols-3 xl:w-90 md:grid md:mx-auto md:grid-cols-3  md:w-9/12 sm:grid sm:grid-cols-2 sm:w-10/12 sm:mx-auto xs:w-80 xs:mx-auto gap-4 xs:grid xs:grid-cols-1 xs:grid-rows-1'>
                {
                    user.map(data => <ServicePageDetails key={data._id} data={data}></ServicePageDetails>)
                }
            </div>
            <Link to={'/home'}><button className="my-4 btn btn-outline btn-warning">Go to Home</button></Link>

        </div>
    );
};

export default Services;