import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Person
            name="Dylano"
            age="22"
            study="ICT"
            work="McDonalds"
            place="Blerick"
            // picture={photoDylano}
            about="I am Dylano Hartman"
            status="Crippling depression"
          />
          <Person
            name="Max"
            age="20"
            study="ICT"
            work="Geen"
            place="Best"
            // picture={photoMax}
            about="I am Max Altena"
            status="Crippling depression 2.0"
          />
        </div>
      </div>
    );
  }
}

export default App;
