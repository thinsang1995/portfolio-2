import React from 'react'
import './App.css'
import homeImage from './assets/background-home.png'
import Home from './component/pages/Home'

function App() {
  return (
    <div style={{ width: '100vw', height: '630vh' }}>
      <Home homeImage={homeImage} />
    </div>
  );
}

export default App;
