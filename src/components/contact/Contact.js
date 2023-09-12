import React, { useState } from "react";
import "./contact.css";
import ContactImg from '../../assets/background.jpeg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [ setErrors] = useState({
    nameError: "",
    emailError: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    // Simple email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;
    let hasErrors = false;
    const newErrors = { nameError: "", emailError: "" };

    if (name.trim() === "") {
      newErrors.nameError = "Name is required";
      hasErrors = true;
    }

    if (!validateEmail(email)) {
      newErrors.emailError = "Invalid email address";
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      // You can handle the form submission here, e.g., send data to a server
      console.log(formData);

      // Optionally, you can reset the form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      alert("Thankyou for your submission!! I will get back to you");
    }
  };
  return (
   
    <div className="container">
  <div className='container-content'>
    <h2>Contact Us</h2>
    <p>Get in touch with Me:</p>
  </div>
  <div className="row">
    <div className="column">
      <img src={ContactImg} alt='contact-img'/>
    </div>
    <div className="column">
    <form 
    onSubmit={handleSubmit}
    name="contact"
    className="form_details">
        <label htmlFor="name">Full Name</label>
        <input 
        type="text" 
        id="name"
         name="name"
         value={formData.name}
         onChange={handleInputChange}
         placeholder="Enter your Full name here"/>
        <label htmlFor="email">Email:</label>
        <input 
        type="email"
         id="email" 
         name="email" 
         value={formData.email}
         onChange={{handleInputChange}}
         placeholder="Enter your email here.."/>
        <label htmlFor="message">Message</label>
        <textarea 
        id="message"
         name="message"
         value={formData.message}
         onChange={handleInputChange}
         placeholder="Enter your Message here.."></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  </div>
</div>



  )
}

export default Contact