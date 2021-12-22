import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/NavBar';
import OverLay from './components/OverLay';
import Hero from './components/Hero';
import Features from './components/Features';
import Banner from './components/Banner';

ReactDOM.render(
  <React.StrictMode>
    <OverLay />
    <NavBar />
    <Hero />
    <Features />
    <Banner />
  </React.StrictMode>,
  document.getElementById('root')
);
