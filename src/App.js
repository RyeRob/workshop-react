import React, { Component } from "react";
import Level1 from "./components/level1/Level1";
import Level2 from "./components/level2/Level2";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Max Altena",
      list: ["Deadpool 2", "Ready Player One", "Ocean's 8", "Rampage", "Tag"]
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, list } = this.state;
    return (
      <div className="App">
        <div className="container">
          <h1>
            Welcome{" "}
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={this.handleChange}
            />
          </h1>
          <Level1 name={name} />
          <Level2 name={name} list={list} />
        </div>
      </div>
    );
  }
}

export default App;
