import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
      <div className='m-5'>
        <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
}

export default Main
