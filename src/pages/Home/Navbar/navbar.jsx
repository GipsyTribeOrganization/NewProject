import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const mainListDiv = document.getElementById('mainListDiv');
  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <a href="/">YourLogo</a>
        </div>
        <div className="main_list" id={mainListDiv}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
