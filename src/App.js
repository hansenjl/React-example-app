import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting.js'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
