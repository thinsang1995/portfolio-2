import React, { forwardRef } from 'react'
import ContainerWrapper from '../../atoms/ContainerWrapper'
import ServicesList from '../../organisms/ServicesList'

const Services = ({ backgroundColor }, ref) => {
  return (
    <ContainerWrapper backgroundColor={backgroundColor} ref={ref}>
      <div>
        <h2>Services.</h2>
        <ServicesList />
      </div>
    </ContainerWrapper>
  )
}

export default forwardRef(Services)
