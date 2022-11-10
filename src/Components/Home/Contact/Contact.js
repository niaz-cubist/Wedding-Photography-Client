import React from 'react';
import img3 from '../../Images/Banner/img3.jpeg'
const Contact = () => {

    const handleClick = (event) => {
        event.preventDefault()
        alert('Done!!')
        event.target.reset()

    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content sm:grid sm:grid-cols-1 sm:grid-rows-1 sm:w-9/12 sm:mx-auto xs:grid xs:w-9/12 xs:grid-cols-1 xs:grid-rows-1 xs:mx-auto">
                <div className="text-center">
                    <img className='w-3/4' src={img3} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Contact</h1>
                    <form onSubmit={handleClick} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='text' placeholder="Name" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Message</span>
                            </label>
                            <input type="text" name='Write Something' placeholder="Message.." className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;