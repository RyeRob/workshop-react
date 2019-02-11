import React from "react";
import Card from "./Card";

const Level3 = ({ name }) => {
  return (
    <div className="Level3">
      <h2>{name}'s favorite movies</h2>
      <div className="row">
        <Card title="The Matrix" content="Some stuff about the Matrix" />
        <Card title="Venom" content="Some stuff about Venom" />
        <Card title="Star Wars" content="Some stuff about Star Wars" />
      </div>
    </div>
  );
};

export default Level3;
