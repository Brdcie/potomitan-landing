import React, { useState, useEffect } from 'react';
import './SectionNav.css';

const SECTIONS = [
  { id: 'hero', label: 'Accueil', bg: 'dark' },
  { id: 'comparaison', label: 'Le problème', bg: 'light' },
  { id: 'reconnaissance', label: 'Validation', bg: 'dark' },
  { id: 'applications', label: 'Applications', bg: 'light' },
  { id: 'equipe', label: 'Équipe', bg: 'dark' },
  { id: 'initiative', label: 'Vision', bg: 'light' },
  { id: 'cta-final', label: 'Agir', bg: 'dark' },
];

const SectionNav = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeBg = SECTIONS.find((s) => s.id === activeSection)?.bg || 'dark';

  return (
    <nav className={`section-nav section-nav-on-${activeBg}`} aria-label="Navigation sections">
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          className={`section-nav-item ${activeSection === id ? 'active' : ''}`}
          onClick={() => handleClick(id)}
          title={label}
          aria-label={`Aller à ${label}`}
        >
          <span className="section-nav-line" />
          <span className="section-nav-label">{label}</span>
        </button>
      ))}
    </nav>
  );
};

export default SectionNav;
