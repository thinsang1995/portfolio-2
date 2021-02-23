import React, { forwardRef } from 'react'
import ContainerWrapper from '../../atoms/ContainerWrapper'
import ServiceList from '../../organisms/ServiceList'

const Services = ({ backgroundColor }, ref) => {
  return (
    <ContainerWrapper 
      backgroundColor={backgroundColor} 
      ref={ref}>
      <div id='services'>
        <h2>Services.</h2>
        <ServiceList />
      </div>
    </ContainerWrapper>
  )
}

export default forwardRef(Services)
