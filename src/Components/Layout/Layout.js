import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
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
