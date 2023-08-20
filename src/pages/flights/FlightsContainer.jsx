import React, {useState} from "react";
import Flights from "./Flights";

const FlightsContainer = () => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [bookingServices, setBookingServices] = useState([]);

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
    />
  );
};

export default FlightsContainer;
