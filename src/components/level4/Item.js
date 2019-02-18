import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <li className="collection-item">
      <span className="title">{this.props.name}</span>
      <span className="secondary-content" onClick={() => this.props.handleClick(this.props.id)}>
        <i className="material-icons">close</i>
      </span>
    </li>
    )
  }
}

export default Item;
