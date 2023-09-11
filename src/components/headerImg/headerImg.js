import React, { Component } from 'react';
import './headerImg.css';

class headerImg extends Component  {
  render(){
  return (
    <div className='hero-img'>
      <div className='heading'>
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
      </div>
    </div>
  )
}
}

export default headerImg