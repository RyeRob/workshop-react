import React, { Component } from "react";
import Level1 from "./components/level1/Level1";
import Level2 from "./components/level2/Level2";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Max Altena"
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <div className="container">
          <h1>
            Welcome{" "}
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </h1>
          <Level1 name={name} />
          <Level2 name={name} />
        </div>
      </div>
    );
  }
}

export default App;
