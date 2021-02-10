import React from 'react'
import './Button.css'

const Button = ({ content, isFill, handleScrollToContact }) => {
  return (
    <button 
      className={`btn ${isFill ? 'isFill' : ''}`}
      onClick={handleScrollToContact}
    >
      {content}
    </button>
  )
}

export default Button