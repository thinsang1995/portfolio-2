import React from 'react'

const FilterItem = ({ type, handleFilterData }) => {
  const typeName = type.charAt(0).toUpperCase() + type.slice(1)
  return (
    <span 
      onClick={handleFilterData}
      style={{
        margin: '0 1rem',
        fontSize: '1.1rem',
        fontWeight: '600'
      }}
    >
      {typeName}
    </span>
  )
}

export default FilterItem
