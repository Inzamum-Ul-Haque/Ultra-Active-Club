import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import me from "../../images/me.jpg";
import React, { useEffect, useState } from "react";
import "./Details.css";
import { addToLocalDb, retrieveFromLocalDb } from "../../utilities/localDb";

const Details = ({ excerciseTime }) => {
  const [breakTime, setBreakTime] = useState(0);
  const [display, setDisplay] = useState("none");

  const handleBreakTime = (event) => {
    const breakTime = event.target.innerText.slice(0, 2);
    setBreakTime(parseInt(breakTime));
    addToLocalDb(parseInt(breakTime));
  };

  useEffect(() => {
    const time = retrieveFromLocalDb();
    setBreakTime(time.breakTime);
  }, [breakTime]);

  const toast = {
    display: display,
    backgroundColor: "white",
    color: "#630edb",
    position: "absolute",
    textAlign: "center",
    bottom: "-15%",
    right: "13%",
    zIndex: "5",
    padding: "5px",
    fontSize: "22px",
    borderRadius: "10px",
    border: "2px solid #630edb",
  };

  const showToast = () => {
    setDisplay("block");
    setTimeout(() => {
      setDisplay("none");
    }, 2000);
  };

  return (
    <div className="details">
      <div style={toast}>
        <h3>Activity Completed!!</h3>
      </div>
      <section className="profile">
        <img src={me} alt="" />
        <div>
          <h4>Inzamum-Ul-Haque</h4>
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> Mirpur, Dhaka
          </p>
        </div>
      </section>
      <section className="personal-info">
        <div>
          <p>
            <span className="weight">76</span>
            <span className="metric">kg</span>
          </p>
          <p>Weight</p>
        </div>
        <div>
          <p className="height">6.5</p>
          <p>Height</p>
        </div>
        <div>
          <p>
            <span className="age">24</span>
            <span className="metric">yrs</span>
          </p>
          <p>Age</p>
        </div>
      </section>
      <section className="break-section">
        <h3>Add A Break</h3>
        <div className="break-timer">
          <div onClick={(e) => handleBreakTime(e)}>
            <p>10s</p>
          </div>
          <div onClick={(e) => handleBreakTime(e)}>
            <p>20s</p>
          </div>
          <div onClick={(e) => handleBreakTime(e)}>
            <p>30s</p>
          </div>
          <div onClick={(e) => handleBreakTime(e)}>
            <p>40s</p>
          </div>
        </div>
      </section>
      <section className="excercise-time-section">
        <h3>Excercise Details</h3>
        <div className="excercise-time-container">
          <p className="e-time">Excercise time</p>
          <p className="e-time-val">
            {excerciseTime ? excerciseTime : "0"} seconds
          </p>
        </div>
        <div className="break-time-container">
          <p className="b-time">Break time</p>
          <p className="b-time-val">{breakTime ? breakTime : "0"} seconds</p>
        </div>
        <button onClick={showToast} className="complete-btn">
          Activity Completed
        </button>
      </section>
    </div>
  );
};

export default Details;
