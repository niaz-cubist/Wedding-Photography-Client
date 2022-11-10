import React, { useContext, useEffect } from 'react';
import { Context } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';
import Home from '../../Home/Home';
const SignUp = () => {

    useEffect(() => {
        document.title = 'Sign Up'
    }, [])


    const { createUser, google, user } = useContext(Context)

    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(res => {
                const result = res
                console.log(result);
            })
            .catch(err => console.log(err))
    }
    const handleGoogle = () => {
        google()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div className="hero w-full mt-20">
            {
                user?.email ?
                    <>
                        <Home></Home>
                    </>
                    :
                    <>
                        <div className="hero-content  md:grid-cols-2 flex-col lg:flex-row">

                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                                <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                                <form onSubmit={handleSignUp} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                    </div>
                                    <div className="form-control mt-6">
                                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                                    </div>
                                </form>
                                <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                                <br />
                                <button className='w-9/12 mx-auto btn btn-outline btn-success' onClick={handleGoogle}>Sign in with Google</button>
                            </div>
                        </div>
                    </>
            }

        </div>
    );
};

export default SignUp;