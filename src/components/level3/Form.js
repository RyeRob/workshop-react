import React from "react";

const Form = ({ add, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="add"
        type="text"
        onChange={handleChange}
        value={add}
        placeholder="Add a new movie..."
      />
      <button
        type="submit"
        className={`btn-small ${add.length === 0 ? "disabled" : null}`}
      >
        <i className="material-icons">add</i>Add movie
      </button>
    </form>
  );
};

export default Form;
