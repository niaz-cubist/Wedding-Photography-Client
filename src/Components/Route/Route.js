import { createBrowserRouter } from 'react-router-dom';
import Logins from '../Authentication/Login/Logins';
import SignUp from '../Authentication/SignUp/SignUp';
import Blogs from '../Home/Blogs/Blogs';
import Home from '../Home/Home';
import PrivateRoute from './Private Route/PrivateRoute'
import MyReviews from '../Home/My Service/MyReviews';
import Service from '../Home/Service/Service'
import IdShow from '../IdShow/IdShow';
import Main from '../Layout/Main';
import Error from '../Error/Error';
import Contact from '../Home/Contact/Contact';

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Logins></Logins>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/service',
                element: <PrivateRoute><Service></Service></PrivateRoute>
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,

            },
            {
                path: '/services/:id',
                element: <IdShow></IdShow>,
                loader: ({ params }) => fetch(`https://weddinggraphy.vercel.app/services/${params.id}`)

            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }

        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])


export default Route;