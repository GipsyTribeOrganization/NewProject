import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'none' : 'underline',
  });

  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <a href="/">YourLogo</a>
          <NavLink style={navLinkStyles} to="/home">
            Home
          </NavLink>
          <NavLink style={navLinkStyles} to="/menu">
            Menu
          </NavLink>
          <NavLink style={navLinkStyles} to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
