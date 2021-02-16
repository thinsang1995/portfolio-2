import React from 'react'
import './Feedbacks.css'
import ClientFeedback from '../../molecules/ClientFeedback'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedbacks = () => {

  const clients = [
    {avata: 'customerImage1', content: "Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley oftype and scrambled it to make a type specimen book." , name: 'Alex Smith', company: 'ABC Company'},
    {avata: 'customerImage2', content: "Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley oftype and scrambled it to make a type specimen book." , name: 'David Beckham', company: 'ABCDE Group'},
    {avata: 'customerImage3', content: "Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley oftype and scrambled it to make a type specimen book." , name: 'John Cena', company: 'XYZ Company'},
  ]

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: null,
    nextArrow: null,
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
          <ClientFeedback 
            key={client.avata} 
            clientAvata={client.avata} 
            feedbackContent={client.content} 
            clientName={client.name} 
            clientCompany={client.company} 
          />
        ))}
      </Slider>
    </div>
  )
}

export default Feedbacks
