import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <img src="/logo-potomitan.svg" alt="Logo Potomitan" />
          <h1>POTOMITAN</h1>
        </a>
        <ul className="navbar-menu">
          <li><a href="#applications">Applications</a></li>
          <li><a href="#initiative">L'initiative</a></li>
          <li><a href="#equipe">L'équipe</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
