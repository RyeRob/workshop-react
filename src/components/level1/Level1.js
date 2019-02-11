import React, { Component } from "react";

import Card from "./Card";

class Level1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.name}'s favorite movies </p>
        <div className="cards">
          <Card title="yo mama" text="Bin laden" />
          <Card title="nazi 4 ever" text="heil hitler" />
          <Card title="trump ftw" text="build a wall!" />
        </div>
      </div>
    );
  }
}
export default Level1;
