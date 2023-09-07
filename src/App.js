import React from 'react';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import About from './components/about/About';
import Experience from './components/Experience/experience';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
   <>
  
   <Navigation/>
   <Header/>
   <About/>
   <Experience/>
   <Project/>
   
   <Contact/>
   <Footer/>

   </>
  )
}

export default App