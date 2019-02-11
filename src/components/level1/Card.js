import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      content: this.props.content
    };
  }
  render() {
    return (
      <div className="col s4">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{this.state.title}</span>
            <p>{this.state.content}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
