import React from 'react'
import './Feedbacks.css'
import FeedbackItem from '../../molecules/FeedbackItem'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import customerImg1 from '../../../assets/customer-avata-1.png'
import customerImg2 from '../../../assets/customer-avata-2.jpg'
import customerImg3 from '../../../assets/customer-avata-3.png'

const clients = [
  {avata: customerImg1, content: "Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley oftype and scrambled it to make a type specimen book." , name: 'Alex Smith', company: 'ABC Company'},
  {avata: customerImg2, content: "Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley oftype and scrambled it to make a type specimen book." , name: 'David Beckham', company: 'ABCDE Group'},
  {avata: customerImg3, content: "Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley oftype and scrambled it to make a type specimen book." , name: 'John Cena', company: 'XYZ Company'},
]

const Feedbacks = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  }

  return (
    <div className='feed-backs'
      style={{
        width: '80vw', 
        margin: '5vh auto',
      }}
    >
      <Slider {...settings}>
        {clients.map(client => (
          <FeedbackItem 
            key={client.avata.toString()} 
            clientAvata={client.avata} 
            clientFeedback={client.content} 
            clientName={client.name} 
            clientCompany={client.company} 
          />
        ))}
      </Slider>
    </div>
  )
}

export default Feedbacks
