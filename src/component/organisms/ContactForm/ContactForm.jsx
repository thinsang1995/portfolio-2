import React from 'react'
import './ContactForm.css'
import Button from '../../atoms/Button'

const ContactForm = ({buttonName}) => {
  return (
    <form className='contact-form'>
      <div className='input-block'>
        <input type='text' placeholder='Name' required='required' />
        <input type='text' placeholder='Email' required='required' />
      </div>
      <textarea placeholder='Message' required='required'></textarea>
      <Button content={buttonName} isFill />
    </form>
  )
}

export default ContactForm
