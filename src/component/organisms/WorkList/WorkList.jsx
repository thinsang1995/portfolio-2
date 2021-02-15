import React from 'react'
import './WorkList.css'
import WorkImage from '../../molecules/WorkImage'

const WorkList = () => {

  const works = [
    {imageName: 'portfolioImageNum1', imageTitle: 'WEB DESIGN'},
    {imageName: 'portfolioImageNum2', imageTitle: 'UX/UI'},
    {imageName: 'portfolioImageNum3', imageTitle: 'PHOTOSHOP'},
    {imageName: 'portfolioImageNum4', imageTitle: 'WEB DESIGN'},
    {imageName: 'portfolioImageNum5', imageTitle: 'UX/UI'},
    {imageName: 'portfolioImageNum6', imageTitle: 'WEB DESIGN'},
  ]

  return (
    <div className='work-list'>
      {works.map((item, index) => (
        <WorkImage 
          key={index}
          imageName={item.imageName} 
          imageTitle={item.imageTitle} 
        />
      ))}
    </div>
  )
}

export default WorkList
