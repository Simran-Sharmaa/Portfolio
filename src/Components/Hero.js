import React from 'react'
import  './Style/HeroStyle.css'
function Hero(props) {
  return (
    <>
    <div className='hero-img'>
      <div className='heading'>
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
    </>
  )
}

export default Hero