import React from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.styles.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar-items'>
        <NavLink className='link' activeClassName='link-active' to='/work'>WORK</NavLink>
        <NavLink className='link' activeClassName='link-active' to='/about'>ABOUT</NavLink>
        <li className='link'>CONTACT</li>
      </ul>
    </div>
  )
}

export default Navbar
