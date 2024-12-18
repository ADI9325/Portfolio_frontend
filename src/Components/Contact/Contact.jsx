import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  useEffect(() => {
    const submissionStatus = localStorage.getItem('formSubmitted');
    if (submissionStatus === 'true') {
      setIsSubmitted(true);
    }
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsFailed(false);

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

      document.querySelector('.contact-submit').classList.add('fly');

      if (res.ok) {
        setIsSubmitted(true);
        localStorage.setItem('formSubmitted', 'true');

        // Clear the form fields
        event.target.reset();

        // Show success message and animation
        toast.success("Submitted Successfully!");

        setTimeout(() => {
          setIsSubmitting(false);
        }, 1000); // Duration of the animation
      } else {
        throw new Error('Failed to submit');
      }
    } catch (err) {
      console.error('Submission failed:', err);
      setIsFailed(true);
      toast.error("Error: Submission Failed!");
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
        <form
          onSubmit={onSubmit}
          className={`contact-right ${isSubmitting ? 'blur' : ''}`}
        >
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            disabled={isSubmitted}
          />
          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            disabled={isSubmitted}
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
            disabled={isSubmitted}
          ></textarea>

          <motion.button
            type="submit"
            className={`contact-submit ${isSubmitting || isSubmitted ? 'disabled' : ''}`}
            disabled={isSubmitting || isSubmitted}
            whileTap={{ scale: 0.9 }}
          >
            {isSubmitted ? 'Submitted Successfully' : isFailed ? 'Retry Submission' : 'Submit now'}
          </motion.button>
        </form>

        <AnimatePresence>
          {isSubmitting && (
            <motion.div
              className="submission-animation"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
             Please wait...
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
