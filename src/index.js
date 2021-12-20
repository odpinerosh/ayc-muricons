import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/NavBar';
import OverLay from './components/OverLay';

ReactDOM.render(
  <React.StrictMode>
    <OverLay />
    <NavBar />
  </React.StrictMode>,
  document.getElementById('root')
);
