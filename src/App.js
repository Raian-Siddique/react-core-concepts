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
