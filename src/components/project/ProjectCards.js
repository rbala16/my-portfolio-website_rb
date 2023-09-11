import React from 'react';
import './project.css';


import { NavLink } from 'react-bootstrap';

const ProjectCards = (props) => {
  return (
    
    <div className='project-card'>
      <img src={props.imgsrc} alt= ""/>
      <h2 className='project-title'>{props.title}</h2>
      <div className='project-description'>{props.text}</div>
      <div className='project-btns'>
        <NavLink to = {props.view}
        className='btn'>View</NavLink>
           <NavLink to = 'https://github.com/rbala16/note-maker_rb'
        className='btn'>Source</NavLink>
 
      </div>
    </div>

  )
}

export default ProjectCards;