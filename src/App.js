import React from 'react';

import NavBar from './components/NavBar';
import OverLay from './components/OverLay';
import Hero from './components/Hero';
import Features from './components/Features';
import Banner from './components/Banner';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <OverLay />
      <NavBar />
      <Hero />
      <Features />
      <Banner father='App' />
      <Footer />
    </div>
  );
}

export default App;
