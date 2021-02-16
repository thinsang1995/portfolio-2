import React from 'react'
import './Counter.css'
import CounterItem from '../../molecules/CounterItem'

const counters = {
  people: [850, 'Happy Customers'],
  like: [230, 'Complete Projects'],
  speaker: [9450, 'Lines Of Code'],
  cloudDownload: [780, 'Files Downloaded'],
}

const Counter = () => {
  return (
    <div className='counter'>
      {Object.keys(counters).map(key => (
        <CounterItem 
          key={key}
          iconKey={key} 
          number={counters[key][0]} 
          title={counters[key][1]} 
        />
      ))}
    </div>
  )
}

export default Counter
