import React, { Component } from "react";
// import Movie from "./Movie"; // Task-1.2

class Level1 extends Component {
  render() {
    return (
      <div className="Level1">
        {/* Task-1.1 */}
        {/* <h2>{this.props.name}'s seen movies</h2> */}

        <ul className="collection">
          {/* <Movie title="The Lord of the Rings" /> */}
        </ul>
      </div>
    );
  }
}

export default Level1;
