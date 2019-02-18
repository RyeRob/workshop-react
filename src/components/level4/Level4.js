import React, { Component } from "react";

class Level4 extends Component {
  // // Task-4.1 - Uncomment constructor
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     add: "",
  //     list: [
  //       { id: 0, name: "Deadpool 2" },
  //       { id: 1, name: "Ready Player One" },
  //       { id: 2, name: "Ocean's 8" },
  //       { id: 3, name: "Rampage" },
  //       { id: 4, name: "Tag" }
  //     ]
  //   };
  // }

  // // Task-4.2
  // handleClick = id => {
  //   const list = this.state.list.filter(item => item.id !== id);
  //   this.setState({
  //     list
  //   });
  // };

  // // Task-4.4
  // handleChange = e => {
  //   this.setState({
  //     [e.target.id]: e.target.value
  //   });
  // };

  // // Task-4.4
  // handleSubmit = e => {
  //   e.preventDefault();
  //   if (this.state.add) {
  //     const id = this.state.list[this.state.list.length - 1].id + 1;
  //     const name = this.state.add;
  //     const list = [...this.state.list, { id, name }];
  //     this.setState({
  //       add: "",
  //       list
  //     });
  //   }
  // };

  render() {
    return (
      <div className="Level4">
        {/* Task-4.1 */}
        <h2>'s movie watchlist</h2>

        <ul className="collection">
          {/* Task-4.3 */}
          {/* <li className="collection-item">
            <Form
              add={this.state.add}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </li> */}
          {/* Task-4.1 - Uncomment below */}
          {/* {this.state.list.map(item => {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                handleClick={this.handleClick}
              />
            );
          })} */}
        </ul>
      </div>
    );
  }
}

export default Level4;
