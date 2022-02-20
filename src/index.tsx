import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './TicTacToe';

ReactDOM.render(
  <React.StrictMode>
    <TicTacToe size={5} />
  </React.StrictMode>,
  document.getElementById('root')
);

