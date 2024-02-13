import React, { useEffect, useState } from 'react'
import { PiPhoneCallBold } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);

    // handle scroll functrions
    useEffect(() => {
        const handleScroll = () => {
        const offSet = window.scrollY;

        if (offSet > 0) {
            setSticky(true);
        } else {
            setSticky(false);
        }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.addEventListener("scroll", handleScroll);
        };
    }, []);

    const NavItems = () => {
        return (
        <>
            <li>
            <a href="/">Home</a>
            </li>
            <li>
            <a href="/" >About</a>
            </li>
            <li>
            <details>
                <summary>Services</summary>
                <ul className="p-2">
                <li>
                    <a href="/">Web Development</a>
                </li>
                <li>
                    <a href='/'>Android Development</a>
                </li>
                </ul>
            </details>
            </li>
            <li>
            <a href='/'>portfolio</a>
            </li>
        </>
        );
    };

    return (
      <header className="max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out z-50">
        <div
          className={`navbar xl:px-24 ${
            isSticky
              ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out "
              : ""
          }`}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <NavItems />
              </ul>
            </div>
            <a href='/' className="btn btn-ghost text-xl">ABIYE</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavItems />
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn bg-yellow btn-ghost rounded-lg text-white">
              <PiPhoneCallBold /> Contact Us
            </a>
          </div>
        </div>
      </header>
    );
}

export default Navbar
