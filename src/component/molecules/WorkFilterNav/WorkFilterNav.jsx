import React from 'react'
import FilterItem from '../../atoms/FilterItem'

const WorkFilterNav = () => {

  const filterType = ['all', 'web', 'react', 'redux']

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '2rem 0',
      color: 'black'
    }}>
      {filterType.map(type => (
        <FilterItem type={type} />
      ))}
    </div>
  )
}

export default WorkFilterNav
