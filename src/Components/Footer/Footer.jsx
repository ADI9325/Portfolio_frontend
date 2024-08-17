import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import user_icon from '../../assets/user_icon.svg';
import theme_pattern from '../../assets/theme_pattern.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="title-box_nav">
            <h1>ItS_aAdI04_BU!LDz</h1>
            <img className="title-box-nav_img" src={theme_pattern} alt="" />
          </div>
          <p>Full-Stack Developer from Pune, India. Skilled in Laravel, MySQL, JavaScript, and ReactJS. Passionate about creating dynamic and secure web applications.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Send</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Aditya Bagade</p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
