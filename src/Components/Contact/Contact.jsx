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
      const res = await fetch("https://portfolio-backend-1-gwu2.onrender.com/api/contact", {
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
        toast.success("Message sent successfully! I'll get back to you soon.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        setTimeout(() => {
          setIsSubmitting(false);
        }, 1000);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (err) {
      console.error('Submission failed:', err);
      setIsFailed(true);
      toast.error("Failed to send message. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      
      <div className="contact-separator"></div>
      
      <div className="contact-section">
        <div className="contact-left">
          <div className="contact-subtitle">Contact Me</div>
          <h1>Let's Work Together</h1>
          <p>
            I'm currently available to take on new projects and exciting opportunities. 
            Whether you have a specific project in mind or just want to discuss potential 
            collaborations, I'd love to hear from you. Let's create something amazing together!
          </p>
          
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email" />
              <p>adityabagade04@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Phone" />
              <p>+91 9325253293</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>
        
        <form
          onSubmit={onSubmit}
          className={`contact-right ${isSubmitting ? 'blur' : ''} ${isSubmitted ? 'success' : ''}`}
        >
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              name="name"
              required
              disabled={isSubmitted}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              name="email"
              required
              disabled={isSubmitted}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="What's this about?"
              name="subject"
              disabled={isSubmitted}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me about your project, ideas, or just say hello..."
              required
              disabled={isSubmitted}
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className={`contact-submit ${isSubmitting || isSubmitted ? 'disabled' : ''}`}
            disabled={isSubmitting || isSubmitted}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
          >
            {isSubmitting ? (
              <>
                <div className="loading-spinner"></div>
                Sending...
              </>
            ) : isSubmitted ? (
              '✓ Message Sent Successfully!'
            ) : isFailed ? (
              'Try Again'
            ) : (
              'Send Message'
            )}
          </motion.button>
        </form>

        <AnimatePresence>
          {isSubmitting && (
            <motion.div
              className="submission-animation"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="loading-spinner"></div>
              Sending your message...
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{
          background: 'rgba(0, 0, 0, 0.9)',
          border: '1px solid rgba(185, 35, 225, 0.3)',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)'
        }}
      />
    </div>
  );
};

export default Contact;