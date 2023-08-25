import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Car.css";

const Car = (props) => {
  return (
    <div className="car_container">
      <div>
        <div className="container__searchbar">
          <h1>Car Search</h1>
          <form onSubmit={props.handleSubmit}>
            <label htmlFor="departure">Departure City:</label>
            <input
              type="text"
              id="departure"
              value={props.departure}
              className="search__cars"
              onChange={(e) => props.setDeparture(e.target.value)}
              required
            />
            <label htmlFor="destination">Destination:</label>
            <input
              type="text"
              id="destination"
              value={props.destination}
              className="search__cars"
              onChange={(e) => props.setDestination(e.target.value)}
              required
            />
            <label htmlFor="dates">Dates:</label>
            <input
              type="date"
              id="dates"
              value={props.dates}
              className="search__cars"
              onChange={(e) => props.setDates(e.target.value)}
              required
            />
            <button type="submit" className="btn find">
              Search Cars
            </button>
          </form>
          <div className="results">
            <p>Book car:</p>
            {props.bookingServices.map((service, index) => (
              <a
                key={index}
                href={service}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Booking Service {index + 1} */}
                <img
                  className="logo_cars"
                  src={props.bookingServiceLogos[index]}
                  alt={`Booking Service ${service + 1}`}
                ></img>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="how_car">
        <ScrollAnimation animateIn="fadeIn">
          <h1>How It Works?</h1>
        </ScrollAnimation>

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
            <h3>Make a Reservation</h3> Once you've selected your ideal vehicle
            and options, proceed to the reservation page.
          </li>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1004/1004739.png"
              alt="Confirmation"
              className="how_car_img"
            />
            <h3>Confirmation</h3> You'll receive a confirmation of your
            reservation with all the necessary details .
          </li>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5526/5526231.png"
              alt="Enjoy"
              className="how_car_img"
            />
            <h3>Pickup and Enjoy</h3> Head to the pickup location to collect
            your rental car. We will guide you through the necessary paperwork
            and vehicle familiarization.
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
            Return the vehicle to the designated drop-off location. Our staff
            will conduct a quick inspection, and you'll be on your way in no
            time.
          </li>
        </span>

        {/* <h1>
          Book your car rental today and unlock the freedom to make the most of
          your travels. Experience convenience, comfort, and unparalleled
          service with Trillo Car Rental Services. Your adventure awaits - start
          it on wheels!
        </h1> */}
      </div>
      {/* <div className="book_car"></div> */}
    </div>
  );
};

export default Car;
