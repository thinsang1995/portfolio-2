import React, { useRef, useState } from 'react'
import './App.css'
import Home from './component/pages/Home'
import backgroundImage from './assets/background-home.png'
import About from './component/pages/About/About'
import Navbar from './component/organisms/Navbar/Navbar'
import Services from './component/pages/Services'
import Portfolio from './component/pages/Portfolio'


const links = ['home', 'about', 'services', 'portfolio', 'blog', 'contact']

const texts = {
  aboutText: "I am Thin Sang Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever It has survived not only five centuries, but also the leap into electronic  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
}

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
    <div style={{ width: '100vw', height: '610vh' }}>
      <Navbar 
        links={links} 
        handleScrollToEl={handleScrollToEl}
        handleShowNavItem={handleShowNavItem}
        isShow={isShow}
      />
      <Home backgroundImage={backgroundImage} ref={homeRef} />
      <About imageName='aboutAvata' textContent={texts.aboutText} ref={aboutRef} />
      <Services backgroundColor='#f7f7f7' ref={servicesRef} />
      <Portfolio ref={portfolioRef} />
    </div>
  );
}

export default App;
