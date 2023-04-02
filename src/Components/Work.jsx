import React from 'react'
import './Style/WorkCard.css'
import WorkCard from './WorkCard'
import ProjectData from './ProjectData'
const Work = () => {
  return (
    <div className='work-container'>
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">

    {
        ProjectData.map((val,ind)=>{
            return(

                <WorkCard 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                source={val.source}
                />
            )
        })
    }

            </div>

    </div>
  )
}

export default Work