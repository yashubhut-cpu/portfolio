import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-header container">
      <nav className="navbar glass transition">
        <Link to="/" className="navbar-brand text-gradient">
          YB<span>.</span>
        </Link>

        {/* Mobile menu toggle button */}
        <button className="mobile-toggle flex-center transition" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Navigation">
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`nav-list ${isOpen ? 'show' : ''} transition`}>
          <li>
            <NavLink to="/" end className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className="nav-link" onClick={() => setIsOpen(false)}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
