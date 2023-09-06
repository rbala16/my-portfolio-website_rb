import React, { useState } from 'react';
import './navigation.css';
import {FaBars, FaTimes} from "react-icons/fa";


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
      <h1>Portfolio</h1>
<ul className={click ? 'nav-menu active': 'nav-menu'}>

  <li><a  href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
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