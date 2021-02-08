import React from 'react'

const Text = ({ textContent }) => {
  return <p 
    style={{
      margin: '0',
      lineHeight: '1.6',
      fontSize: '1rem',
      color: '#748182',
      wordSpacing: '1.5px'
    }}
  >
    {textContent}
  </p>
}

export default Text