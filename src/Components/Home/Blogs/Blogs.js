import React, { useEffect } from 'react';

const Blogs = () => {

    useEffect(() => {
        document.title = 'Blogs'
    }, [])

    return (
        <div className='mx-auto w-9/12 rounded-lg my-8 p-20 border border-indigo-600'>
            <h2 className='text-3xl text-left'>Difference between SQL and NoSQL</h2>
            <br />
            <p className='text-left'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL</p>
            <br />
            <h2 className='text-3xl text-left'>What is JWT, and how does it work?</h2>
            <br />
            <p className='text-left'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
            <h2 className='text-3xl text-left'>What is the difference between javascript and NodeJS?</h2>
            <br />
            <p className='text-left'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
            <br />
            <h2 className='text-3xl text-left'>How does NodeJS handle multiple requests at the same time?</h2>
            <br />
            <p className='text-left'>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>

        </div>
    );
};

export default Blogs;