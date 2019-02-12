import React from "react";
import Item from "./Item";

const Level1 = ({ name }) => {
  return (
    <div className="Level1">
      <h2>{name}'s seen movies</h2>
      <ul className="collection">
        <Item item="The Matrix" />
        <Item item="Venom" />
        <Item item="Star Wars" />
      </ul>
    </div>
  );
};

export default Level1;
