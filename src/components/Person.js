import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);

    const {
      name,
      age,
      study,
      work,
      place,
      picture,
      about,
      status
    } = this.props;

    this.state = {
      name,
      age,
      study,
      work,
      place,
      picture,
      about,
      status
    };
  }

  render() {
    const {
      name,
      age,
      study,
      work,
      place,
      picture,
      about,
      status
    } = this.state;
    return (
      <div>
        <p>Name: {name}!</p>
        <p>Age: {age}</p>
        <p>Study: {study}</p>
        <p>Work: {work}</p>
        <p>Place: {place}</p>
        {/* <p>Picture: {picture}</p> */}
        <p>About: {about}</p>
        <p>Status: {status}</p>
        <hr />
      </div>
    );
  }
}

export default Person;
