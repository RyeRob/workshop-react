import React, { Component } from "react";
// Task-3.3

class Level3 extends Component {
  // // Task-3.2
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     list: [
  //       { id: 0, title: "Title1", content: "content1" },
  //       { id: 1, title: "Title2", content: "content2" },
  //       { id: 2, title: "Title3", content: "content3" },
  //       { id: 3, title: "Title4", content: "content4" }
  //     ]
  //   };
  // }

  render() {
    return (
      <div className="Level3">
        {/* Task-3.1 */}
        <h2>'s favorite plots</h2>

        <div className="row">
          {/* Task-3.3 - Uncomment the lines below */}
          {/* {this.state.list.map(item => {
            return (
              <Card key={item.id} title={item.title} content={item.content} />
            );
          })} */}
        </div>
      </div>
    );
  }
}

export default Level3;
