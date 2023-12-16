import React from 'react';
import { PureIncrement, PureDecrement } from './lib/index'
function App() {
  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      <p>Happy Coding</p>
      <div>
        <PureIncrement start={0} end={10} duration={1} className="purecounter" />
      </div>
      <div>
        <PureDecrement start={10} end={0} duration={1} className="purecounter" />
      </div>
    </div>
  );
}

export default App;
