import React from "react";
import Item from "./Item";

const Level1 = ({ name }) => {
  return (
    <div className="Level2">
      <h2>{name}'s watch list</h2>
      <ul className="collection">
        <Item item="Deadpool 2" />
        <Item item="Ready Player One" />
        <Item item="Ocean's 8" />
        <Item item="Rampage" />
        <Item item="Tag" />
      </ul>
    </div>
  );
};

export default Level1;
