import React, { forwardRef } from 'react'
import ContainerWrapper from '../../atoms/ContainerWrapper'
import WorkFilterNav from '../../molecules/WorkFilterNav'
import WorkList from '../../organisms/WorkList'

const Portfolio = (props, ref) => {
  return (
    <ContainerWrapper ref={ref}>
      <div>
        <h2>Portfolio.</h2>
        <WorkFilterNav />
        <WorkList />
      </div>
    </ContainerWrapper>
  )
}

export default forwardRef(Portfolio)
