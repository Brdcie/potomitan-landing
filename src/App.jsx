import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GoogleComparison from './components/GoogleComparison';
import Impact93Seconds from './components/Impact93Seconds';
import Reconnaissance from './components/Reconnaissance';
import Applications from './components/Applications';
import Team from './components/Team';
import Initiative from './components/Initiative';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Actualites from './pages/Actualites';
import MentionsLegales from './pages/MentionsLegales';
import CGU from './pages/CGU';
import './index.css';

// Composant pour la page d'accueil - Structure selon spec UX
const HomePage = () => (
  <>
    <Hero />
    <GoogleComparison />
    <Impact93Seconds />
    <Reconnaissance />
    <Applications />
    <Team />
    <Initiative />
    <FinalCTA />
  </>
);

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/cgu" element={<CGU />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;