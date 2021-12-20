import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/NavBar';
import OverLay from './components/OverLay';
import Hero from './components/Hero';

ReactDOM.render(
  <React.StrictMode>
    <OverLay />
    <NavBar />
    <Hero />
  </React.StrictMode>,
  document.getElementById('root')
);
