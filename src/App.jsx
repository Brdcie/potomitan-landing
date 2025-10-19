import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Applications from './components/Applications';
import Initiative from './components/Initiative';
import Team from './components/Team';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Applications />
      <Initiative />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
