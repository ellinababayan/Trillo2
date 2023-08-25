import React, { useState } from "react";
import Tours from "./Tours";

const ToursContainer = () => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [bookingServices, setBookingServices] = useState([]);

  const bookingServiceLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/4/45/GetYourGuide_logo.png",
    "https://logos-world.net/wp-content/uploads/2021/02/Expedia-Logo-2012-2021.png",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const bookingService1 = `https://www.getyourguide.com/-l1320/-tc35/?cmp=ga&cq_src=google_ads&cq_cmp=6654173655&cq_con=84269756582&cq_term=tours%20adventure%20tours&cq_med=&cq_plac=&cq_net=g&cq_pos=&cq_plt=gp&campaign_id=6654173655&adgroup_id=84269756582&target_id=kwd-333267410390&loc_physical_ms=9031140&match_type=b&ad_id=430559575647&keyword=tours%20adventure%20tours&ad_position=&feed_item_id=&placement=&device=c&partner_id=CD951&gclid=Cj0KCQjw_5unBhCMARIsACZyzS2n2c5Tor0D9DpwYaZsdfSfo22FNOI-9uqe3ckvmL_6DQUQUZYHd2AaAizJEALw_wcB`;
    const bookingService2 = `https://www.expedia.com/Activities??from=${departure}&to=${destination}&dates=${dates}`;

    setBookingServices([bookingService1, bookingService2]);
  };
  return (
    <Tours
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

export default ToursContainer;
