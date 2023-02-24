import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function Menu() {
  return (
    <div className="menu_pages">
      <Link to="/groups"><h2>Groups list</h2></Link>
      <Link to="/channels"><h2>Channels</h2></Link>
      <Link to="/message"><h2>Message</h2></Link>
      <Link to="/accounts"><h2>Accounts</h2></Link>
      <Link to="/home">Back</Link>
    </div>
  );
}
export default Menu;
