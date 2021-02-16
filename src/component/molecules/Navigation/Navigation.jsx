import React from 'react'
import './Navigation.css'

const Navigation = ({ links, handleScrollToEl, isShow }) => {
  return (
    <div className={`navigation ${isShow ? 'isShow' : ''}`}>
      {links.map(link => {
        const linkName = link.charAt(0).toUpperCase() + link.slice(1)
        return (
          <span key={link} id={link} onClick={handleScrollToEl}>{linkName}</span>
        )
      })}
    </div>
  )
}

export default Navigation
