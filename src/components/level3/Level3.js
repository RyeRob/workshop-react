import React, { Component } from 'react';
import Card from "../common/Card";

class Level3 extends Component {
  constructor(props){
    super(props);

    this.state = {
      list: [
        {id: 0, title: "Title1", content: "content1"},
        {id: 1, title: "Title2", content: "content2"},
        {id: 2, title: "Title3", content: "content3"},
        {id: 3, title: "Title4", content: "content4"}
      ]
    }
  }
  render() {
    return (
      <div className="Level3">
        <h2>{this.props.name}'s favorite plots</h2>
        <div className="row">
          {this.state.list.map(item => {
            return <Card key={item.id} title={item.title} content={item.content} />
          })}
        </div>
      </div>
    )
  }
}

export default Level3;
