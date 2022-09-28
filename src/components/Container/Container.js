import React from "react";
import Excercises from "../Excercises/Excercises";
import Details from "../Details/Details";
import "./Container.css";

const Container = () => {
  return (
    <div className="app-container">
      <div className="excercise-container">
        <h2>Bangladesh Gym Club</h2>
        <div className="card-container">
          <h4>Select Excercise List</h4>
        </div>
      </div>
      <Details />
    </div>
  );
};

export default Container;
