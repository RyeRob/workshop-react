import React, { Component } from "react";
import Item from "./Item";

class Level1 extends Component {
  render() {
    return (
      <div className="Level1">
      <h2>{this.props.name}'s seen movies</h2>
      <ul className="collection">
        <Item item="The Matrix" />
        <Item item="Venom" />
        <Item item="Star Wars" />
      </ul>
    </div>
    )
  }
}

export default Level1;
