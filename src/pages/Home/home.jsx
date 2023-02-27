import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function Home() {
  return (
    <div>
      <Link to="/menu"><h2>Menu</h2></Link>
    </div>
  );
}

export default Home;
