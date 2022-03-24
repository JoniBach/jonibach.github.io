import React from 'react';
import logo from './logo.svg';
import './default.css';

function Default() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>James' about page</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Comming soon
        </a>
      </header>
    </div>
  );
}

export default Default;
