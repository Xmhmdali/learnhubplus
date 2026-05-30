import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="navbar">
      <div className="nav-logo">LearnHub+</div>
      <div className="hamburger" onClick={toggleMenu}>&#9776;</div>
      <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
