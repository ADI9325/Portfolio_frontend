import { FiArrowUpRight } from 'react-icons/fi'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'

const initials = (title) =>
  title.split(/\s+/).filter((w) => /^[A-Za-z]/.test(w)).slice(0, 2).map((w) => w[0]).join('').toUpperCase()

const MyWork = () => {
  return (
    <section id="work" className="section">
      <div className="section-head">
        <p className="section-label">03. work</p>
        <h2>Projects I’ve built</h2>
        <p>Production work from CodeMirror Technologies, CodeClout and freelance clients.</p>
      </div>

      <div className="work-grid">
        {mywork_data.map((work) => (
          <article key={work.title} className="card work-card">
            <div className="work-cover">
              {work.cover ? (
                <img src={work.cover} alt={`${work.title} screenshot`} loading="lazy" />
              ) : (
                <div className="work-cover-empty mono" aria-hidden="true">
                  <span className="accent">{'</>'}</span> {initials(work.title)}
                </div>
              )}
            </div>
            <div className="work-body">
              <span className="work-cat mono">{work.category}</span>
              <h3>{work.title}</h3>
              <p>{work.summary}</p>
              <div className="chip-list">
                {work.stack.map((tech) => (
                  <span key={tech} className="chip">{tech}</span>
                ))}
              </div>
              {work.link && (
                <a className="work-link mono" href={work.link} target="_blank" rel="noopener noreferrer">
                  {(work.linkLabel || 'case study').toLowerCase()} <FiArrowUpRight />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MyWork
