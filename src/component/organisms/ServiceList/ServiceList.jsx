import React from 'react'
import './ServiceList.css'
import ServiceItem from '../../molecules/ServiceItem'

// Just for homework, it can't be use in reality
const services = {
  html: ['HTML5', "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"],
  css: ['CSS3', "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"],
  sass: ['SASS', "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"],
  javascript: ['JavaScript', "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"],
  react: ['React', "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"],
  redux: ['Redux', "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"],
}

const ServiceList = () => {
  return (
    <div className='services-list'>
      {Object.keys(services).map(key => (
        <ServiceItem 
          key={key} 
          icon={key} 
          title={services[key][0]} 
          textContent={services[key][1]}
        />
      ))}
    </div>
  )
}

export default ServiceList

