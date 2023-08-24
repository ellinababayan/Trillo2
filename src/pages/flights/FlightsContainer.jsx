import React, { useState } from "react";
import Flights from "./Flights";

const FlightsContainer = () => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [bookingServices, setBookingServices] = useState([]);

  const bookingServiceLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Google_Flights_logo.svg/2560px-Google_Flights_logo.svg.png",
    // "https://assets.stickpng.com/images/589a4c455aa6293a4aac48ca.png",
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
