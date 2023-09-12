import React from 'react';
import './header.css';
// import CTA from './CTA';
import '../../index.css';
import BackgroundImage from '../../assets/background.jpeg';
import { Link } from 'react-router-dom';

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
 <h3>I am an enthusiastic learner who has a deep passion for acquiring new skills and staying up-to-date with the latest technologies. </h3>
<br/>
<div>

  <Link to ="/contact" className='btn'>Lets Talk</Link>
</div>
</div>
  </div>
</header>

  )
}

export default Header