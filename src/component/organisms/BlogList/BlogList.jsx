import React from 'react'
import BlogItem from '../../molecules/BlogItem'
import blogImg1 from '../../../assets/blog-1.jpg'
import blogImg2 from '../../../assets/blog-2.jpeg'
import blogImg3 from '../../../assets/blog-3.jpg'
import blogImg4 from '../../../assets/blog-4.jpg'
import Slider from 'react-slick'

const blogs = [
  {src: blogImg1, theme: 'WordPress', title: 'Top WordPress Themes and Plugins for Hotels, Travel'},
  {src: blogImg2, theme: 'Trends', title: 'Master These Awesome New Skills in March 2018'},
  {src: blogImg3, theme: 'Themeforest', title: 'The 20 Best Lightroom Presets You Need to Know About'},
  {src: blogImg4, theme: 'Trends', title: 'Best Design Items to Appeal to the Millennial Generation'},
]

const BlogList = () => {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div style={{padding: '0 2rem', margin: '9vh auto', maxWidth: '1170px'}}>
      <Slider {...settings}>
        {blogs.map(blog => (
          <BlogItem 
            key={blog.theme} 
            imageSrc={blog.src}
            blogTheme={blog.theme} 
            blogTitle={blog.title} 
          />
        ))}
      </Slider>
    </div>
  )
}

export default BlogList
