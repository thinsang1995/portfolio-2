import React, { forwardRef } from 'react'
import ContainerWrapper from '../../atoms/ContainerWrapper'
import WorkNav from '../../molecules/WorkNav'
import WorkList from '../../organisms/WorkList'

const Portfolio = (props, ref) => {
  return (
    <ContainerWrapper ref={ref}>
      <div id='portfolio'>
        <h2>Portfolio.</h2>
        <WorkNav />
        <WorkList />
      </div>
    </ContainerWrapper>
  )
}

export default forwardRef(Portfolio)
