import React from 'react'
import './ContactItem.css'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'

const ContactItem = ({ iconKey, title, content }) => {
  return (
    <div className='contact-item'>
      <Icon iconKey={iconKey} />
      <h6>{title}</h6>
      <Text content={content} />
    </div>
  )
}

export default ContactItem
