import React from 'react'
import './Navbar.css'
import Navigation from '../../molecules/Navigation'

const Navbar = ({ links, handleScrollToEl, handleShowNavItem, isShow }) => {
  return (
    <div className='nav-bar'>
      <h2>Sang</h2>
      <Navigation links={links} handleScrollToEl={handleScrollToEl} isShow={isShow} />
      <div className='hamburger' onClick={handleShowNavItem}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  )
}

export default Navbar
