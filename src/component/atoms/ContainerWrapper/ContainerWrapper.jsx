import React from 'react'

const ContainerWrapper = ({ children, backgroundImage }) => {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'unset',
      backgroundSize: 'cover',
      height: '100vh', 
      width: '100vw',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      color: '#fff',
      }}
    >
      {children}
    </div>
  )
}

export default ContainerWrapper
