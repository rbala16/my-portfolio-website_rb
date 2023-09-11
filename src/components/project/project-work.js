import React from 'react';
import './project.css';
import HeaderImg from '../headerImg/headerImg';
import ProjectCards from './ProjectCards';
import Workdata from './workdata';


const Projectwork = () => {
  return (
    <div>

  <HeaderImg heading ='PROJECTS.' text='My Most Recent Projects'/>
<div className='mywork-container' >
  <h1 className='project-heading'>Projects</h1>
  <div className='project-container'>
  {Workdata.map((val,ind)=>{
    return(
      <ProjectCards
      key={ind}
      imgsrc={val.imgsrc}
      title={val.title}
      text={val.text}
      view={val.view}
      />
  )
  })}
  </div>
</div>
  </div>
  )
}

export default Projectwork