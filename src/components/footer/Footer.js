import React from 'react';
import './footer.css'
import {FaHome, FaMailBulk,FaPhone} from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (

    <footer>
        <div className="f-item-con">
            <div className="app-info">
                <span className='app-name'>
                    <span className='app-initial'>P</span>ortfolio
                </span>
                <p>I am actively working towards achieving a responsible position where I can leverage my skills and expertise. I am eager to take on professional challenges and contribute to the growth and success of the company while aligning with its objectives</p>
            </div>
            <div className="useful-links">
                <div className="footer-title">Useful Links</div>
                <ul>
                <li>
<Link to ="/my-portfolio-website_rb">Home</Link>
    </li>
 <li>
 <Link to ="/about">About</Link>
  </li>
  <li>
  <Link to ="/project">Project</Link>
    </li>
  <li>
  <Link to ="/contact">Contact</Link>
    </li>
                </ul>
            </div>
      <div className='right'>
        <div className='location'>
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem" }} />
        </div>
        <div>
        <p>123 Valley way,Niagara falls</p>
        <p>Ontario,Canada</p>
        </div>
      
            
         <div className='phone'>
         <h4>
         <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />
         1-2323-444-555</h4>
            </div>   

            <div className='email'>
         <h4>
         <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />
         bala12rajni@gmail.com</h4>
            </div>
</div>
        </div>
        <div className='cr-con'>University of Toronto Student 2023 | Made by Rajni bala</div>
    </footer>


  )
}

export default Footer