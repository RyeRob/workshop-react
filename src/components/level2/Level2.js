import React, { Component } from "react";
import Card from "../common/Card";

class Level2 extends Component {
  render() {
    return (
      <div className="Level2">
      <h2>{this.props.name}'s favorite movies</h2>
      <div className="row">
        <Card
          title="The Matrix"
          content="A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
        />
        <Card
          title="Star Wars"
          content="Two Jedi Knights escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory."
        />
        <Card
          title="Venom"
          content="A failed reporter is bonded to an alien entity, one of many entities who have invaded Earth. But the entity takes a liking to Earth and decides to protect it."
        />
      </div>
    </div>
    )
  }
}

export default Level2;
