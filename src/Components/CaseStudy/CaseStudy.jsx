import { FiArrowLeft, FiArrowRight, FiCheck } from 'react-icons/fi'
import './CaseStudy.css'
import mywork_data from '../../assets/mywork_data'

const storyLabels = ['the problem', 'what was built', 'the result']

const CaseStudy = ({ project }) => {
  const index = mywork_data.findIndex((p) => p.slug === project.slug)
  const prev = mywork_data[(index - 1 + mywork_data.length) % mywork_data.length]
  const next = mywork_data[(index + 1) % mywork_data.length]

  const facts = [
    ['client', project.client],
    ['type', project.type],
    ['year', project.year],
  ].filter(([, value]) => value)

  return (
    <main className="case">
      <a href="/#work" className="case-back mono"><FiArrowLeft /> all projects</a>

      <header className="case-head">
        <p className="section-label">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="case-intro">{project.intro}</p>

        <dl className="case-facts">
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt className="mono">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </header>

      {project.cover && (
        <div className="case-cover">
          <img src={project.cover} alt={`${project.title} cover`} decoding="async" />
        </div>
      )}

      <div className="case-layout">
        <div className="case-story">
          {project.about.map((paragraph, i) => (
            <section key={i} className="case-block">
              <h2 className="mono"><span className="accent">0{i + 1}.</span> {storyLabels[i] || 'more'}</h2>
              <p>{paragraph}</p>
            </section>
          ))}

          {project.highlights && (
            <section className="case-block">
              <h2 className="mono"><span className="accent">0{project.about.length + 1}.</span> key features</h2>
              <ul className="case-highlights">
                {project.highlights.map((item) => (
                  <li key={item}><FiCheck className="accent" /> {item}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="case-side">
          <div className="card case-side-card">
            <h3 className="mono">tech stack</h3>
            <div className="chip-list">
              {project.stack.map((tech) => <span key={tech} className="chip">{tech}</span>)}
            </div>
          </div>
          {project.scope?.length > 0 && (
            <div className="card case-side-card">
              <h3 className="mono">scope</h3>
              <ul className="case-scope">
                {project.scope.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          )}
        </aside>
      </div>

      {project.shots?.length > 0 && (
        <section className="case-gallery">
          <h2 className="mono"><span className="accent">$</span> screenshots</h2>
          <div className="case-shots">
            {project.shots.map((src, i) => (
              <figure key={src} className="case-shot">
                <img src={src} alt={`${project.title} screenshot ${i + 1}`} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
        </section>
      )}

      <nav className="case-nav" aria-label="More projects">
        <a href={`/work/${prev.slug}/`} className="card case-nav-link">
          <span className="mono"><FiArrowLeft /> previous</span>
          <strong>{prev.title}</strong>
        </a>
        <a href={`/work/${next.slug}/`} className="card case-nav-link case-nav-next">
          <span className="mono">next <FiArrowRight /></span>
          <strong>{next.title}</strong>
        </a>
      </nav>

      <section className="case-cta card">
        <div>
          <h2>Building something similar?</h2>
          <p>I’m open to full-time roles and freelance projects. Tell me what you need.</p>
        </div>
        <a href="/#contact" className="btn btn-primary">get in touch <FiArrowRight /></a>
      </section>
    </main>
  )
}

export default CaseStudy
