import React from 'react'
import './BlogItem.css'
import Image from '../../atoms/Image'

const BlogItem = ({ imageSrc, blogTheme, blogTitle }) => {
  return (
    <div className='blog-item'>
      <div className='blog-img'>
        <Image imageSrc={imageSrc} />
      </div>
      <div className='blog-content'>
        <h6>{blogTheme.charAt(0).toUpperCase() + blogTheme.slice(1)}</h6>
        <h4>{blogTitle}</h4>
        <span>Read More</span>
      </div>
    </div>
  )
}

export default BlogItem
