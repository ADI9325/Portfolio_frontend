import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import './Footer.css'

const socials = [
  { href: 'mailto:adityabagade04@gmail.com', label: 'Email', icon: <FiMail /> },
  { href: 'https://github.com/ADI9325', label: 'GitHub', icon: <FiGithub /> },
  { href: 'https://www.linkedin.com/in/its-aadi04/', label: 'LinkedIn', icon: <FiLinkedin /> },
  { href: 'https://leetcode.com/u/its_adii04/', label: 'LeetCode', icon: <SiLeetcode /> },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <a href="/" className="footer-logo mono"><span className="accent">~/</span>aditya</a>
          <p className="footer-tag">Full-stack developer · Node.js, NestJS, Python, React</p>
        </div>
        <div className="footer-socials">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>
      <p className="footer-copy mono">© {new Date().getFullYear()} Aditya Bagade · built with React + Vite</p>
    </footer>
  )
}

export default Footer
