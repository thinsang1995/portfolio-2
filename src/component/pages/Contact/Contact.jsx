import React, { forwardRef } from 'react'
import ContactForm from '../../organisms/ContactForm'
import ContactInfo from '../../organisms/ContactInfo'
import ContainerWrapper from '../../atoms/ContainerWrapper'

const Contact = ({ buttonName }, ref) => {
  return (
    <ContainerWrapper ref={ref}>
      <div id='contact'>
        <h2>Contact.</h2>
        <ContactInfo />
        <ContactForm buttonName={buttonName} />
      </div>

    </ContainerWrapper>
  )
}

export default forwardRef(Contact)
