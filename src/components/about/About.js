import React from 'react'
import "./about.css";
import HeaderImg from '../headerImg/headerImg';
import AboutMe from '../../assets/about-me.jpeg'
const About = () => {
  return (
  

    <><HeaderImg heading='ABOUT.' text='I am Friendly Front-End Developer' />
    <section className="about" id='about'>
       <img alt="about-me" id="about-section" src={AboutMe} />
        <div className="about-me">
          <h2>About Me</h2>

          <p >I am an enthusiastic learner who has a deep passion for acquiring new skills and staying up-to-date with the latest technologies. My goal is to become a full-stack web developer, and I find great joy in coding while constantly seeking opportunities to expand my knowledge.

 I take pride in creating effective and responsive websites with appealing designs. It's not just a job for me; it's a genuine passion.

I am actively working towards achieving a responsible position where I can leverage my skills and expertise. I am eager to take on professional challenges and contribute to the growth and success of the company while aligning with its objectives.In addition to my interest in web development, I have a strong passion for singing.travelling,exploring new places

    </p>
      </div>
    </section></>
  )
}

export default About