import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/NavBar';
import OverLay from './components/OverLay';
import Hero from './components/Hero';
import Features from './components/Features';
import Banner from './components/Banner';
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <OverLay />
    <NavBar />
    <Hero />
    <Features />
    <Banner />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
