import React, { useEffect, useState } from "react";
import Excercises from "../Excercises/Excercises";
import Details from "../Details/Details";
import "./Container.css";

const Container = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("fakeDb.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="app-container">
      <div className="header">
        <h2>Bangladesh Gym Club</h2>
        <div className="excercise-container">
          <h4>Select Excercise List</h4>
          <div className="card-container">
            {cards.map((card) => (
              <Excercises key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
      <Details />
    </div>
  );
};

export default Container;
