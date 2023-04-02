import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import  Form  from '../Components/Form'

function Contact() {
  return (
    <>
    <Navbar/>
    <Hero heading="CONTACT" text="You can contact me via this form" />
    <Form/>
    <Footer/>
    </>
  )
}

export default Contact