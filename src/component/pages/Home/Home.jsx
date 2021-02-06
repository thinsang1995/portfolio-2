import React from 'react'
import Typical from 'react-typical'
import HomeIcons from '../../molecules/HomeIcons'

const Home = ({ homeImage }) => {
  return (
    <div style={{ 
      backgroundImage: `url(${homeImage})`,
      backgroundRepeat: 'unset',
      backgroundSize: 'cover',
      height: '100vh', 
      width: '100vw',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      color: '#fff',
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
  )
}

export default Home
