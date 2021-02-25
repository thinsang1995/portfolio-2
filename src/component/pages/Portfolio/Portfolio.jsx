import React, { useState, forwardRef } from 'react'
import './Portfolio.css'
import ContainerWrapper from '../../atoms/ContainerWrapper'
import WorkNav from '../../molecules/WorkNav'
import WorkList from '../../organisms/WorkList'
import portfolioImg1 from '../../../assets/portfolio-1.jpeg'
import portfolioImg2 from '../../../assets/portfolio-2.jpg'
import portfolioImg3 from '../../../assets/portfolio-3.jpg'
import portfolioImg4 from '../../../assets/portfolio-4.jpg'
import portfolioImg5 from '../../../assets/portfolio-5.jpg'
import portfolioImg6 from '../../../assets/portfolio-6.jpg'

const works = [
  {imageSrc: portfolioImg1, imageTitle: 'WEB DESIGN'},
  {imageSrc: portfolioImg2, imageTitle: 'UX/UI'},
  {imageSrc: portfolioImg3, imageTitle: 'PHOTOSHOP'},
  {imageSrc: portfolioImg4, imageTitle: 'WEB DESIGN'},
  {imageSrc: portfolioImg5, imageTitle: 'UX/UI'},
  {imageSrc: portfolioImg6, imageTitle: 'WEB DESIGN'},
]

const Portfolio = (props, ref) => {

  const [imageIndex, setImageIndex] = useState(-1)
  const handleModelImage = (imageIndex) => {
    setImageIndex(imageIndex)
  }

  return (
    <ContainerWrapper ref={ref}>
      <div id='portfolio'>
        <h2>Portfolio.</h2>
        <WorkNav />
        <WorkList works={works} handleModelImage={handleModelImage} />
      </div>
      <div 
        className={`model-image ${imageIndex >= 0 ? 'showModel' : ''}`} 
        onClick={() => handleModelImage(-1)}
      >
        <img src={works[imageIndex] && works[imageIndex].imageSrc} alt='' />
      </div>
    </ContainerWrapper>
  )
}

export default forwardRef(Portfolio)
