import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  var person = {
    name: "Dr. Mahfuz",
    job: "Singer",
  };
  let style = {
    color: "red",
    backgroundColor: "yellow",
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>i love react</p>
        <h1 style={style}>
          heading {person.name + " " + person.job + (3 + 2)}
        </h1>
        <Person name="Rubel" nayika="Moushumi"></Person>
        <Person name="Jashim" nayika="Toya"></Person>
        <Person></Person>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}
function Person(props) {
  const personStyle = {
    border: "2px solid red",
    margin: "10px",
  };
  return (
    //  <div style={{ border: "2px solid yellow", margin: "10px" }}>
    <div style={personStyle}>
      <h1>Nayok: {props.name}</h1>
      <h3>Hero of {props.nayika}</h3>
    </div>
  );
}

export default App;

// #######################################################
//  Calling function from an array

import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks = ["Anwar", "Jafor", " Alomgir", "Salman"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>i love react</p>
        <Person name="Munna" prof="Freelancer"></Person>
        <Person name="Masum" prof="Doctor"></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person(props) {
  return (
    <div style={{ border: "2px solid gold", width: "400px", margin: "20px" }}>
      <h3>My name:{props.name}</h3>
      <p>My Profession: {props.prof}</p>
    </div>
  );
}

export default App;
