import './About.css'

const skillGroups = [
  {
    title: 'Backend Development',
    skills: ['Node.js', 'TypeScript', 'NestJS', 'Express.js', 'Python', 'FastAPI', 'REST APIs', 'JWT Authentication', 'Role-Based Access Control (RBAC)', 'Background Jobs & Queues', 'Scheduled Jobs (Cron)', 'Third-Party API Integrations'],
  },
  {
    title: 'Frontend Development',
    skills: ['React.js', 'Next.js (App Router)', 'Server Components', 'SSR / SSG', 'JavaScript (ES6+)', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS', 'ShadCN UI', 'HTML5', 'CSS3'],
  },
  {
    title: 'Databases & ORMs',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'Supabase', 'MongoDB', 'Drizzle ORM', 'Schema Design', 'Query Optimization'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (EC2, RDS, S3)', 'Docker', 'CI/CD', 'GitHub Actions', 'NGINX', 'Caddy', 'Vercel', 'Linux'],
  },
  {
    title: 'AI & Tools',
    skills: ['Google Gemini (Function Calling)', 'Cursor', 'Claude', 'UiPath (RPA)', 'Automated Testing', 'Git & GitHub', 'Postman', 'Jira'],
  },
]

const highlights = [
  { value: 'CodeMirror Technologies', label: 'Full-Stack Developer · 01/2023 – present' },
  { value: 'CodeClout Technology', label: 'Full-Stack Developer · 08/2021 – 01/2023' },
  { value: 'B.E. Computer Science', label: 'Savitribai Phule Pune University' },
]

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-head">
        <p className="section-label">01. about</p>
        <h2>About me</h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I’m <strong>Aditya Bagade</strong>, a <strong>Full-Stack Developer with 4+ years of experience</strong> building production SaaS applications end to end. My focus is the backend: <strong>Node.js, TypeScript, NestJS and Express.js</strong> for REST APIs, authentication, PostgreSQL schema design, background jobs and integrations, plus <strong>Python (FastAPI)</strong> services and <strong>React / Next.js</strong> frontends. I’m based in <strong>Pune, India</strong> and open to remote work.
          </p>
          <p>
            At <strong>CodeMirror Technologies</strong>, I built an <strong>HRMS, projects and invoicing platform</strong> on Node.js, Express and PostgreSQL (GST invoicing, payroll, role-based access), and was the primary engineer on <strong>Finicify</strong>, a multi-tenant fintech SaaS with FastAPI APIs, 20+ scheduled data jobs, 300+ automated tests and Docker CI/CD on AWS. Before that, at <strong>CodeClout Technology</strong>, I built Node.js REST APIs and PostgreSQL schemas for a school management SaaS.
          </p>
        </div>

        <ul className="about-timeline">
          {highlights.map((h) => (
            <li key={h.value} className="card">
              <span className="about-dot" aria-hidden="true"></span>
              <div>
                <div className="about-tl-title">{h.value}</div>
                <div className="about-tl-sub mono">{h.label}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="about-skills">
        {skillGroups.map((group) => (
          <div className="about-skill-group" key={group.title}>
            <h3 className="mono"><span className="accent">#</span> {group.title.toLowerCase()}</h3>
            <div className="chip-list">
              {group.skills.map((skill) => (
                <span className="chip" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
