import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const links = [
  { id: 'about', label: 'about' },
  { id: 'services', label: 'services' },
  { id: 'work', label: 'work' },
  { id: 'contact', label: 'contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      let current = ''
      for (const { id } of links) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo mono" onClick={() => setOpen(false)}>
          <span className="accent">~/</span>aditya
        </a>

        <nav className={`nav-links ${open ? 'nav-open' : ''}`} aria-label="Main">
          {links.map(({ id, label }, i) => (
            <a
              key={id}
              href={`#${id}`}
              className={`mono ${active === id ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              <span className="nav-num">0{i + 1}.</span>{label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            hire me
          </a>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
