import React from 'react'
import "./contact.css";
import ContactImg from '../../assets/background.jpeg';

const Contact = () => {
  return (
   
    <div className="container">
  <div className='container-content'>
    <h2>Contact Us</h2>
    <p>Swing by for a cup of coffee, or leave us a message:</p>
  </div>
  <div className="row">
    <div className="column">
      <img src={ContactImg} alt='contact-img'/>
    </div>
    <div className="column">
    <form action="/" method="post" className="form_details">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  </div>
</div>



  )
}

export default Contact