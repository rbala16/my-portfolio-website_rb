import React from 'react'
import "./about.css";
import HeaderImg from '../headerImg/headerImg';
import AboutMe from '../../assets/about-me.jpeg'
const About = () => {
  return (
  

    <><HeaderImg heading='ABOUT.' text='I am Friendly Front-End Developer' />
    <section class="about">
       <img alt="about-me" id="about-section" src={AboutMe} />
        <div class="about-me">
          <h2>About Me</h2>

          <p >I am type of type who love to learn our new skills and technology.I want to become full stack web developer.I really enjoy doing codingand always seeking to learn new skills day by day.
            Beside,web developer,i love singing.I love making effective responsive website with more attractive web designing.Its in my passion.I Looking to achieve responsible position where i can use my knowledge and skills with an opportunity for professional challenge and growth to support and enhance the objectives of the company.
          </p>

    
      </div>
    </section></>
  )
}

export default About