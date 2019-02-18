import React, { Component } from "react";
import Level1 from "./components/level1/Level1";
import Level2 from "./components/level2/Level2";
import Level3 from "./components/level3/Level3";
import Level4 from "./components/level4/Level4";

class App extends Component {
  constructor(props) {
    super(props);

    // Current state
    this.state = {
      name: "Max"
    };
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

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
              onChange={this.handleChange}
            />
          </h1>
          <div className="divider" />
          <Level1 name={this.state.name} />
          <div className="divider" />
          <Level2 name={this.state.name} />
          <div className="divider"></div>
          <Level3 name={this.state.name}/>
          <div className="divider" />
          <Level4 name={this.state.name} />
        </div>
      </div>
    );
  }
}

export default App;
