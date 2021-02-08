import React from 'react'
import './Button.css'

const Button = ({ content, isFill }) => {
  console.log(isFill)
  return (
    <button className={`btn ${isFill ? 'isFill' : ''}`}>{content}</button>
  )
}

export default Button