import React from "react";
import "./Excercises.css";

const Excercises = ({ card, handleAddToList }) => {
  const { image, heading, desc, age, time } = card;
  return (
    <div className="card">
      <img src={image} alt="" />
      <h3>{heading}</h3>
      <p className="desc">{desc}</p>
      <p>
        For age: <strong>{age}</strong>
      </p>
      <p>
        Time Required: <strong>{time}</strong>s
      </p>
      <button onClick={() => handleAddToList(card.id)}>Add to list</button>
    </div>
  );
};

export default Excercises;
