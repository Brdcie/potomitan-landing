import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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

  const handleNavClick = (e, id) => {
    if (isHome) {
      scrollToSection(e, id);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className="navbar" aria-label="Navigation principale">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo-potomitan.svg" alt="Logo Potomitan" />
          <h1>POTOMITAN</h1>
        </Link>
        <ul className="navbar-menu">
          <li><a href="#applications" onClick={(e) => handleNavClick(e, 'applications')}>Applications</a></li>
          <li><a href="#initiative" onClick={(e) => handleNavClick(e, 'initiative')}>L'initiative</a></li>
          <li><a href="#equipe" onClick={(e) => handleNavClick(e, 'equipe')}>L'équipe</a></li>
          <li><Link to="/actualites">Actualités</Link></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
