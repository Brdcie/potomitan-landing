import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const scrollToSection = (e, id) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e, id) => {
    setMenuOpen(false);
    if (isHome) {
      scrollToSection(e, id);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Navigation principale">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
          <img src="/logo-potomitan.svg" alt="Logo Potomitan" />
          <h1>POTOMITAN</h1>
        </Link>

        <button
          className={`navbar-burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          <span className="navbar-burger-line" />
          <span className="navbar-burger-line" />
          <span className="navbar-burger-line" />
        </button>

        <ul className={`navbar-menu ${menuOpen ? 'navbar-menu-open' : ''}`}>
          <li><a href="#applications" onClick={(e) => handleNavClick(e, 'applications')}>Applications</a></li>
          <li><a href="#initiative" onClick={(e) => handleNavClick(e, 'initiative')}>L'initiative</a></li>
          <li><a href="#equipe" onClick={(e) => handleNavClick(e, 'equipe')}>L'équipe</a></li>
          <li><Link to="/actualites" onClick={handleLinkClick}>Actualités</Link></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
