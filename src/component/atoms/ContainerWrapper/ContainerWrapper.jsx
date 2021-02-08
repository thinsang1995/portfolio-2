import React, { forwardRef } from 'react'

const ContainerWrapper = ({ children, backgroundImage, backgroundColor }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        background: `${backgroundColor}`,
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

export default forwardRef(ContainerWrapper)
