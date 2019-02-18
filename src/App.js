import React, { Component } from "react";
// import Level1 from "./components/level1/Level1"; // Task-1.0 - Uncomment this line
// import Level2 from "./components/level2/Level2"; // Task-2.0
// import Level3 from "./components/level3/Level3"; // Task-3.0
// import Level4 from "./components/level4/Level4"; // Task-4.0

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "tank" // Change your name here if you'd like
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>
            Welcome{" "}
            <input
              type="text"
              placeholder="Your name"
              value={this.state.name}
              // Update state (name) with the value of the input on change
              onChange={e => this.setState({ name: e.target.value })}
            />
          </h1>
          <div className="divider" />

          {/* Task-1.0 - Uncomment the following line */}
          {/* <Level1 name={this.state.name} /> */}

          <div className="divider" />

          {/* Task-2.0 */}
          {/* <Level2 /> */}

          <div className="divider" />

          {/* Task-3.0 */}
          {/* <Level3 /> */}

          <div className="divider" />

          {/* Task-4.0 */}
          {/* <Level4 /> */}
        </div>
      </div>
    );
  }
}

export default App;
