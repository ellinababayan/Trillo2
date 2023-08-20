import React, { useState } from "react";
// import "./main.css";

const Flights =(props) => {
//   const [departure, setDeparture] = useState("");
//   const [destination, setDestination] = useState("");
//   const [dates, setDates] = useState("");
//   const [bookingServices, setBookingServices] = useState([]);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const bookingService1 = `https://www.google.com/travel/flights/?from=${departure}&to=${destination}&dates=${dates}`;
//     const bookingService2 = `https://www.expedia.com/Flights/?from=${departure}&to=${destination}&dates=${dates}`;

//     setBookingServices([bookingService1, bookingService2]);
//   };

  return (
    <div className="container">
      <h1>Flight Search</h1>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="departure">Departure City:</label>
        <input
          type="text"
          id="departure"
          value={props.departure}
          onChange={(e) => props.setDeparture(e.target.value)}
          required
        />
        <label htmlFor="destination">Destination:</label>
        <input
          type="text"
          id="destination"
          value={props.destination}
          onChange={(e) => props.setDestination(e.target.value)}
          required
        />
        <label htmlFor="dates">Dates:</label>
        <input
          type="date"
          id="dates"
          value={props.dates}
          onChange={(e) => props.setDates(e.target.value)}
          required
        />
        <button type="submit">Search Flights</button>
      </form>
      <div className="results">
        <p>Search for flights:</p>
        {props.bookingServices.map((service, index) => (
          <a
            key={index}
            href={service}
            target="_blank"
            rel="noopener noreferrer"
          >
            Booking Service {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Flights;
