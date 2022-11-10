import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Context } from '../../Components/Context/AuthContext';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const IdShow = () => {


    const { user } = useContext(Context)

    const loader = useLoaderData()
    const name = loader.name
    const details = loader.Details
    const images = loader.images
    const reviewName = loader.reviewName
    const reviewImg = loader.reviewImg
    const review = loader.review

    const handleReview = (event) => {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const review = event.target.review.value

        const order = {
            reviewerName: name,
            reviewerEmail: email,
            reviewerReview: review
        }

        fetch('https://weddinggraphy.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Review Placed')
                    event.target.reset()
                }
            })
            .catch(er => console.log(er))
    }

    return (
        <div>
            <div className="card w-9/12 my-12 py-12 px-4 text-left mx-auto lg:card-side bg-gray-200 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={images}>
                        <figure><img src={images} alt="Shoes" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body w-11/12">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                </div>
            </div>
            <div className='text-left my-10 border p-14 border-gray-300 rounded-md w-9/12 mx-auto'>
                <h2 className='text-5xl mx-3 text-left text-bold'>Review</h2>
                <br />
                <img className='w-20' src={reviewImg} alt="" />
                <p className='text-3xl'>{reviewName}</p> <br />
                <p className='text-2xl'>{review}</p>
            </div >
            <div className="hero w-full my-15">
                <div className="hero-content w-9/12 mx-auto md:grid-cols-2 flex-col lg:flex-row">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-18">
                        <h1 className="text-3xl my-3 text-center font-bold">Review</h1>
                        <form onSubmit={handleReview} >
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                <input name='name' type="text" placeholder='Name' className='input input-ghost w-full' />
                                <input name='email' type="text" placeholder='Email' className='input input-ghost w-full' />
                                <input name='review' type="text" placeholder='Review' className='input input-ghost w-full' />
                            </div>
                            {
                                user?.email ?
                                    <button className="mx-auto my-5 btn btn-primary">Submit</button>
                                    :
                                    <Link to={'/login'}><button className="mx-auto btn btn-primary">Login</button></Link>
                            }
                        </form>
                    </div>

                </div>
            </div>
            <Link to={'/service'}><button className="mx-auto mb-5 btn btn-primary">Back to Service</button></Link>
        </div >
    );
};

export default IdShow;