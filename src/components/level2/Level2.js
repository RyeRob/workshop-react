import React, { Component } from "react";

class Level2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      list: []
    };
  }

  componentDidMount = () => {
    this.setState({
      name: this.props.name,
      list: this.props.list
    });
  };

  componentDidUpdate = () => {
    if (this.state.name !== this.props.name) {
      this.setState({
        name: this.props.name
      });
    }
    if (this.state.list !== this.props.list) {
      this.setState({
        list: this.props.list
      });
    }
  };

  render() {
    const { name, list } = this.state;
    return (
      <div className="Level2">
        <h2>{name}'s watch list</h2>
        <ul className="collection">
          {list.length > 0
            ? list.map(item => {
                return <li className="collection-item">{item}</li>;
              })
            : null}
        </ul>
      </div>
    );
  }
}

export default Level2;
