import React from 'react';
import './Footer.css';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import theme_pattern from '../../assets/theme_pattern.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="title-box_nav">
            <h1>Aditya Bagade</h1>
            <span className="footer-nav-subtitle">Full-Stack Developer</span>
            <img className="title-box-nav_img" src={theme_pattern} alt="" />
          </div>
          <p>Full-Stack Developer with 2+ years of experience building scalable web applications, SaaS platforms, and AI-powered automation tools. Passionate about creating secure, high-quality solutions using modern technologies.</p>
        </div>
        
        <div className="footer-top-right">
          {/* Right side content removed */}
        </div>
      </div>
      
      <div className="footer-separator"></div>
      
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Aditya Bagade. All rights reserved.</p>
        <div className="footer-bottom-right">
          <div className="footer-links">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          
          <div className="social-icons">
            <a href="mailto:adityabagade04@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
              <MdEmail />
            </a>
            <a href="https://github.com/ADI9325" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />             
            </a>
            <a href="https://leetcode.com/u/its_adii04/" target="_blank" rel="noopener noreferrer" title="LeetCode">
              <SiLeetcode />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;