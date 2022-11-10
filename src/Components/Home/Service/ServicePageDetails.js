import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServicePageDetails = ({ data }) => {
    console.log(data)
    const name = data.name;
    const id = data._id;
    const details = data.Details;
    const img = data.images;


    return (
        <div className="card  my-6 mx-auto bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img src={img} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details.slice(0, 40)}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${id}`}><button className="mx-auto btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicePageDetails;