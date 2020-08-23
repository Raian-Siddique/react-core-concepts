import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  var person = {
    name: "Dr. Mahfuz",
    job: "Singer",
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>i love react</p>
        <h1>heading {person.name + " " + person.job + (3 + 2)}</h1>

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
