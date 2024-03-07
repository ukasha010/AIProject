import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assests/logo.jpeg'; 
import './CustomNavbar.css';

const CustomNavbar = () => {
  return (
    <div className="main-navbar">
      <div className="navbar-content">
      <div className="nav-toggle">
            <button className="hamburger"></button>
        </div>
        <div className='nav-items1'>
        <Link to="/">
          <img
            src={logo}
            height="40"
           
            alt="Logo"
          />
        </Link>
        <div className="navbar-links">
          <Link to="/about">About Us</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/platform">Platform Overview</Link>
          <Link to="/dashboard">Dashboard</Link>
          <a href="/" style={{textDecoration:"none", color:"grey"}}>Login</a>
        </div>

        </div>

        
        <button className="demo-button">Book a Demo</button>

      </div>
    </div>
  );
  
}

export default CustomNavbar;
