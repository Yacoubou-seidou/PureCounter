import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PureIncrement from '../src/lib/components/PureIncrement'; // Import PureIncrement
import PureDecrement from '../src/lib/components/PureDecrement'; // Import PureDecrement

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

export { PureIncrement, PureDecrement };
