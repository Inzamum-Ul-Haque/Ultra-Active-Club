import React, { useEffect, useState } from "react";
import Excercises from "../Excercises/Excercises";
import Details from "../Details/Details";
import "./Container.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import QuesAns from "../QuesAns/QuesAns";

const Container = () => {
  const [cards, setCards] = useState([]);
  const [excerciseTime, setExcerciseTime] = useState(0);

  useEffect(() => {
    fetch("fakeDb.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  // click handler for adding the excercise time
  const handleAddToList = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    setExcerciseTime((current) => current + clickedCard.time);
  };

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
              <Excercises
                key={card.id}
                card={card}
                handleAddToList={handleAddToList}
              />
            ))}
          </div>
        </div>
        <div className="qa-container">
          <QuesAns />
        </div>
      </div>
      <div className="details-container">
        <Details excerciseTime={excerciseTime} />
      </div>
    </div>
  );
};

export default Container;
