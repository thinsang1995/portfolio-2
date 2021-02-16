import React, { forwardRef } from 'react'
import './Home.css'
import Typical from 'react-typical'
import HomeIcons from '../../molecules/HomeIcons'
import ContainerWrapper from '../../atoms/ContainerWrapper'

const Home = ({ backgroundImage, backgroundColor }, ref) => {
  return (
    <ContainerWrapper 
      backgroundImage={backgroundImage} 
      backgroundColor={backgroundColor} 
      ref={ref}
    >
      <div style={{
        width: '80vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <div>
          <h1 
            style={{
              fontSize: '4rem',
              margin: '0 10px'
            }}
          >
            Hello
          </h1>
        </div>
        <div className='home-text'>
          <p>I Am&nbsp;</p>
          <Typical
            steps={['Sang', 2000, 'Developer',3500, 'from Vietnam', 1000]}
            loop={Infinity}
            wrapper="span"
          />
        </div>
        <HomeIcons />
      </div>
    </ContainerWrapper>
  )
}

export default forwardRef(Home)
