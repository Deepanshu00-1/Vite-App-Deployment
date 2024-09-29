import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  return(
    <>
    <header style={{height: '10vh',width: '100%',backgroundColor:'cyan',color:'white',display:'flex'}}>
      <div className="nav1" style={{height:'100%',width:'70%',display:'flex',gap:'3vw'}}>
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Service</h2>
      </div>
      <div className="nav2" style={{height:'100%',width:'30%',display:'flex',alignContent:'center',alignItems:'center',justifyContent:'center'}}>
        <button style={{height:'5vh',width:'7vw',fontSize:'3vh',borderRadius:'2vh',}} >Login</button>
      </div>
    </header>
    <body style={{height:'90vh', width: '100%',backgroundColor:'rgb(206, 150, 133)', displa:'flex', alignItems:'center', justifyContent: 'center',fontSize:'5vh'}}>
      <h1 style={{marginBottom:'40vh'}}>Hello , This is a Landing Page</h1>
    </body>
    </>
  )
}

export default App
