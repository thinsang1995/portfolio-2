import React from 'react'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'

const CounterItem = ({ iconKey, number, content }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '600',
        margin: '1rem 0',
        width: '25vw'
      }}
    >
      <Icon iconKey={iconKey} />
      <h3 
        style={{
          margin: '0.8rem 0', 
          fontSize: '1.8rem', 
          fontWeight: '900'
        }}
      >{number}</h3>
      <Text content={content} />
    </div>
  )
}

export default CounterItem
