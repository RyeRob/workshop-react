import React, { Component } from "react";
import Level1 from "./components/level1/Level1"; // Task-1.0 - Uncomment this line
import Level2 from "./components/level2/Level2"; // Task-2.0
// Task-3.0
// Task-4.0

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ryan" // Change your name here if you'd like
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
          { <Level1 name={this.state.name} /> }

          <div className="divider" />

          {/* Task-2.0 */}
          <Level2 />

          <div className="divider" />

          {/* Task-3.0 */}

          <div className="divider" />

          {/* Task-4.0 */}
        </div>
      </div>
    );
  }
}

export default App;
