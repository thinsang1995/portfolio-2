import React from 'react'
import './WorkNav.css'

const workNavigation = ['all', 'web', 'react', 'redux']

const WorkFilterNav = () => {
  return (
    <div className='work-nav'>
      {workNavigation.map(type => (
        <span 
          className='nav-item'
          key={type}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      ))}
    </div>
  )
}

export default WorkFilterNav
