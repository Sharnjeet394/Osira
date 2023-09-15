import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Common/Header/Header'
import Footer from '../../Common/Footer/Footer'

const AuthLayout = ({ className, showHeader }) => {
    return (
        <main className={`auth_layout ${className}`}>
            {/* {
                showHeader && <Header />
            } */}
            <Header />
            <Outlet />
            <Footer/>
        </main>
    )
}

export default AuthLayout
