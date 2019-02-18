import React, { Component } from "react";
import Form from "./Form";
import Item from "./Item";

class Level4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      add: "",
      list: [
        { id: 0, name: "Deadpool 2" },
        { id: 1, name: "Ready Player One" },
        { id: 2, name: "Ocean's 8" },
        { id: 3, name: "Rampage" },
        { id: 4, name: "Tag" }
      ]
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.add) {
      const id = this.state.list[this.state.list.length - 1].id + 1;
      const name = this.state.add;
      const list = [...this.state.list, { id, name }];
      this.setState({
        add: "",
        list
      });
    }
  };

  handleClick = id => {
    const list = this.state.list.filter(item => item.id !== id);
    this.setState({
      list
    });
  };

  render() {
    return (
      <div className="Level4">
        <h2>{this.props.name}'s movie watchlist</h2>
        <ul className="collection">
          <li className="collection-item">
            <Form
              add={this.state.add}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </li>
          {this.state.list.map(item => {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  handleClick={this.handleClick}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}

export default Level4;
