import React from "react";

const Item = ({ id, name, handleClick }) => {
  return (
    <li className="collection-item">
      <span className="title">{name}</span>
      <span className="secondary-content" onClick={() => handleClick(id)}>
        <i className="material-icons">close</i>
      </span>
    </li>
  );
};

export default Item;
