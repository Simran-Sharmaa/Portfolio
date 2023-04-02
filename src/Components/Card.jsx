import React from 'react'
import resume from  './Assets/Simran Resume.pdf'
import './Style/Card.css'
function Card() {
  return (
    
     
    <div className="about_main">
        <p className='info'>
            I am a fullstack developer with a passion of developing different complex web applications . I am a fast learner with good grasping skills.
        </p>
        <p className="info"> You can also check my resume.</p>

    <div className="btns">

       <button className='btn'>

         <a target="_blank" href={resume} >Resume</a>
        </button>
      
       {/* <button className='btn'>
         <a href={resume} download="Resume">Download Resume</a>
        </button> */}
        {/* <button className='btn'>
            <Link to='/contact'> Hire Me</Link>
        </button> */}
    </div>
      
    </div>
  )
}

export default Card