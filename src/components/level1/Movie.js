import React, { Component } from "react";

class Movie extends Component {
  render() {
    return (
      <li className="collection-item">
        <i className="material-icons left">movie</i>
        {this.props.title}
      </li>
    );
  }
}

export default Movie;
