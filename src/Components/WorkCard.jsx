import React from 'react'
import './Style/WorkCard.css'
import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
  return (
    // <div className='work-container'>
    //     <h1 className="project-heading">Projects</h1>
       
            <div className="project-card">
                <img src={props.imgsrc} alt="something"/>
                <div className="project-title">{props.title}</div>
                <div className="pro-details">
                    <p className="text">{props.text}</p>
                    <div className="pro-btn">
                        <NavLink target='_blank' to ={props.source} className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
       

    // </div>
  )
}

export default WorkCard