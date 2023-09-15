import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import AuthLayout from './Components/Layout/AuthLayout/AuthLayout';
import Layout from './Components/Layout/Layout';
// import AboutUs from './Components/Pages/AuthPages/AboutUs/AboutUs';
import Home from './Components/Pages/Home/Home';
import AboutUs from './Components/Pages/AboutUs/AboutUs';

const Application = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "about-us",
                    element: <AboutUs />,
                },
            ],
        },
        // {
        //     path: "auth",
        //     element: <AuthLayout />,
        //     children: [


        //     ]
        //   }
    ]);
    return (

        <>
            <Suspense>
                <RouterProvider router={router} />
            </Suspense>
        </>

    )
}

export default Application
