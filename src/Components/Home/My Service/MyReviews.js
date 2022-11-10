import React, { useEffect, useState } from 'react';
import ReviewDisplay from './ReviewDisplay';
const MyReviews = () => {

    useEffect(() => {
        document.title = 'Reviews'
    }, [])


    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('https://weddinggraphy.vercel.app/orders')
            .then(res => res.json())
            .then(data => setUser(data));
    }, [])

    const [loader, setLoader] = useState(user)
    console.log(loader)

    const handleDelete = (id) => {
        const proceed = window.confirm('Cancel this order?')
        if (proceed) {
            fetch(`https://weddinggraphy.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        alert('User Deleted')

                        const remainingUsers = loader.filter(usr => usr._id !== user._id)
                        setLoader(remainingUsers)
                    }
                })
        }
    }

    return (
        <div className='grid grid-cols-3 my-9 gap-9 mx-auto w-11/12 text-left'>
            {
                user.map(param => <ReviewDisplay handleDelete={handleDelete} result={param} key={param._id}></ReviewDisplay>)
            }

        </div>
    );
};

export default MyReviews;