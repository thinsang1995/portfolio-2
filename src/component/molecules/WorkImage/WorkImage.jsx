import React from 'react'
import './WorkImage.css'
import Icon from '../../atoms/Icon'
import Image from '../../atoms/Image'

const WorkImage = ({ imageName, imageTitle }) => {

  const overlayIcons = ['link', 'zoom']

  return (
    <div className='work-image'>
      <Image imageName={imageName} />
      <div className='work-overlay'>
        <div className='overlay-info'>
          <h6>{imageTitle}</h6>
          <div className='work-icons'>
            {overlayIcons.map(icon => (
              <Icon key={icon} iconKey={icon} isSmall isFill />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkImage
