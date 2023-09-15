import React, { Suspense, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import AuthLayout from './Components/Layout/AuthLayout/AuthLayout';
import Layout from './Components/Layout/Layout';
// import AboutUs from './Components/Pages/AuthPages/AboutUs/AboutUs';
import Home from './Components/Pages/Home/Home';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import AOS from 'aos';

const Application = () => {

    useEffect(() => {
        AOS.init({
            duration: 400,
            easing: 'linear-ease',

            disable: function () {
                var maxWidth = 800;
                return window.innerWidth < maxWidth;
            }
        });
    }, [])

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
