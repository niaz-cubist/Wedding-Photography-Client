import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Error = () => {

    useEffect(() => {
        document.title = 'Error'
    }, [])


    return (
        <div>
            <h2 className=' my-6 text-5xl'>This Page Doesn't Exist</h2>
            <Link to={'/home'}><button className='btn btn-outline btn-error'>Go to Original Site</button></Link>
        </div>
    );
};

export default Error;