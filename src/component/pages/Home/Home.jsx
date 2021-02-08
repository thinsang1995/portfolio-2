import React, { forwardRef } from 'react'
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
          <h1 style={{fontSize: '4rem', margin: '0 10px'}}>Hello</h1>
        </div>
        <div style={{fontSize: '1rem', display: 'flex'}}>
          <h1>I am&nbsp;</h1>
          <Typical
            steps={['Sang', 1000, 'Developer', 1000, 'from Vietnam', 1000]}
            loop={Infinity}
            wrapper="h1"
          />
        </div>
        <HomeIcons />
      </div>
    </ContainerWrapper>
  )
}

export default forwardRef(Home)
