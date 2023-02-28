import React, { useState, useMemo } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import SidebarData from '../../Data/sidebarData';
import './navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const iconContextValue = useMemo(() => ({ color: '#fff' }), []);

  return (
    <IconContext.Provider value={iconContextValue}>
      <div className="navbar">
        <Link to="." className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <h1 className="logo">YourLogo</h1>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="." className="menu-bars">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
          </li>
          {SidebarData.map((item) => (
            <li key={item.id} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Navbar;
