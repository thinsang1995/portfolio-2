import React, { forwardRef } from 'react'
import BlogList from '../../organisms/BlogList'

const Blog = (props, ref) => {
  return (
    <div>
      <div
        ref={ref}
        style={{
          height: '82vh', 
          margin: '0',
          padding: '9vh 0',
          backgroundColor: 'rgb(247, 247, 247)'
        }}
      >
        <h2>Our Blog.</h2>
        <BlogList />
      </div>
    </div>
  )
}

export default forwardRef(Blog)
