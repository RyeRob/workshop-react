import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="col s4">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{this.props.title}</span>
            <p>{this.props.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;