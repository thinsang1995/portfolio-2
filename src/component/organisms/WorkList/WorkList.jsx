import React from 'react'
import './WorkList.css'
import WorkImage from '../../molecules/WorkImage'
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

const WorkList = () => {
  return (
    <div className='work-list'>
      {works.map(item => (
        <WorkImage 
          key={item.imageSrc}
          imageSrc={item.imageSrc} 
          imageTitle={item.imageTitle} 
        />
      ))}
    </div>
  )
}

export default WorkList
