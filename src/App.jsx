import { useState } from 'react'
import './App.css'

function App() {
 const [isScrolled, setIsScrolled] = useState(false);

 // Function to handle scrolling
 const handleScroll = () => {
   if (window.scrollY > 0) {
     setIsScrolled(true);
   } else {
     setIsScrolled(false);
   }
 };

 // Add event listener for scrolling
 window.addEventListener("scroll", handleScroll);

  return (
    <div className={`App ${isScrolled ? "scrolled" : ""}`}>
      <Navigation />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold my-8">Welcome to Our Landing Page</h1>
        <p className="text-lg">
          This is a simple example of a landing page using React.js and Tailwind
          CSS.
        </p>
      </div>
    </div>
  );
}

// Navigation.js
const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="logo text-xl font-bold">Your Logo</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default App
