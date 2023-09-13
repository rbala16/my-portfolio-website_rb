import React, { useState } from 'react';
import './navigation.css';
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navigation = () => {

const [click,setClick]= useState(false);
const  handleClick = () => setClick(!click);

const [color,setColor]= useState(false);
const changeColor = ()=>{
  if(window.scrollY>=100){
    setColor(true);
  }
  else{
    setColor(false);
  }
  }
 window.addEventListener('scroll',changeColor);

  return (
    <nav className={color ? 'header header-bg': 'header'}>
    <Link>
      <h1>Port <span>folio</span></h1>
      </Link>
<ul className={click ? 'nav-menu active': 'nav-menu'}>
   <li>
<Link to ="/my-portfolio-website_rb">Home</Link>
    </li>
 <li>
 <Link to ="/about">About</Link>
  </li>
  <li>
  <Link to ="/project">Project</Link>
    </li>
  <li>
  <Link to ="/contact">Contact</Link>
    </li>

</ul>
<div className='hamburger' 
onClick={handleClick}>
  {click ? (
     <FaTimes size={20} style={{color: '#fff'}}
  />
  ): (
  <FaBars size={20} style={{color: '#fff'}}
  />
  )}
 
</div>
    </nav>
  )
}

export default Navigation