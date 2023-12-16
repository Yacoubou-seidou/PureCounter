import React from 'react';
import './App.css';
import { PureIncrement, PureDecrement } from './lib/index'
function App() {
  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      <p>Happy Coding</p>
      <PureIncrement start={0} end={10} duration={1} className="purecounter" />
      <PureDecrement start={10} end={0} duration={1} className="purecounter" />
    </div>
  );
}

export default App;
