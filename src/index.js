import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/Calculator';
import Bonus from './components/Bonus';
import './style.css';

ReactDOM.render(
  <div>
  <Calculator />
  <Bonus />
  </div>,
  document.getElementById('root')
);