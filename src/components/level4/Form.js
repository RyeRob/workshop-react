import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
      <input
        id="add"
        type="text"
        onChange={this.props.handleChange}
        value={this.props.add}
        placeholder="Add a new movie..."
      />
      <button
        type="submit"
        name="action"
        className={`btn-small ${this.props.add.length === 0 ? "disabled" : null}`}
      > 
        Add movie <i className="material-icons left">add</i>
      </button>
    </form>
    )
  }
}

export default Form;
