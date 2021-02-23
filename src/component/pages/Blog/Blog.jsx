import React, { forwardRef } from 'react'
import BlogList from '../../organisms/BlogList'

const Blog = (props, ref) => {
  return (
    <section
      className='blog-section'
      ref={ref}
      style={{
        height: '82vh', 
        margin: '0',
        padding: '9vh 0',
        backgroundColor: 'rgb(247, 247, 247)'
      }}
    >
      <div id='blog'>
        <h2>Our Blog.</h2>
        <BlogList />
      </div>
    </section>
  )
}

export default forwardRef(Blog)
