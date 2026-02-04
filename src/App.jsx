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
import Actualites from './pages/Actualites';
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
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/actualites" element={<Actualites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;