import React, { useEffect } from 'react'
import './Navbar.css'
import Navigation from '../../molecules/Navigation'

const Navbar = ({ links, handleScrollToEl, handleShowNavItem, isShow }) => {

  useEffect(() => {
    const sections = document.querySelectorAll('section')

    const handleActiveNavigation = () => {
      sections.forEach(section => {
        let sectionHeight = section.offsetHeight
        let sectionTop = section.offsetTop - 100

        if((window.pageYOffset > sectionTop) && (window.pageYOffset <= sectionTop + sectionHeight)) {
          document.querySelector('.navigation-' + section.childNodes[0].id).classList.add('active')
        } else {
          document.querySelector('.navigation-' + section.childNodes[0].id).classList.remove('active')
        }
      })
    }
    window.addEventListener('scroll', handleActiveNavigation)
  })

  return (
    <div className='nav-bar'>
      <h2>Sang</h2>
      <Navigation 
        links={links} 
        handleScrollToEl={handleScrollToEl} 
        isShow={isShow}
      />
      <div className='hamburger' onClick={handleShowNavItem}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  )
}

export default Navbar
