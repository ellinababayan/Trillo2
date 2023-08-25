import React from "react";
import "./Tours.css";

const Tours = (props) => {
  return (
    <div className="tours_container">
      <div className="tours_container">
        <div>
          <div className="container__searchbar">
            <h1>Tours Search</h1>
            <form onSubmit={props.handleSubmit}>
              <label htmlFor="departure">Departure City:</label>
              <input
                type="text"
                id="departure"
                value={props.departure}
                className="search__tours"
                onChange={(e) => props.setDeparture(e.target.value)}
                required
              />
              <label htmlFor="destination">Destination:</label>
              <input
                type="text"
                id="destination"
                value={props.destination}
                className="search__tours"
                onChange={(e) => props.setDestination(e.target.value)}
                required
              />
              <label htmlFor="dates">Dates:</label>
              <input
                type="date"
                id="dates"
                value={props.dates}
                className="search__tours"
                onChange={(e) => props.setDates(e.target.value)}
                required
              />
              <button type="submit" className="btn find">
                Search tours
              </button>
            </form>
            <div className="results">
              <p>Book Tour:</p>
              {props.bookingServices.map((service, index) => (
                <a
                  key={index}
                  href={service}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="logo_tours"
                    src={props.bookingServiceLogos[index]}
                    alt={`Booking Service ${service + 1}`}
                  ></img>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
