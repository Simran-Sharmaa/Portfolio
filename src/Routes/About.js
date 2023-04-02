import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Card from '../Components/Card'
import Skills from '../Components/Skills'

function About() {
  return (
    <>
    <Navbar/>
    <Hero heading="ABOUT ME" text="I've mentioned my skills here"/>
    <Skills/>
    <Card/>
    <Footer/>
    </>
  )
}

export default About