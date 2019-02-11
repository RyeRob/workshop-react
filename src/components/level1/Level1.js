import React, { Component } from "react";

class Level1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  componentDidMount = () => {
    this.setState({
      name: this.props.name
    });
  };

  componentDidUpdate = () => {
    if (this.state.name !== this.props.name) {
      this.setState({
        name: this.props.name
      });
    }
  };

  render() {
    const { name } = this.state;
    return (
      <div className="Level1">
        <h2>{name}'s favorite movies</h2>
        <div className="row">
          <div className="col s4">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Card number 1</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, rerum.
                </p>
              </div>
            </div>
          </div>
          <div className="col s4">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Card number 2</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, alias.
                </p>
              </div>
            </div>
          </div>
          <div className="col s4">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Card number 3</span>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet, facere?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Level1;
