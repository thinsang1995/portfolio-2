import React from 'react'
import aboutImg from '../../../assets/avata-picture.png'
import portfolioImg1 from '../../../assets/portfolio-1.jpeg'
import portfolioImg2 from '../../../assets/portfolio-2.jpg'
import portfolioImg3 from '../../../assets/portfolio-3.jpg'
import portfolioImg4 from '../../../assets/portfolio-4.jpg'
import portfolioImg5 from '../../../assets/portfolio-5.jpg'
import portfolioImg6 from '../../../assets/portfolio-6.jpg'
import blogImg1 from '../../../assets/blog-1.jpg'
import blogImg2 from '../../../assets/blog-2.jpeg'
import blogImg3 from '../../../assets/blog-3.jpg'
import blogImg4 from '../../../assets/blog-4.jpg'
import customerImg1 from '../../../assets/customer-avata-1.png'
import customerImg2 from '../../../assets/customer-avata-2.jpg'
import customerImg3 from '../../../assets/customer-avata-3.png'

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
  customerImage1: customerImg1,
  customerImage2: customerImg2,
  customerImage3: customerImg3,
}

const Image = ({ imageName }) => {
  return <img src={images[imageName]} alt='' />
}

export default Image