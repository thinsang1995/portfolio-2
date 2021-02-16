import React from 'react'
import './ClientFeedback.css'
import Image from '../../atoms/Image'
import Text from '../../atoms/Text'

const ClientFeedback = ({ clientAvata, feedbackContent, clientName, clientCompany }) => {
  return (
    <div className='client-item'>
      <div className='client-avata'>
        <Image imageName={clientAvata} />
      </div>
      <Text content={feedbackContent} />
      <h6>{clientName}</h6>
      <span>{clientCompany}</span>
    </div>
  )
}

export default ClientFeedback
