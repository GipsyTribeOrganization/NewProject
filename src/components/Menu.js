import React from 'react'
import { NavLink } from 'react-router-dom'

export const Menu = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    }
  }
  return (
    <nav>
      <NavLink style={navLinkStyles} to="/menu/groups">
        Groups
      </NavLink>
      <NavLink style={navLinkStyles} to="/menu/channels">
        Channels
      </NavLink>
      <NavLink style={navLinkStyles} to="/menu/message">
        Message
      </NavLink>
      <NavLink style={navLinkStyles} to="/menu/accounts">
        Accounts
      </NavLink>
    </nav>
  )
}
