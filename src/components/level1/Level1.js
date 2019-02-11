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
        <div className="row">
          <Card title="Venom" content="venommmmmmmmm" />
          <Card title="Lord of the Rings" content="MY PRECIOUSSSSS" />
          <Card title="Game Of Thrones" content="Winter is coming" />
        </div>
      </div>
    );
  }
}
export default Level1;
