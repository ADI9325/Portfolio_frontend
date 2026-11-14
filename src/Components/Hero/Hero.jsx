import { FiArrowRight, FiGithub } from 'react-icons/fi'
import './Hero.css'

const stack = ['Node.js', 'TypeScript', 'NestJS', 'Express.js', 'Python', 'FastAPI', 'React', 'Next.js', 'PostgreSQL', 'Docker', 'AWS']

const profile = [
  ['role', 'Full-Stack Developer'],
  ['focus', 'Backend & APIs'],
  ['stack', 'Node · NestJS · Express · Python · React'],
  ['db', 'PostgreSQL'],
  ['location', 'Pune, India'],
  ['openToRemote', true],
]

const stats = [
  { value: '4+', label: 'years experience' },
  { value: '12', label: 'projects shipped' },
  { value: '300+', label: 'DSA problems' },
  { value: '300+', label: 'automated tests' },
]

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <p className="hero-prompt mono"><span className="accent">$</span> whoami</p>
          <h1>
            Aditya Bagade
            <span>Full-stack developer, backend first.</span>
          </h1>
          <p className="hero-desc">
            I build production SaaS end to end: REST APIs, auth, queues and PostgreSQL with
            Node.js, NestJS, Express and Python, then the React / Next.js UI on top.
            4+ years shipping fintech, HR, marketing and AI products.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">view my work <FiArrowRight /></a>
            <a href="#contact" className="btn">get in touch</a>
            <a href="https://github.com/ADI9325" target="_blank" rel="noopener noreferrer" className="btn" aria-label="GitHub profile">
              <FiGithub /> github
            </a>
          </div>
        </div>

        <div className="hero-terminal" aria-label="Profile summary">
          <div className="term-bar">
            <i></i><i></i><i></i>
            <span className="mono">aditya.ts</span>
          </div>
          <pre className="term-body mono">
            <span className="t-key">const</span> <span className="t-var">aditya</span>{' = {\n'}
            {profile.map(([key, value]) => (
              <span key={key}>
                {'  '}{key}: {typeof value === 'boolean'
                  ? <span className="t-key">{String(value)}</span>
                  : <span className="t-str">{`'${value}'`}</span>},{'\n'}
              </span>
            ))}
            {'};'}
          </pre>
        </div>
      </div>

      <div className="chip-list hero-stack">
        {stack.map((s) => <span key={s} className="chip">{s}</span>)}
      </div>

      <div className="hero-stats">
        {stats.map((s) => (
          <div key={s.label} className="hero-stat">
            <div className="hero-stat-value">{s.value}</div>
            <div className="hero-stat-label mono">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
