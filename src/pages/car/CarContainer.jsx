import React, { useState } from "react";
import Car from "./Car";

const CarContainer = () => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [bookingServices, setBookingServices] = useState([]);

  const bookingServiceLogos = [
    "https://logos-marcas.com/wp-content/uploads/2021/03/Kayak-Simbolo.png",
    "https://logos-world.net/wp-content/uploads/2021/02/Expedia-Logo-2012-2021.png",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const bookingService1 = `https://www.kayak.com/Cheap-Car-Rentals.31405.cars.ksp?from=${departure}&to=${destination}&dates=${dates}`;
    const bookingService2 = `https://www.expedia.com/Cars??from=${departure}&to=${destination}&dates=${dates}`;

    setBookingServices([bookingService1, bookingService2]);
  };
  return (
    <Car
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

export default CarContainer;
