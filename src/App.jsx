import React, { useEffect, useState } from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experiance from './components/experiance/Experiance'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Service from './components/services/Service'
import './index.css'



const App = () => {
  
  
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experiance/>
    <Service/>
    <Contact/>
    <Footer/>    
    </>
  )
}

export default App