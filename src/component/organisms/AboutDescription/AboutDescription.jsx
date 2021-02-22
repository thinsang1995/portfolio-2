import React from 'react'
import './AboutDescription.css'
import Button from '../../atoms/Button'
import Skills from '../../molecules/Skills'
import Text from '../../atoms/Text'

const AboutDescription = ({ content, buttonName }) => {
  return (
    <div className='about-desc'>
      <h3>About Me.</h3>
      <h5>
        FRONT END DEVELOPER
      </h5>
      <Text content={content} />
      <Skills />
      <Button content={buttonName} />
    </div>
  )
}

export default AboutDescription
