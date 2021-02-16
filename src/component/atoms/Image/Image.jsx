import React from 'react'
import blogImg1 from '../../../assets/blog-1.jpg'
import blogImg2 from '../../../assets/blog-2.jpeg'
import blogImg3 from '../../../assets/blog-3.jpg'
import blogImg4 from '../../../assets/blog-4.jpg'

const Image = ({ imageSrc }) => {
  return <img src={imageSrc} alt={imageSrc} />
}

export default Image