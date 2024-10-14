// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">Travel Planner</Link>
      </div>

      {/* Toggle Button for Mobile */}
      <button className="toggle" onClick={toggleMenu}>
        &#9776;
      </button>

      {/* Links */}
      <div className={`links ${showMenu ? 'show' : ''}`}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/add-itinerary">Add Itinerary</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
