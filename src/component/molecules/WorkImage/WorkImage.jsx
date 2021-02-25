import React from 'react'
import './WorkImage.css'
import Icon from '../../atoms/Icon'
import Image from '../../atoms/Image'

const overlayIcons = ['link', 'zoom']

const WorkImage = ({ imageSrc, imageTitle, handleModelImage, index }) => {
  return (
    <div className='work-image'>
      <Image imageSrc={imageSrc} />
      <div className='work-overlay'>
        <div className='overlay-info'>
          <h6>{imageTitle}</h6>
          <div className='work-icons'>
            {overlayIcons.map(icon => (
              <Icon
                key={icon} 
                iconKey={icon} 
                isSmall 
                isFill
                index={index}
                handleModelImage={
                  icon === overlayIcons[1] ? handleModelImage : () => {}
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkImage
