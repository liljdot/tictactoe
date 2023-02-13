import React from 'react';
import ReactDOM from 'react-dom/client';
import {Tictactoe} from './tictactoe.js'

console.log('hi')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tictactoe />
  </React.StrictMode>
);
