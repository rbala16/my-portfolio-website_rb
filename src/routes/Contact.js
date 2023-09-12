import React from 'react'
import Contactpage from '../components/contact/Contact';
import HeaderImg from '../components/headerImg/headerImg';
import Footer from '../components/footer/Footer';
import Navigation from '../components/navigation/Navigation';

const Contact = () => {
  return (
    <div>
      <Navigation/>
    <HeaderImg heading ='Contact me.' text='Thankyou for visiting My Portfolio'/>

      <Contactpage/>
      <Footer/>
    </div>
  )
}

export default Contact