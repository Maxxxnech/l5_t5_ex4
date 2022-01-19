import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { Clock } from "./components";

ReactDOM.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>,
  document.getElementById('root')
);
