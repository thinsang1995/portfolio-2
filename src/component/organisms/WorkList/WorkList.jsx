import React from 'react'
import './WorkList.css'
import WorkImage from '../../molecules/WorkImage'

const WorkList = ({ works, handleModelImage }) => {
  return (
    <div className='work-list'>
      {works.map((item, index) => (
        <WorkImage 
          key={item.imageSrc}
          imageSrc={item.imageSrc} 
          imageTitle={item.imageTitle} 
          handleModelImage={handleModelImage}
          index={index}
        />
      ))}
    </div>
  )
}

export default WorkList
