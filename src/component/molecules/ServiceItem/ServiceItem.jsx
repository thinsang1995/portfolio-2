import React from 'react'
import './ServiceItem.css'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'

const ServicesItem = ({ icon, title, content }) => {
  return (
    <div className='service-item'>
      <div className='item-flip'>
        <div className='item-front'>
          <Icon iconKey={icon} />
          <h4>{title}</h4>
        </div>
        <div className='item-back'>
          <Text content={content} />
        </div>
      </div>
    </div>
  )
}

export default ServicesItem