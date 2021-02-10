import React from 'react'
import Icon from '../../atoms/Icon/Icon'
import Text from '../../atoms/Text/Text'

const ServicesItem = ({ icon, title, textContent }) => {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '3rem 2rem',
        boxShadow: '0px 10px 30px -8px rgb(0 0 0 / 10%)',
        borderRadius: '10px',
      }}
    >
      <Icon iconKey={icon} key={icon} />
      <h4 
        style={{
          margin: '1.3rem 0', 
          fontSize: '20px', 
          fontWeight: '800'
        }}
      >
        {title}
      </h4>
      <Text textContent={textContent} />
    </div>
  )
}

export default ServicesItem