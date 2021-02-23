import React from 'react'
import './CounterItem.css'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'

const CounterItem = ({ iconKey, number, title }) => {
  return (
    <div className='counter-item'>
      <Icon iconKey={iconKey} />
      <h3>{number}</h3>
      <Text content={title} />
    </div>
  )
}

export default CounterItem
