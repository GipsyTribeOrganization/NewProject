import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function Menu() {
  return (
    <div className="menu_pages">
      <nav>
        <Link to="/menu/groups"><h2>Groups list</h2></Link>
        <Link to="/menu/channels"><h2>Channels</h2></Link>
        <Link to="/menu/message"><h2>Message</h2></Link>
        <Link to="/menu/accounts"><h2>Accounts</h2></Link>
      </nav>
    </div>
  );
}
export default Menu;
