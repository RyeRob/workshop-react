import React, { Component } from "react";
import Card from "../common/Card"; // Task-2.2

class Level2 extends Component {
  render() {
    return (
      <div className="Level2">
        {/* Task-2.1 */}
        <h2>{this.props.name}'s favorite movies</h2>

        <div className="row">
          {/* Task-2.2 */}
          <Card title="Pulp Fiction" content="Many people cross paths" />
          <Card title="The Truman Show" content="A man is concerned for his privacy"/>
          <Card title="Crank" content="A man is in a race against his biological clock"/>
        </div>
      </div>
    );
  }
}
export default Level2;