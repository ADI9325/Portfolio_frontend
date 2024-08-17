import React, { useState, useEffect } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const submissionStatus = localStorage.getItem('formSubmitted');
    if (submissionStatus === 'true') {
      setIsSubmitted(true);
    }
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();
      if (res.ok) {
        setIsSubmitted(true);
        localStorage.setItem('formSubmitted', 'true');

        // Trigger the flying effect
        document.querySelector('.contact-submit').classList.add('fly');
        setTimeout(() => {
          setIsSubmitting(false);
        }, 1000); // Duration of the animation
      }
    } catch (err) {
      console.error('Submission failed:', err);
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>adityabagade04@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+91 9325253293</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Pune, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required disabled={isSubmitted} />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required disabled={isSubmitted} />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required disabled={isSubmitted}></textarea>

          <button
            type='submit'
            className={`contact-submit ${isSubmitting || isSubmitted ? 'disabled' : ''}`}
            disabled={isSubmitting || isSubmitted}
          >
            {isSubmitted ? 'Submitted' : 'Submit now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
