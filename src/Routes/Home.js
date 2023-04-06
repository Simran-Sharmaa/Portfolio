import React from 'react'
// import Hero from '../Components/Hero'
import { Link } from 'react-router-dom'
import '../Components/Style/style.css'
import Navbar from '../Components/Navbar'
import image from '../Components/Assets/IMG20220304153027.jpg'
import Footer from '../Components/Footer'

import Skills from '../Components/Skills'
function Home() {
 
  return (
    <>
    
    <div className='container'>
    <Navbar />
    <div className='content'>
    <img className='photo' src={image} alt='me'/>
    <p className='name'>Hi , My name is Simran Sharma </p>
    <p className='fs'>Web Developer</p>
   
      <button className='btn'><Link to ="/project">Projects</Link></button>
      <button className='btn'><Link to ="/contact">Contact</Link></button>
    
      </div>  
   
      
  
    </div>
    <div>
 
      </div>
      {/* <About/>
      <Project/>
      <Contact/> */}
      <Skills/>

      <Footer/>
    </>
  )
}

export default Home