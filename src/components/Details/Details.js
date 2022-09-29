import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import me from "../../images/me.jpg";
import React from "react";
import "./Details.css";

const Details = () => {
  return (
    <div>
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
          <div>
            <p>10s</p>
          </div>
          <div>
            <p>20s</p>
          </div>
          <div>
            <p>30s</p>
          </div>
          <div>
            <p>40s</p>
          </div>
        </div>
      </section>
      <section className="excercise-time-section">
        <h3>Excercise Details</h3>
        <div className="excercise-time">
          <p>Excercise time</p>
          <p>0 seconds</p>
        </div>
        <div className="break-time">
          <p>Break time</p>
          <p>0 seconds</p>
        </div>
      </section>
    </div>
  );
};

export default Details;
