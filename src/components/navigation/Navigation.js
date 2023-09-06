import React from 'react';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className='header'>
      <h1>Portfolio</h1>
<ul className='nav-menu'>

  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
    </nav>
  )
}

export default Navigation