import React from 'react'
import './Counter.css'
import CounterItem from '../../molecules/CounterItem'

const Counter = () => {

  const counterItems = [
    {icon: 'people', number: '850', text: 'Happy Customers'},
    {icon: 'like', number: '230', text: 'Complete Projects'},
    {icon: 'speaker', number: '9450', text: 'Lines Of Code'},
    {icon: 'cloudDownload', number: '780', text: 'Files Downloaded'},
  ]

  return (
    <div className='counter'>
      {counterItems.map(item => (
        <CounterItem 
          key={item.icon}
          iconKey={item.icon} 
          number={item.number} 
          textContent={item.text} 
        />
      ))}

    </div>
  )
}

export default Counter
