import React, { forwardRef } from 'react'
import ContainerWrapper from '../../atoms/ContainerWrapper'
import Image from '../../atoms/Image'
import './About.css'
import AboutInfo from '../../organisms/AboutInfo'

const About = ({ backgroundColor, imageName, textContent }, ref) => {
  return (
    <ContainerWrapper
      backgroundColor={backgroundColor}
      ref={ref}
    >
      <div className='about-container'>
        <div className='about-avatar'>
          <Image imageName={imageName} />
        </div>
        <AboutInfo textContent={textContent} />
      </div>
    </ContainerWrapper>
  )
}

export default forwardRef(About)
