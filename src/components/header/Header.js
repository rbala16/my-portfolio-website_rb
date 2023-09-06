import React from 'react';
import './header.css';
// import CTA from './CTA';
import BackgroundImage from '../../assets/background.jpeg';

const Header = () => {
  return (
    
<header>
  <div className="hero">
    <div className='myphoto'>
      <img className='background-photo' src={BackgroundImage} alt='BackgroundImg'/>

    </div>
 <div className='content'>
 <p>I am <span>Rajni Bala</span></p>
 <h1>Full Stack Web Developer</h1>
<div>
  <button className='btn'>Projects</button>
  <button id='btn-contact'>Contact me</button>
</div>
</div>
  </div>
</header>

  )
}

export default Header