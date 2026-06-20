import { useState } from 'react'
import './App.css'
import Landing from './Pages/Landing'
import Videocall from './Pages/Videocall'
import NavBar from './Component/NavBar/NavBar'
function App() {
 

  return (
    <>
     <div className="hero-glow"></div>
    <NavBar/>
    {/* <Landing/> */}
    <Videocall/>
    </>
  )
}

export default App
