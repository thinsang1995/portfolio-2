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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto', 
        width: '100vw',
        margin: '0',
        color: '#fff',
        zIndex: '-1'
      }}
    >
      {children}
    </div>
  )
}

export default forwardRef(ContainerWrapper)
