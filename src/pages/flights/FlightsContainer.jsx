import React, { useState } from "react";
import Flights from "./Flights";

const FlightsContainer = () => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [bookingServices, setBookingServices] = useState([]);

  const bookingServiceLogos = [
    "https://weekendsandaway.com/wp-content/uploads/2020/09/Google-flights-logo-1.png",
    "https://logos-world.net/wp-content/uploads/2021/02/Expedia-Logo-2012-2021.png",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const bookingService1 = `https://www.google.com/travel/flights/?from=${departure}&to=${destination}&dates=${dates}`;
    const bookingService2 = `https://www.expedia.com/Flights/?from=${departure}&to=${destination}&dates=${dates}`;

    setBookingServices([bookingService1, bookingService2]);
  };
  return (
    <Flights
      handleSubmit={handleSubmit}
      departure={departure}
      setDeparture={setDeparture}
      dates={dates}
      setDates={setDates}
      destination={destination}
      setDestination={setDestination}
      bookingServices={bookingServices}
      bookingServiceLogos={bookingServiceLogos}
    />
  );
};

export default FlightsContainer;
