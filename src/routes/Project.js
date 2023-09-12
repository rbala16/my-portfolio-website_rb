import React from 'react'
import Projectpage from '../components/project/Project';
import Footer from '../components/footer/Footer';
import Navigation from '../components/navigation/Navigation';

const Project = () => {
  return (
    <div>
      <Navigation/>
      <Projectpage/>
      <Footer/>
    </div>
  )
}

export default Project