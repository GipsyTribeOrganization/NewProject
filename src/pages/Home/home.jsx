import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function Home() {
  return (
    <div className="menu">
      <Link to="/menu">Menu</Link>
    </div>
  );
}

export default Home;
