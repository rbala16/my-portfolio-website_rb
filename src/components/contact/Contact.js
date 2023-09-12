import React, { useState } from "react";
import ContactImg from '../../assets/background.jpeg';
import './contact.css';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
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
      alert("Thankyou for reaching out to me ,i will get back to you soon!!");
    }
  };

  return (
    <div className="container">
    <div className='heading' >
      <h2>Contact Me</h2>
      <p>Thank you for visiting my portfolio and reaching out through my website. Your interest is greatly appreciated.</p>
    </div>
    <div className="row">
    <div className="column">
    <img alt="hero"
            src={ContactImg} className="ContactImg"
          /> </div>
            <div className="column">
        <form
          onSubmit={handleSubmit}
          name="contact"
          >
        
          <label htmlFor="name" > Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
             placeholder="Enter your Full name here"
              required
            />
            <p className="text-arear">{errors.nameError}</p>
          
      
            <label htmlFor="email"> Email </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your Email here"
              required
            />
            <p className="text-red-500">{errors.emailError}</p>
        
            <label htmlFor="message"> Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Feel free to ask anything!!"
            ></textarea>
         
         <input type="submit" value="Submit"/>
        </form>
  
          
        </div>
      </div>
    </div>

  );
}