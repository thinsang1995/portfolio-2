import React, { forwardRef } from 'react'
import './ContainerWrapper.css'

const ContainerWrapper = ({ children, backgroundImage, backgroundColor }, ref) => {
  return (
    <div
      className='container-wrapper'
      ref={ref}
      style={{
        background: `${backgroundColor}`,
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'unset',
        backgroundSize: 'cover',
      }}
    >
      {children}
    </div>
  )
}

export default forwardRef(ContainerWrapper)
