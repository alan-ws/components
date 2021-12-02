import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages';
import { setup } from 'goober';
import { BrowserRouter as Router } from 'react-router-dom';

setup(React.createElement);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
