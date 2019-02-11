import React, { Component } from "react";
import Level1 from "./components/level1/Level1";
import Level2 from "./components/level2/Level2";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Evert 'the Tank' van de Grift"
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
          <Level1 name={this.state.name} />
          <Level2 name={this.state.name} />
        </div>
      </div>
    );
  }
}

export default App;
