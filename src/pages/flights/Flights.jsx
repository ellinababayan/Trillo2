import React from "react";
import "./Flights.css";

const Flights = (props) => {
  return (
    <div className="container__flights">
      <div className="background__flights"></div>
      <div className="container__searchbar">
        <h1>Flight Search</h1>
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="departure">Departure City:</label>
          <input
            type="text"
            id="departure"
            value={props.departure}
            className="search__flights"
            onChange={(e) => props.setDeparture(e.target.value)}
            required
          />
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            value={props.destination}
            className="search__flights"
            onChange={(e) => props.setDestination(e.target.value)}
            required
          />
          <label htmlFor="dates">Dates:</label>
          <input
            type="date"
            id="dates"
            value={props.dates}
            className="search__flights"
            onChange={(e) => props.setDates(e.target.value)}
            required
          />
          <button type="submit" className="btn find">
            Search Flights
          </button>
        </form>
        <div className="results">
          <p>Book flight:</p>
          {props.bookingServices.map((service, index) => (
            <a
              key={index}
              href={service}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Booking Service {index + 1} */}
              <img
                className="logo_flights"
                src={props.bookingServiceLogos[index]}
                alt={`Booking Service ${service + 1}`}
              ></img>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flights;
