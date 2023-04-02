import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Work from '../Components/Work'

function Project() {
  return (
    <>
    <Navbar/>
    <Hero heading="PROJECTS" text="Some of my projects are given"/>
    <Work/>
    <Footer/>
    </>
  )
}

export default Project