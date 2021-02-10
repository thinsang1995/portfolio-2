import React from 'react'
import './Button.css'

const Button = ({ content, isFill, handleScrollToContact }) => {
  console.log(isFill)
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