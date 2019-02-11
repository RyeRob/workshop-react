import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="col s4">
      <div className="card">
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
