import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoState from './context/todoState';

ReactDOM.render(
  <TodoState>
    <App />
  </TodoState>,
  document.getElementById('root')
);
