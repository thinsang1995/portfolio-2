import React, { forwardRef } from 'react'
import Counter from '../../organisms/Counter'
import Feedbacks from '../../organisms/Feedbacks'

const Clients = (props, ref) => {
  return (
    <div>
      <div
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
    </div>
  )
}

export default forwardRef(Clients)
