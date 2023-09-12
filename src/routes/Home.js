//import all the components and dependencies
import React from 'react';
import Navigation from '../components/navigation/Navigation';
import Header from '../components/header/Header';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

 const Home = () => {
  return (
    <div>
      <Navigation/>
      <Header/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default Home;
