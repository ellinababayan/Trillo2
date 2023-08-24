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
      <div className="why_flights">
        <noscript>
          Discover the world at your fingertips with our easy flight booking
          service. Whether you're planning a quick getaway or a grand vacation,
          we've got you covered. Why Choose Us: Wide Selection: Explore a vast
          range of flight options to your dream destinations. Instant Booking:
          Secure your seat with quick and hassle-free online booking. Best
          Prices: Enjoy competitive prices and exclusive deals on flights. 24/7
          Support: Our dedicated team is available around the clock to assist
          you. How It Works: Search: Enter your travel details and preferences.
          Choose: Browse through available flights and select your ideal
          itinerary. Book: Confirm your booking and receive instant
          confirmation. Fly: Embark on your journey and create unforgettable
          memories. Your next adventure begins here. Book your flight with
          [TravelWebsiteName] today!
        </noscript>
      </div>
    </div>
  );
};

export default Flights;
