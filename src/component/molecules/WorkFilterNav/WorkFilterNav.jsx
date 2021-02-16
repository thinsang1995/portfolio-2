import React from 'react'

const WorkFilterNav = () => {

  const filterType = ['all', 'web', 'react', 'redux']

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
      {filterType.map(type => {
        const typeName = type.charAt(0).toUpperCase() + type.slice(1)
        return (
          <span 
            key={type}
            style={{
              margin: '0 1rem',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}
          >
            {typeName}
          </span>
        )
      })}
    </div>
  )
}

export default WorkFilterNav
