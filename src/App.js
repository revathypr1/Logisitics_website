import React from 'react'
import Spotlight from './component/screens/Spotlight'
import Header from './includes/Header'
import './App.css'
import About from './component/screens/About'
import Services from './component/screens/Services'
export default function 
() {
  return (
    <div >
      <Header/>
      <div className='wrapper'>
      <Spotlight/>
      <About/>
      <Services/>
      </div>
    </div>
  )
}
