import React, { useEffect, useState } from "react";
import Excercises from "../Excercises/Excercises";
import Details from "../Details/Details";
import "./Container.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

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
        <h2>
          <FontAwesomeIcon icon={faDumbbell} /> Bangladesh Gym Club
        </h2>
        <div className="excercise-container">
          <h4>Select Excercise List</h4>
          <div className="card-container">
            {cards.map((card) => (
              <Excercises key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
      <div className="details-container">
        <Details />
      </div>
    </div>
  );
};

export default Container;
