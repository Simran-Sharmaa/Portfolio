import React from 'react'
import './Style/SkillStyle.css'
function Skills() {
  return (
    <div className='skill-main'>
        <h2 className="heading">My Skills</h2>
    <div className="main-container">
        <div className="frontend">
        <h2>Frontend Development</h2>
        <div className="skill-content">
            <article className='details'>
            <i class="fa-solid fa-circle-check"></i>
<div className="inner-content">

                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
</div>
            </article>
        
        
            <article className='details'>
            <i class="fa-solid fa-circle-check"></i>
<div className="inner-content">


                <h4>CSS</h4>

                <small className='text-light'>Intermediate</small>
            
        </div>
            </article>
        
            <article className='details'>
            <i class="fa-solid fa-circle-check"></i>
<div className="inner-content">


                <h4>JS</h4>
                <small className='text-light'>Intermediate</small>
</div>
            </article>
        
        
            <article className='details'>
            <i class="fa-solid fa-circle-check"></i>
<div className="inner-content">


                <h4>React JS</h4>
                <small className='text-light'>Intermediate</small>
</div>
            </article>
        
        
            <article className='details'>
            <i class="fa-solid fa-circle-check"></i>
<div className="inner-content">


                <h4>Bootstrap</h4>
                <small className='text-light'>Begginer</small>
</div>
            </article>
            </div>
        
        </div>
        <div className="backend">
            <h2>Backend Development</h2>
            <div className="skill-content">
           
            <article className='details'>
            <i class="fa-solid fa-circle-check"></i>
<div className="inner-content">


                <h4>Node JS</h4>
                <small className='text-light'>Begginer</small>
</div>
            </article>
            <article className='details'>
            <i class="fa-solid fa-circle-check"></i>
<div className="inner-content">


                <h4>Express JS</h4>
                <small className='text-light'>Begginer</small>
</div>
            </article>
            <article className='details'>
            <i class="fa-solid fa-circle-check"></i>
<div className="inner-content">


                <h4>Mongo DB</h4>
                <small className='text-light'>Begginer</small>
</div>
            </article>
                </div>
        </div>
    </div>
    </div>
  )
}

export default Skills