import React from 'react';
import './footer.css'


const Footer = () => {
  return (
<body>
    <footer>
        <div class="f-item-con">
            <div class="app-info">
                <span class='app-name'>
                    <span class='app-initial'>P</span>ortfolio
                </span>
                <p>Interested <strong>to</strong> work <strong>with</strong> your company</p>
            </div>
            <div class="useful-links">
                <div class="footer-title">Useful Links</div>
                <ul>
                    <li>Home</li>
                    <li>About me</li>
                    <li>My Projects</li>
                    <li>My Github</li>
                    <li>Lets talk</li>
                 
                </ul>
            </div>
      
            <div class="g-i-t">
                <div class="footer-title">Get in Touch</div>
                <form action="/" method="post" class="space-y-2">
                    <input type="text" name="g-name" class="g-inp" id="g-name" placeholder='Name' />
                    <input type="email" name="g-email" class="g-inp" id="g-email" placeholder='Email' />
                    <textarea type="text" name="g-msg" class="g-inp h-40 resize-none" id="g-msg"
                        placeholder='Message...'></textarea>
                    <button type="submit" class='f-btn'>Submit</button>
                </form>
            </div>
        </div>
        <div class='cr-con'>Copyright &copy; 2023 | Made by Rajni bala</div>
    </footer>

</body>
  )
}

export default Footer