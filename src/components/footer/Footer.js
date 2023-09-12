import React from 'react';
import './footer.css'


const Footer = () => {
  return (

    <footer>
        <div className="f-item-con">
            <div className="app-info">
                <span className='app-name'>
                    <span className='app-initial'>P</span>ortfolio
                </span>
                <p>Interested <strong>to</strong> work <strong>with</strong> your company</p>
            </div>
            <div className="useful-links">
                <div className="footer-title">Useful Links</div>
                <ul>
                    <li>Home</li>
                    <li>About me</li>
                    <li>My Projects</li>
                    <li>My Github</li>
                    <li>Lets talk</li>
                 
                </ul>
            </div>
      
            <div className="container">
                <div className="footer-title">Get in Touch</div>
                <form action="/" method="post" className="space-y-2">
                    <input type="text" name="g-name" className="g-inp" id="g-name" placeholder='Name' />
                    <input type="email" name="g-email" className="g-inp" id="g-email" placeholder='Email' />
                    <textarea type="text" name="g-msg" className="g-inp h-40 resize-none" id="g-msg"
                        placeholder='Message...'></textarea>
                    <button type="submit" className='f-btn'>Submit</button>
                </form>
            </div>
        </div>
        <div className='cr-con'>Copyright &copy; 2023 | Made by Rajni bala</div>
    </footer>


  )
}

export default Footer