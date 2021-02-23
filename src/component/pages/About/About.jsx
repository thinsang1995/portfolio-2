import React, { forwardRef } from 'react'
import ContainerWrapper from '../../atoms/ContainerWrapper'
import Image from '../../atoms/Image'
import './About.css'
import AboutDescription from '../../organisms/AboutDescription'

const About = ({ backgroundColor, imageSrc, content, buttonName }, ref) => {
  return (
    <ContainerWrapper
      backgroundColor={backgroundColor}
      ref={ref}
    >
      <div id='about' className='about-container'>
        <div className='about-avatar'>
          <Image imageSrc={imageSrc} />
        </div>
        <AboutDescription content={content} buttonName={buttonName} />
      </div>
    </ContainerWrapper>
  )
}

export default forwardRef(About)
