import React, { useRef } from 'react'
import './App.css'
import Home from './component/pages/Home'
import Navigation from './component/molecules/Navigation'
import backgroundImage from './assets/background-home.png'
import Image from './component/atoms/Image'


const links = ['home', 'about']

function App() {
  const aboutRef = useRef(null)
  const homeRef = useRef(null)

  const mapScreens = {
    about: aboutRef,
    home: homeRef,
  }

  const handleScrollToEl = (e) => {
    if(mapScreens[e.target.id].current) {
      window.scrollTo({
        behavior: 'smooth',
        top: mapScreens[e.target.id].current.offsetTop
      })
    }
  }

  return (
    <div style={{ width: '100vw', height: '610vh' }}>
      <Navigation 
        links={links} 
        handleScrollToEl={handleScrollToEl}
      />
      <Home backgroundImage={backgroundImage} ref={homeRef} />
      {/* <Home backgroundColor='white' ref={aboutRef}/> */}
      <Image imageName='aboutImage' />
    </div>
  );
}

export default App;
