import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [collapsing, setCollapsing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      setCollapsing(true);
      setTimeout(() => {
        setIsOpen(false);
        setCollapsing(false);
      }, 500); // Match the transition duration
    } else {
      setIsOpen(true);
    }
  };

  const closeMenu = () => {
    setCollapsing(true);
    setTimeout(() => {
      setIsOpen(false);
      setCollapsing(false);
    }, 500); // Match the transition duration
  };

  return (
    <div>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} fixed-top navbar-expand-lg bg-`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="http://iamsourav.netlify.app" style={{ color: "yellow" }}>Sourav.</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isOpen} aria-label="Toggle navigation" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''} ${collapsing ? 'collapsing' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/home" onClick={closeMenu} end style={({ isActive }) =>
                  isActive ? { color: 'black', backgroundColor: '#01E3F4' } : undefined}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/portfolio" onClick={closeMenu} end style={({ isActive }) =>
                  isActive ? { color: 'black', backgroundColor: '#01E3F4' } : undefined}>Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/skill" onClick={closeMenu} end style={({ isActive }) =>
                  isActive ? { color: 'black', backgroundColor: '#01E3F4' } : undefined}>Skills</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={closeMenu} end style={({ isActive }) =>
                  isActive ? { color: 'black', backgroundColor: '#01E3F4' } : undefined}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" onClick={closeMenu} end style={({ isActive }) =>
                  isActive ? { color: 'black', backgroundColor: '#01E3F4' } : undefined}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar