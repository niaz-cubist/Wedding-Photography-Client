import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesDisplay = ({ data }) => {
    console.log(data)
    const name = data.name;
    const id = data._id;
    const details = data.Details;
    const img = data.images;


    return (
        <div className="card my-8 lg:w-9/12 lg:mx-auto md:w-8/12 sm:w-8/12 md:mx-auto bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img src={img} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details.slice(0, 40)}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesDisplay;