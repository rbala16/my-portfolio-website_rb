import React from 'react';
import './header.css';
import CTA from './CTA';

const Header = () => {
  return (
<header>
  <div className="container header">
  <h5>Hello I'm</h5>
  <h1>Rajni Bala</h1>
  <h5 className="text-light">Full Stack Web Developer</h5>
  <CTA/>
<div className='myphoto'>
<img src='' alt='myself'/>
</div>



  </div>
</header>

  )
}

export default Header