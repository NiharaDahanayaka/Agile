import React from "react";
import { Link } from "react-router-dom";
import "./Booking.css";

const Booking = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        {/* Left Side: Logo */}
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>

        {/* Center: Navigation Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/equipment">Equipment</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        {/* Right Side: Profile Icon */}
        <div className="profile">
          <Link to="/profile">
            <img src="/profile-icon.png" alt="Profile" />
          </Link>
        </div>
      </nav>

   
    </div>
  );
};

export default Booking;
