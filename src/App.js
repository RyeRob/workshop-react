import React, { Component } from "react";
// import Level1 from "./components/level1/Level1"; // Task-1.0 - Uncomment this line
// import Level2 from "./components/level2/Level2"; // Task-2.0 - Uncomment this line
// import Level3 from "./components/level3/Level3"; // Task-3.0
// import Level4 from "./components/level4/Level4"; // Task-4.0

class App extends Component {
  constructor(props) {
    super(props);

    // Current state of component with name
    this.state = {
      name: "The tank" // Change your name here if you'd like
    };
  }

  // The following function sets the state name on change of the input field
  handleChange = e => {
    // Update state (name) with the value of the input
    this.setState({ name: e.target.value });
  };

  render() {
    // Returns a single element with nested children
    return (
      <div className="App">
        <div className="container">
          <h1>
            Welcome{" "}
            <input
              type="text"
              placeholder="Your name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </h1>
          <div className="divider" />

          {/* Task-1.0 - Uncomment the following line */}
          {/* <Level1 name={this.state.name} /> */}

          <div className="divider" />

          {/* Task-2.0 - Uncomment the following line */}
          {/* <Level2 name={this.state.name} /> */}

          <div className="divider" />

          {/* <Level3 name={this.state.name} /> */}

          <div className="divider" />

          {/* <Level4 name={this.state.name} /> */}
        </div>
      </div>
    );
  }
}

export default App;
