import React, { forwardRef } from 'react'
import ContainerWrapper from '../../atoms/ContainerWrapper'
import Image from '../../atoms/Image'
import './About.css'
import AboutDescription from '../../organisms/AboutDescription'

const About = ({ backgroundColor, imageSrc, content }, ref) => {
  return (
    <ContainerWrapper
      backgroundColor={backgroundColor}
      ref={ref}
    >
      <div className='about-container'>
        <div className='about-avatar'>
          <Image imageSrc={imageSrc} />
        </div>
        <AboutDescription content={content} />
      </div>
    </ContainerWrapper>
  )
}

export default forwardRef(About)
