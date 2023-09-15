import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'

const Layout = () => {
  return (
    <div>
      <>
        <main className="main">
          <Header />
          <Outlet />
          <Footer />
        </main>
      </>
    </div>
  )
}

export default Layout
