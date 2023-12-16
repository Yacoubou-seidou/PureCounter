import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');

const rootElement = ReactDOM.createRoot(root);

rootElement.render(
  <React.Suspense fallback={<div>Loading...</div>}>
    <App />
  </React.Suspense>
);
