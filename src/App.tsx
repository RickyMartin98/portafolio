import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import CV from './components/CV/CV';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
        {/* <Main /> */}
      </header>
    </div>
  );
}

export default App;
