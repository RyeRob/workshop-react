import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      text: this.props.text
    };
  }
  render() {
    return (
      <div className="card">
        <p>{this.state.title}</p>
        <p>{this.state.text}</p>
      </div>
    );
  }
}
export default Card;
