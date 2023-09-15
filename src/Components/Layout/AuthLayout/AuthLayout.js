import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Common/Header/Header'

const AuthLayout = ({ className, showHeader }) => {
    return (
        <main className={`auth_layout ${className}`}>
            {/* {
                showHeader && <Header />
            } */}
            <Header />
            <Outlet />
        </main>
    )
}

export default AuthLayout
