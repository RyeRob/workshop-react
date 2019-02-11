import React, { Component } from "react";

class Level2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  componentDidMount = () => {
    this.setState({
      name: this.props.name
    });
  };

  componentDidUpdate = () => {
    if (this.state.name !== this.props.name) {
      this.setState({
        name: this.props.name
      });
    }
  };

  render() {
    const { name } = this.state;
    return (
      <div className="Level2">
        <h2>{name}'s movie watch list</h2>
        <p>Cool movies I want to watch</p>
      </div>
    );
  }
}

export default Level2;
