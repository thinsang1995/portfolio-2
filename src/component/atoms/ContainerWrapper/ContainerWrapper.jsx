import React, { forwardRef } from 'react'

const ContainerWrapper = ({ children, backgroundImage, backgroundColor }, ref) => {
  return (
    <section
      className='container-wrapper'
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
        height: '82vh',
        width: '100%',
        margin: '0',
        padding: '9vh 0',
        color: '#fff',
        zIndex: '-1',
      }}
    >
      {children}
    </section>
  )
}

export default forwardRef(ContainerWrapper)
