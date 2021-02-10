import React from 'react'
import './Navigation.css'
import NavItem from '../../atoms/NavItem/NavItem'

const Navigation = ({ links, handleScrollToEl, isShow }) => {
  return (
    <div className={`navigation ${isShow ? 'isShow' : ''}`}>
      {links.map(link => <NavItem id={link} key={link} onClick={handleScrollToEl} title={link} />)}
    </div>
  )
}

export default Navigation
