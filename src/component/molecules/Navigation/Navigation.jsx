import React from 'react'
import './Navigation.css'

const Navigation = ({ links, handleScrollToEl, isShow }) => {
  return (
    <div className={`navigation ${isShow ? 'isShow' : ''}`}>
      {links.map(link => (
          <span key={link} id={link} onClick={handleScrollToEl}>{link.charAt(0).toUpperCase() + link.slice(1)}</span>
        )
      )}
    </div>
  )
}

export default Navigation
