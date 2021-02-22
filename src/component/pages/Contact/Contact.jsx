import React, { forwardRef } from 'react'
import './Contact.css'
import ContactForm from '../../organisms/ContactForm'
import ContactInfo from '../../organisms/ContactInfo'

const Contact = ({ buttonName }, ref) => {
  return (
    <div className="contact" ref={ref}>
      <h2>Contact.</h2>
      <ContactInfo />
      <ContactForm buttonName={buttonName} />
    </div>
  )
}

export default forwardRef(Contact)
