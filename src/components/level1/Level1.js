import React, { Component } from "react";

import Card from "./Card";

class Level1 extends Component {
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
      <div className="Level1">
        <h2>{name}'s favorite movies</h2>
        <div className="cards">
          <Card title="Card 1" text="Lorem" />
          <Card title="Card 2" text="ipsum" />
          <Card title="Card 3" text="solor" />
        </div>
      </div>
    );
  }
}
export default Level1;
