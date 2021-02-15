import React from 'react'
import Button from '../../atoms/Button/Button'
import Skills from '../../molecules/Skills/Skills'
import Text from '../../atoms/Text/Text'

const AboutInfo = ({ skillLists, textContent }) => {
  return (
    <div>
      <h3 style={{fontSize: '30px'}}>About Me.</h3>
      <h5 
        style={{
          margin: '0',
          marginBottom: '1rem',
          color: '#999',
          letterSpacing: '2px',
          lineHeight: '1.6',
          fontWeight: '400',
          fontSize: '18px'
        }}
      >
        FRONT END DEVELOPER
      </h5>
      <Text textContent={textContent} />
      <Skills skillLists={skillLists} />
      <Button content='Contact Me' />
    </div>
  )
}

export default AboutInfo