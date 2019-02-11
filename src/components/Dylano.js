import React, { Component } from "react";

class Dylano extends Component {
  constructor(props) {
    super(props);

    this.setState({
      name: ""
    });
  }

  componentWillMount() {
    this.setState({
      name: this.props.name
    });
  }

  render() {
    return (
      <div>
        <p>hello {this.state.name}!</p>
      </div>
    );
  }
}

export default Dylano;
