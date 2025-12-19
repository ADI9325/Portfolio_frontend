import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'> 
      <div className="title-box">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>
      
      <div className="about-separator"></div>
      
      <div className="about-sections">
        <div className="about-content">
          <div className="about-para">
            <p>
              I’m <strong>Aditya Bagade</strong>, a results-driven <strong>Full-Stack Developer with 4+ years of experience</strong> building scalable web applications, SaaS platforms, and AI-powered systems using <strong>React, TypeScript, Node.js, Python, and modern databases</strong>. Based in <strong>Pune, India</strong>, I have extensive experience working independently and collaborating with global remote teams.
            </p>

            <p>
              At <strong>CodeClout Technology</strong>, I played a key role in building a <strong>multi-tenant school management SaaS</strong> supporting 6+ user roles, implementing JWT-based RBAC, secure REST APIs, and optimized database schemas. As a <strong>Freelance Developer at Mendel Lab</strong>, I developed an <strong>AI-driven GitHub integration platform</strong> for repository analysis and pull-request reviews, handling complete <strong>DevOps setup with AWS EC2, NGINX, webhooks, and production-grade security</strong>.
            </p>
          </div>
          
          <div className="about-separator"></div>
          
          <div className="about-skills">
            {/* Frontend Development */}
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
                <div className="skill-box">ShadCN UI</div>
                <div className="skill-box">Material UI</div>
                <div className="skill-box">Redux Toolkit</div>
                <div className="skill-box">RTK Query</div>
                <div className="skill-box">Context API</div>
                <div className="skill-box">Responsive & Accessible UI</div>
              </div>
            </div>

            {/* Backend Development */}
            <div className="skills-category">
              <h3>Backend Development</h3>
              <div className="skills-grid">
                <div className="skill-box">Node.js</div>
                <div className="skill-box">Express.js</div>
                <div className="skill-box">Python</div>
                <div className="skill-box">RESTful APIs</div>
                <div className="skill-box">JWT Authentication</div>
                <div className="skill-box">Role-Based Access Control (RBAC)</div>
                <div className="skill-box">API Integrations</div>
                <div className="skill-box">Nodemailer</div>
                <div className="skill-box">Multer</div>
                <div className="skill-box">GitHub OAuth</div>
                <div className="skill-box">GitHub Apps API</div>
              </div>
            </div>

            {/* Database & Cloud */}
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
                <div className="skill-box">CI/CD Basics</div>
              </div>
            </div>

            {/* AI & Engineering Practices */}
            <div className="skills-category">
              <h3>AI & Engineering Practices</h3>
              <div className="skills-grid">
                <div className="skill-box">AI Integrations</div>
                <div className="skill-box">Prompt Engineering</div>
                <div className="skill-box">Data Structures</div>
                <div className="skill-box">Algorithms</div>
                <div className="skill-box">Object-Oriented Programming</div>
                <div className="skill-box">Clean Architecture</div>
                <div className="skill-box">System Design (Basics)</div>
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
