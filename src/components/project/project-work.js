import React from 'react';
import './project.css';
import HeaderImg from '../headerImg/headerImg';
import proimg1 from '../../assets/project1.jpg'
import { NavLink } from 'react-bootstrap';

const Projectwork = () => {
  return (
    <div>

  <HeaderImg heading ='PROJECTS.' text='My Most Recent Projects'/>
<div className='mywork-container' >
  <h1 className='project-heading'>Projects</h1>
  <div className='project-container'>
    <div className='project-card'>
      <img src={proimg1} alt= ""/>
      <h2 className='project-title'>Note-Maker</h2>
      <div className='project-description'>my project</div>
      <div className='project-btns'>
        <NavLink to = 'https://deploying-note-maker-3b48ad0df49a.herokuapp.com/'
        className='btn'>View</NavLink>
           <NavLink to = 'https://github.com/rbala16/note-maker_rb'
        className='btn'>Source</NavLink>
      </div>
    </div>
  </div>
</div>
  </div>
  )
}

export default Projectwork