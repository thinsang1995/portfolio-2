import React from 'react'
import './ContactInfo.css'
import ContactItem from '../../molecules/ContactItem'

const contactInfo = [
  {icon: 'navigate', title: 'Address', content: '6834 Hollywood Blvd - Los Angeles CA'},
  {icon: 'email', title: 'Email', content: 'Support@website.com'},
  {icon: 'phone', title: 'Phone', content: '+20 010 2517 8918'},
]

const ContactInfo = () => {
  return (
    <div className='contact-info'>
      {contactInfo.map(contact => (
        <ContactItem 
          key={contact.icon}
          iconKey={contact.icon} 
          title={contact.title} 
          content={contact.content} 
        />
      ))}
    </div>
  )
}

export default ContactInfo
