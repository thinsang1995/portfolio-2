import React from 'react'
import './ServicesList.css'
import ServicesItem from '../../molecules/ServicesItem'

const ServicesList = () => {

  const services = [
    {icons: 'html', title: 'HTML5'},
    {icons: 'css', title: 'CSS3'},
    {icons: 'sass', title: 'SASS'},
    {icons: 'javascript', title: 'JavaScript'},
    {icons: 'react', title: 'React'},
    {icons: 'redux', title: 'Redux'},
  ] 

  return (
    <div className='services-list'>
      {services.map((service, index) => (
        <ServicesItem 
          key={index} 
          icon={service.icons} 
          title={service.title} 
          textContent="Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"
        />
      ))}
    </div>
  )
}

export default ServicesList

