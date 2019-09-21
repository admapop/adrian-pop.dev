import React from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.styles.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar-items'>
        <NavLink className='link' activeClassName='link-active' to='/work'>WORK</NavLink>
        <NavLink className='link' activeClassName='link-active' to='/about'>ABOUT</NavLink>
        <NavLink className='link' activeClassName='link-active' to='/contact'>CONTACT</NavLink>
      </ul>
    </div>
  )
}

export default Navbar
