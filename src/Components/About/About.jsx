import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'> 
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-content">
          <div className="about-para">
            <p>I am Aditya Bagade, a dedicated Full-Stack Developer with 2+ years of experience building scalable web applications, SaaS platforms, and AI-powered automation tools using Python, TypeScript, React, and Node.js. Based in Pune, India, I specialize in API development, AI integrations, and AWS deployment with proven ability to work independently on global projects.</p>
            <p>At CodeClout Technology, I built a multi-tenant school management SaaS platform supporting 6+ user roles with JWT-based RBAC and developed secure REST APIs for task delegation systems. As a Freelance Developer for Mendel Lab, I created an AI-driven GitHub integration platform with repo analysis and PR review capabilities, handling full DevOps setup including AWS EC2, NGINX, and webhook security.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>React.js & Next.js</p><hr style={{ width: "80%" }} /></div>
            <div className="about-skill"><p>TypeScript</p><hr style={{ width: "85%" }} /></div>
            <div className="about-skill"><p>Node.js & Express.js</p><hr style={{ width: "85%" }} /></div>
            <div className="about-skill"><p>Python</p><hr style={{ width: "75%" }} /></div>
            <div className="about-skill"><p>RESTful APIs & JWT</p><hr style={{ width: "90%" }} /></div>
            <div className="about-skill"><p>MySQL & MongoDB</p><hr style={{ width: "80%" }} /></div>
            <div className="about-skill"><p>AWS (EC2, S3) & NGINX</p><hr style={{ width: "75%" }} /></div>
            <div className="about-skill"><p>AI Technologies & APIs</p><hr style={{ width: "80%" }} /></div>
            <div className="about-skill"><p>GitHub OAuth & Apps API</p><hr style={{ width: "85%" }} /></div>
            <div className="about-skill"><p>Tailwind CSS & ShadCN UI</p><hr style={{ width: "85%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+ Years</h1>
          <p>PROFESSIONAL EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>300+</h1>
          <p>DATA STRUCTURE PROBLEMS SOLVED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5-Star</h1>
          <p>JAVA RATING ON HACKERRANK</p>
        </div>
      </div>
    </div>
  )
}

export default About