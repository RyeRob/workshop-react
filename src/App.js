import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";
import Level1 from "./components/level1/Level1";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "dylano"
    };
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Level1 name={this.state.name} />
          {/* <Person
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
          /> */}
        </div>
      </div>
    );
  }
}

export default App;
