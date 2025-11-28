import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ActualitesTeaser from './components/ActualitesTeaser';
import Applications from './components/Applications';
import Initiative from './components/Initiative';
import Team from './components/Team';
import Footer from './components/Footer';
import Actualites from './pages/Actualites'; // ← NOUVEAU
import './index.css';

// Composant pour la page d'accueil
const HomePage = () => (
  <>
    <Hero />
    <ActualitesTeaser />
    <Applications />
    <Initiative />
    <Team />
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