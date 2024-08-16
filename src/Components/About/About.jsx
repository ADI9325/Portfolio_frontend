import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
  return (
    <div id='about' className='about'> 
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am Aditya Bagade, a dedicated Frontend Developer based in Pune, India, with a strong background in backend development. Over the course of my career, I've developed and optimized web applications, contributed to secure and efficient systems, and collaborated with teams to deliver high-quality projects.</p>
            <p>My expertise spans across a wide range of technologies, including PHP, ReactJS, JavaScript, HTML, CSS, and Laravel. I have a passion for creating dynamic and user-friendly interfaces, and I am committed to continuous learning and professional growth.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Next JS</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>PHP</p><hr style={{ width: "65%" }} /></div>
            <div className="about-skill"><p>Laravel</p><hr style={{ width: "55%" }} /></div>
            <div className="about-skill"><p>MySQL</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>NodeJS</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>AJAX</p><hr style={{ width: "45%" }} /></div>
          </div>

        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
