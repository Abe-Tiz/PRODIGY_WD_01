import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Home
