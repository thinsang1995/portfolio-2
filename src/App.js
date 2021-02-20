import React, { useRef, useState } from 'react'
import './App.css'
import Home from './component/pages/Home'
import backgroundImage from './assets/background-home.png'
import aboutImg from './assets/avata-picture.png'
import About from './component/pages/About/About'
import Navbar from './component/organisms/Navbar/Navbar'
import Services from './component/pages/Services'
import Portfolio from './component/pages/Portfolio'
import Clients from './component/pages/Clients'
import Blog from './component/pages/Blog'
import Contact from './component/pages/Contact'
import Footer from './component/pages/Footer'


const links = ['home', 'about', 'services', 'portfolio', 'clients', 'blog', 'contact']

const aboutDescription = "I am Thin Sang Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever It has survived not only five centuries, but also the leap into electronic  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"

const aboutButtonName = 'Contact Me'
const contactButtonName = 'Submit'

const greyColor = '#f7f7f7'

const footerContent = 'Copy Right 2018 © By Daniels All Rights Reserved'

function App() {
  const aboutRef = useRef(null)
  const homeRef = useRef(null)
  const servicesRef = useRef(null)
  const portfolioRef = useRef(null)
  const clientsRef = useRef(null)
  const blogRef = useRef(null)
  const contactRef = useRef(null)

  const mapScreens = {
    about: aboutRef,
    home: homeRef,
    services: servicesRef,
    portfolio: portfolioRef,
    clients: clientsRef,
    blog: blogRef,
    contact: contactRef
  }

  const handleScrollToEl = (e) => {
    if(mapScreens[e.target.id].current) {
      window.scrollTo({
        behavior: 'smooth',
        top: mapScreens[e.target.id].current.offsetTop
      })
    }
    handleShowNavItem()
  }

  const [isShow, setIsShow] = useState(false)

  const handleShowNavItem = () => {
    setIsShow(!isShow)
  }

  return (
    <div style={{ width: '100vw', height: 'auto' }}>
      <Navbar 
        links={links} 
        handleScrollToEl={handleScrollToEl}
        handleShowNavItem={handleShowNavItem}
        isShow={isShow}
      />
      <Home backgroundImage={backgroundImage} ref={homeRef} />
      <About imageSrc={aboutImg} content={aboutDescription} buttonName={aboutButtonName} ref={aboutRef} />
      <Services backgroundColor={greyColor} ref={servicesRef} />
      <Portfolio ref={portfolioRef} />
      <Clients ref={clientsRef} />
      <Blog ref={blogRef} />
      <Contact buttonName={contactButtonName} ref={contactRef} />
      <Footer content={footerContent} />
    </div>
  );
}

export default App;
