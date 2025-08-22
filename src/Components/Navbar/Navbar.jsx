import React, { useRef, useState, useEffect } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import theme_pattern from '../../assets/theme_pattern.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMenu = () => {
    menuRef.current.style.right = "0";
    document.body.style.overflow = "hidden"; // Prevent body scroll when menu is open
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-300px";
    document.body.style.overflow = "auto"; // Restore body scroll
  }

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    closeMenu(); // Close mobile menu when item is clicked
  }

  return (
    <div className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="title-box_nav">
        <AnchorLink className='anchor-link' href='#home' offset={100}>
          <h1>Aditya Bagade</h1>
          <span className="nav-subtitle">Full-Stack Developer</span>
        </AnchorLink>
        <img className="title-box-nav_img" src={theme_pattern} alt="" />
      </div>
      
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className='nav-mob-open' />
      
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
        
        <li className={menu === "home" ? "active" : ""}>
          <AnchorLink className='anchor-link' href='#home' offset={100}>
            <p onClick={() => handleMenuClick("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt='' className="nav-underline" />}
        </li>
        
        <li className={menu === "about" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => handleMenuClick("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt='' className="nav-underline" />}
        </li>
        
        <li className={menu === "services" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => handleMenuClick("services")}>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt='' className="nav-underline" />}
        </li>
        
        <li className={menu === "work" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => handleMenuClick("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt='' className="nav-underline" />}
        </li>
        
        <li className={menu === "contact" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => handleMenuClick("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt='' className="nav-underline" />}
        </li>
      </ul>
      
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          <span>Connect With Me</span>
        </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar