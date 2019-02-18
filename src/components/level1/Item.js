import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <li className="collection-item">{this.props.item}</li>
    )
  }
}

export default Item;
