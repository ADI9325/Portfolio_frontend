import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="hero-content">
        <div className="profile-container">
          <img src={profile_img} alt="Aditya Bagade - Full Stack Developer" className='profile-img' />
        </div>
        
        <div className="hero-text">
          <div className="hero-greeting">Hello, I'm</div>
          <h1>
            <span className="hero-name">Aditya Bagade</span>
            <span className="hero-title">Full-Stack Developer</span>
          </h1>
          <p className="hero-description">
            Passionate developer with 2+ years of experience crafting scalable web applications, 
            SaaS platforms, and AI-powered solutions. Specialized in modern technologies like 
            React, Node.js, and cloud deployment.
          </p>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">2+</div>
            <div className="hero-stat-label">Years Experience</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">300+</div>
            <div className="hero-stat-label">Problems Solved</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">5⭐</div>
            <div className="hero-stat-label">Java Rating</div>
          </div>
        </div>

        <div className="hero-action">
          <AnchorLink className='hero-connect anchor-link' offset={50} href='#contact'>
            Let's Connect
          </AnchorLink>
          <AnchorLink className='hero-resume anchor-link' offset={50} href='#about'>
            About Me
          </AnchorLink>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
        <div className="scroll-text">Scroll Down</div>
      </div>
    </div>
  )
}

export default Hero