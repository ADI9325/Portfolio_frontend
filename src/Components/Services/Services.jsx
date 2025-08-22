import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Services = () => {
  const servicesData = [
    {
      s_no: "01",
      s_name: "Full-Stack Development",
      s_desc: "Build complete web applications using React.js, TypeScript, Node.js, and Express.js with secure authentication, responsive UI, and scalable architecture.",
      features: ["React.js", "TypeScript", "Node.js", "Express.js"]
    },
    {
      s_no: "02",
      s_name: "SaaS Platform Development",
      s_desc: "Develop multi-tenant SaaS platforms with role-based access control, JWT authentication, and comprehensive user management systems for educational and business applications.",
      features: ["Multi-tenant", "RBAC", "JWT Auth", "User Management"]
    },
    {
      s_no: "03",
      s_name: "AI-Powered Solutions",
      s_desc: "Create AI-driven applications with GitHub integration, repository analysis, automated code reviews, and intelligent insights using modern AI technologies and APIs.",
      features: ["AI Integration", "GitHub APIs", "Code Analysis", "Automation"]
    },
    {
      s_no: "04",
      s_name: "API Development & Integration",
      s_desc: "Design and develop robust RESTful APIs with Express.js, TypeScript, and secure authentication. Integrate third-party APIs including GitHub, OAuth, and AI services.",
      features: ["RESTful APIs", "OAuth", "Third-party APIs", "Security"]
    },
    {
      s_no: "05",
      s_name: "Cloud Deployment & DevOps",
      s_desc: "Deploy applications on AWS EC2, S3, configure NGINX, manage webhooks, and handle complete DevOps setup with environment configurations and HTTPS security.",
      features: ["AWS EC2", "S3", "NGINX", "DevOps"]
    },
    {
      s_no: "06",
      s_name: "Database Design & Management",
      s_desc: "Design efficient database schemas using MySQL, MongoDB, and PostgreSQL with Mongoose ODM. Implement data segregation, optimization, and secure data management.",
      features: ["MySQL", "MongoDB", "PostgreSQL", "Optimization"]
    }
  ];

  return (
    <div id='services' className='services'>
      <div className="title-box">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      
      <div className="services-separator"></div>
      
      <div className="services-container">
        {servicesData.map((service, index) => {
          return (
            <div key={index} className='services-format'>
              <div className="services-header">
                <div className="services-number">{service.s_no}</div>
                <h2>{service.s_name}</h2>
              </div>
              
              <div className="services-content">
                <p>{service.s_desc}</p>
                
                <div className="services-features">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="service-tag">{feature}</span>
                  ))}
                </div>
              </div>
              
              <div className='services-readmore'>
                <span>Learn More</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services