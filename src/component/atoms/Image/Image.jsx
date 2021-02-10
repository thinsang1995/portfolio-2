import React from 'react'
import aboutImg from '../../../assets/avata-picture.png'
import portfolioImg1 from '../../../assets/portfolio-1.png'
import portfolioImg2 from '../../../assets/portfolio-2.png'
import portfolioImg3 from '../../../assets/portfolio-3.png'
import portfolioImg4 from '../../../assets/portfolio-4.png'
import portfolioImg5 from '../../../assets/portfolio-5.png'
import portfolioImg6 from '../../../assets/portfolio-6.png'
import blogImg1 from '../../../assets/blog-1.jpg'
import blogImg2 from '../../../assets/blog-2.jpeg'
import blogImg3 from '../../../assets/blog-3.jpg'
import blogImg4 from '../../../assets/blog-4.jpg'
import customerImg from '../../../assets/customer-avata.png'

const images = {
  aboutAvata: aboutImg,
  portfolioImageNum1: portfolioImg1,
  portfolioImageNum2: portfolioImg2,
  portfolioImageNum3: portfolioImg3,
  portfolioImageNum4: portfolioImg4,
  portfolioImageNum5: portfolioImg5,
  portfolioImageNum6: portfolioImg6,
  blogImageNum1: blogImg1,
  blogImageNum2: blogImg2,
  blogImageNum3: blogImg3,
  blogImageNum4: blogImg4,
  customerImage: customerImg,
}

const Image = ({ imageName }) => {
  return <img src={images[imageName]} alt='' />
}

export default Image