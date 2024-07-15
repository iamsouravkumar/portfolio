import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-">
        <div className="container-fluid">
          <Link className="navbar-brand" to="http://iamsorav.netlify.app" style={{ color: "yellow" }}>Portfolio.</Link>
          <button style={{ backgroundColor: "white" }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/home" end style={({ isActive }) =>
                  isActive ? { color: 'black', backgroundColor: '#01E3F4' } : undefined}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/skill" end style={({ isActive }) =>
                  isActive ? { color: 'black', backgroundColor: '#01E3F4' } : undefined}>Skills</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" end style={({ isActive }) =>
                  isActive ? { color: 'black', backgroundColor: '#01E3F4' } : undefined}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" end style={({ isActive }) =>
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