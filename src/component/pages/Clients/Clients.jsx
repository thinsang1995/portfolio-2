import React, { forwardRef } from 'react'
import Counter from '../../organisms/Counter'
import Feedbacks from '../../organisms/Feedbacks'

const Clients = (props, ref) => {
  return (
    <section className='clients-section'>
      <div
        id='clients'
        ref={ref}
        style={{
          height: 'auto', 
          margin: '0',
          padding: '9vh 0',
          backgroundColor: 'rgb(247, 247, 247)'
        }}
      >
        <h2>Testimonials.</h2>
        <Feedbacks />
      </div>
        <Counter />
    </section>
  )
}

export default forwardRef(Clients)
