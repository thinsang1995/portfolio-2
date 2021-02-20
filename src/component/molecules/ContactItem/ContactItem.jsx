import React from 'react'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'

const ContactItem = ({ iconKey, title, content }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      width: '32vw',
      marginTop: '2rem'
    }}>
      <Icon iconKey={iconKey} />
      <h6 style={{
        margin: '0.8rem 0',
        fontSize: '1rem',
        fontWeight: '600',
      }}>{title}</h6>
      <Text content={content} />
    </div>
  )
}

export default ContactItem
