import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../../Context/AuthContext';

import Home from '../../Home/Home'

const Logins = () => {

    useEffect(() => {
        document.title = 'Log In'
    }, [])


    const { login, user, google } = useContext(Context)

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(user)
        login(email, password)
            .then(res => {
                const result = res
                console.log(result)
                event.target.reset()
            })
            .catch(err => {
                alert('User Not Found')
                console.log(err);
                event.target.reset()
            })
    }
    const handleGoogle = () => {
        google()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (

        <div className="hero w-full my-20">
            {
                user?.email ?
                    <>
                        <Home></Home>
                    </>
                    :
                    <>
                        <div className="hero-content  mx-auto md:grid-cols-2 flex-col lg:flex-row">
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-18">
                                <h1 className="text-5xl text-center font-bold">Login</h1>
                                <form onSubmit={handleLogin} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                    </div>
                                    <div className="form-control mt-6">
                                        <input className="btn btn-primary" type="submit" value="Login" />
                                    </div>
                                </form>
                                <p className='text-center'>New to Genius Car <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                                <br />
                                <button className='w-9/12 mx-auto btn btn-outline btn-success' onClick={handleGoogle}>Sign in with Google</button>
                            </div>

                        </div>
                    </>
            }

        </div>

    );
};

export default Logins;