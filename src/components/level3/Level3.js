import React, { Component } from "react";
import Form from "./Form";
import Item from "./Item";

class Level3 extends Component {
  constructor(props) {
    super(props);

    // Initial state
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
    // Set state with id from fired target and set that equal to the value
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    // Prevent from form submitting
    e.preventDefault();
    // Check if not empty
    if (this.state.add) {
      // Get new id by getting last object in array and adding 1
      const id = this.state.list[this.state.list.length - 1].id + 1;
      // Get current value of input
      const name = this.state.add;
      // Create new list
      const list = [...this.state.list, { id, name }];
      // Set state with new list and remove current value of input
      this.setState({
        add: "",
        list
      });
    }
  };

  handleClick = id => {
    // Update list by removing the item with matching id
    const list = this.state.list.filter(item => item.id !== id);
    // Set state with new list
    this.setState({
      list
    });
  };

  render() {
    // Destructering state
    const { add, list } = this.state;
    // Returning something to render
    return (
      <div className="Level3">
        <h2>{this.props.name}'s movie watchlist</h2>

        <ul className="collection">
          <li className="collection-item">
            <Form
              add={add}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </li>
          {list.length > 0 ? (
            list.map(item => {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  handleClick={this.handleClick}
                />
              );
            })
          ) : (
            <li className="collection-item center">
              <p>
                <i className="material-icons">check</i> Looks like you got all
                your groceries!
              </p>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Level3;
