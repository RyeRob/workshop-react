import React, { Component } from "react";
import Level1 from "./components/level1/Level1";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Max"
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
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
          This is a name: {name}
          <Level1 name={name} />
        </div>
      </div>
    );
  }
}

export default App;
