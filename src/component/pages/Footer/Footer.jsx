import React from 'react'
import Text from '../../atoms/Text'

const Footer = ({ content }) => {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
        backgroundColor: 'black',
      }}
    >
      <Text content={content} />
    </div>
  )
}

export default Footer
