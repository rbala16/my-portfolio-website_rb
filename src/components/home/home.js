import React from "react";
import Navigation from '../navigation/Navigation';
import Header from '../header/Header';
import About from '../about/About';
import Project from '../project/Project';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
const home = () => {
  return (
    <div>
      <Navigation/>
      <Header/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default home;