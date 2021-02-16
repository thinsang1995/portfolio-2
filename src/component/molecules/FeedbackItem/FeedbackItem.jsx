import React from 'react'
import './FeedbackItem.css'
import Image from '../../atoms/Image'
import Text from '../../atoms/Text'

const FeedbackItem = ({ clientAvata, clientFeedback, clientName, clientCompany }) => {
  return (
    <div className='client-item'>
      <div className='client-avata'>
        <Image imageSrc={clientAvata} />
      </div>
      <Text content={clientFeedback} />
      <h6>{clientName}</h6>
      <span>{clientCompany}</span>
    </div>
  )
}

export default FeedbackItem
