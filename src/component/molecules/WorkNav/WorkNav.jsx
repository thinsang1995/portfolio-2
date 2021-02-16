import React from 'react'

const workNavigation = ['all', 'web', 'react', 'redux']

const WorkFilterNav = () => {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1.5rem 0',
        color: 'black'
      }}
    >
      {workNavigation.map(type => (
        <span 
          key={type}
          style={{
            margin: '0 1rem',
            fontSize: '1.1rem',
            fontWeight: '600'
          }}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      ))}
    </div>
  )
}

export default WorkFilterNav
