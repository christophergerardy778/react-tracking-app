import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TrackingProvider } from './Context/TrackingContext';

ReactDOM.render(
  <React.StrictMode>
    <TrackingProvider>
      <App />
    </TrackingProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
