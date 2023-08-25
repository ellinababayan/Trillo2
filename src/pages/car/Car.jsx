import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Car.css";
import HowCar from "./HowCar";

const Car = (props) => {
  return (
    <div className="car_container">
      <div>
        <div className="container__searchbar">
          <h1>Car Search</h1>
          <form onSubmit={props.handleSubmit}>
            <label htmlFor="departure">Departure City:</label>
            <input
              type="text"
              id="departure"
              value={props.departure}
              className="search__cars"
              onChange={(e) => props.setDeparture(e.target.value)}
              required
            />
            <label htmlFor="destination">Destination:</label>
            <input
              type="text"
              id="destination"
              value={props.destination}
              className="search__cars"
              onChange={(e) => props.setDestination(e.target.value)}
              required
            />
            <label htmlFor="dates">Dates:</label>
            <input
              type="date"
              id="dates"
              value={props.dates}
              className="search__cars"
              onChange={(e) => props.setDates(e.target.value)}
              required
            />
            <button type="submit" className="btn find">
              Search Cars
            </button>
          </form>
          <div className="results">
            <p>Book car:</p>
            {props.bookingServices.map((service, index) => (
              <a
                key={index}
                href={service}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Booking Service {index + 1} */}
                <img
                  className="logo_cars"
                  src={props.bookingServiceLogos[index]}
                  alt={`Booking Service ${service + 1}`}
                ></img>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="how_car">
        <ScrollAnimation animateIn="fadeIn">
          <h1>How It Works?</h1>
        </ScrollAnimation>
        <HowCar />
      </div>
    </div>
  );
};

export default Car;
