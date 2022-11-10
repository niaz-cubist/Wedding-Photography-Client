import React from 'react';

const ReviewDisplay = ({ result, handleDelete }) => {

    const id = result._id
    const name = result.reviewerName
    const email = result.reviewerEmail
    const review = result.reviewerReview



    return (
        <div className="card 
        rounded-lg w-96 bg-gray-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-2xl'>Email: {email}</p>
                <p className='text-2xl'>Review: {review}</p>
                <button onClick={() => handleDelete(id)} className="w-5/12 mx-auto btn btn-outline btn-error">Delete</button>
            </div>
        </div>
    );
};

export default ReviewDisplay;