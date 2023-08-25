import React from "react";

const HowCar = () => {
  return (
    <span className="car_span">
      <li>
        <img
          src="https://freeiconshop.com/wp-content/uploads/edd/search-var-flat.png"
          alt="Search and Select"
          className="how_car_img"
        />
        <h3> Search and Select</h3> Browse through the available car options
        based on your preferences and requirements.
      </li>
      {/* <li>
            <h1>Choose Extras:</h1> Enhance your driving experience by adding
            optional extras such as GPS navigation, child seats, and additional
            insurance coverage.
          </li> */}
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/128/1574/1574045.png"
          alt="Reservation"
          className="how_car_img"
        />
        <h3>Make a Reservation</h3> Once you've selected your ideal vehicle and
        options, proceed to the reservation page.
      </li>
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1004/1004739.png"
          alt="Confirmation"
          className="how_car_img"
        />
        <h3>Confirmation</h3> You'll receive a confirmation of your reservation
        with all the necessary details .
      </li>
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5526/5526231.png"
          alt="Enjoy"
          className="how_car_img"
        />
        <h3>Pickup and Enjoy</h3> Head to the pickup location to collect your
        rental car. We will guide you through the necessary paperwork and
        vehicle familiarization.
      </li>
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/512/8632/8632343.png"
          alt="Safe Travels"
          className="how_car_img"
        />
        <h3>Safe Travels</h3>
        Drive with peace of mind, knowing that our vehicles undergo regular
        maintenance and safety checks.
      </li>
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5625/5625642.png"
          alt="Easy Return"
          className="how_car_img"
        />
        <h3>Return with Ease</h3>
        Return the vehicle to the designated drop-off location. Our staff will
        conduct a quick inspection, and you'll be on your way in no time.
      </li>
    </span>
  );
};

export default HowCar;
