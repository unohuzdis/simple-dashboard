import React from 'react';
// import logo from './logo.svg';
import './App.css';

import 'rsuite/dist/styles/rsuite-default.css';
import { Button } from 'rsuite';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Button appearance="primary"> Hello world </Button>
    </div>
  );
}

export default App;
