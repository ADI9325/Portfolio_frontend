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
      
      <div className="about-separator"></div>
      
      <div className="about-sections">
        <div className="about-content">
          <div className="about-para">
            <p>I am Aditya Bagade, a dedicated Full-Stack Developer with 2+ years of experience building scalable web applications, SaaS platforms, and AI-powered automation tools using Python, TypeScript, React, and Node.js. Based in Pune, India, I specialize in API development, AI integrations, and AWS deployment with proven ability to work independently on global projects.</p>
            <p>At CodeClout Technology, I built a multi-tenant school management SaaS platform supporting 6+ user roles with JWT-based RBAC and developed secure REST APIs for task delegation systems. As a Freelance Developer for Mendel Lab, I created an AI-driven GitHub integration platform with repo analysis and PR review capabilities, handling full DevOps setup including AWS EC2, NGINX, and webhook security.</p>
          </div>
          
          <div className="about-separator"></div>
          
          <div className="about-skills">
            <div className="skills-category">
              <h3>Frontend Development</h3>
              <div className="skills-grid">
                <div className="skill-box">React.js</div>
                <div className="skill-box">Next.js</div>
                <div className="skill-box">TypeScript</div>
                <div className="skill-box">JavaScript (ES6+)</div>
                <div className="skill-box">HTML5</div>
                <div className="skill-box">CSS3</div>
                <div className="skill-box">Tailwind CSS</div>
                <div className="skill-box">Bootstrap</div>
                <div className="skill-box">ShadCN UI</div>
                <div className="skill-box">Material UI</div>
                <div className="skill-box">Headless UI</div>
                <div className="skill-box">Redux Toolkit (RTK)</div>
                <div className="skill-box">RTK Query</div>
                <div className="skill-box">React Context API</div>
              </div>
            </div>

            <div className="skills-category">
              <h3>Backend Development</h3>
              <div className="skills-grid">
                <div className="skill-box">Node.js</div>
                <div className="skill-box">Express.js</div>
                <div className="skill-box">Python</div>
                <div className="skill-box">RESTful APIs</div>
                <div className="skill-box">JWT Authentication</div>
                <div className="skill-box">APIs Integration</div>
                <div className="skill-box">Nodemailer</div>
                <div className="skill-box">Multer</div>
                <div className="skill-box">GitHub OAuth</div>
                <div className="skill-box">GitHub Apps API</div>
              </div>
            </div>

            <div className="skills-category">
              <h3>Database & Cloud</h3>
              <div className="skills-grid">
                <div className="skill-box">MySQL</div>
                <div className="skill-box">MongoDB</div>
                <div className="skill-box">PostgreSQL</div>
                <div className="skill-box">Mongoose</div>
                <div className="skill-box">AWS EC2</div>
                <div className="skill-box">AWS S3</div>
                <div className="skill-box">NGINX</div>
              </div>
            </div>

            <div className="skills-category">
              <h3>AI & Development Tools</h3>
              <div className="skills-grid">
                <div className="skill-box">AI Technologies</div>
                <div className="skill-box">Prompt Engineering</div>
                <div className="skill-box">Data Structures</div>
                <div className="skill-box">Algorithms</div>
                <div className="skill-box">OOP</div>
                <div className="skill-box">Clean Architecture</div>
                <div className="skill-box">Problem-Solving</div>
                <div className="skill-box">Git & GitHub</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About