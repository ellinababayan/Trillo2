import React from "react";
import "./Home.css";
// import "../../../public/Trillo-600-200.png"

const Home = () => {
  return (
    <div className="home_container">
      <div className="summary_background"></div>
      <div className="summary block">
        <img
          src="https://www.trillo.io/wp-content/uploads/2021/05/Trillo-600-200.png"
          alt="trillo logo"
          className="logo_big"
        />
        <h1> Your Travel Planning Companion</h1>
        <h4>Explore the World with Ease and Excitement</h4>
        <div>
          <a href="/hotel" className="navigation">
            <span>Hotel</span>
          </a>
          <a href="/flight" className="navigation">
            <span>Flight</span>
          </a>
          <a href="/car" className="navigation">
            <span>Car Rental</span>
          </a>
          <a href="/tours" className="navigation">
            <span>Tours</span>
          </a>
        </div>
        <div>
          <button
            type="submit"
            id="down"
            className="navigation"
            onClick={document.getElementById("why")}
          >
            &#8964;
          </button>
        </div>
      </div>

      <div className="why block" id="why">
        <h2>Why Choose Trillo?</h2>
        <span>
          <li>
            <h4>Simplicity:</h4> Our user-friendly interface makes planning your
            trip a breeze, no matter your level of tech-savviness.
          </li>
          <li>
            <h4>Personalization:</h4> Tailor your journey to your preferences
            with personalized recommendations and options.
          </li>
          <li>
            <h4>Savings:</h4> Get access to exclusive deals and discounts that
            stretch your travel budget further.
          </li>
          <li>
            <h4>24/7 Support:</h4> Our dedicated support team is here around the
            clock to assist you, ensuring a stress-free travel experience.
          </li>
        </span>
      </div>
      <div className="start block">
        <h2> Start Your Journey Today: </h2>
        <p>
          Planning your dream vacation has never been this exciting. Join Trillo
          today and embark on a travel adventure that's as unique as you are.
          Begin by searching for your ideal destination, or explore our
          handpicked travel guides for inspiration.
        </p>
      </div>
      <div className="ready block">
        <h2>
          Ready to Dive In? <br></br>Let's Get Started!
        </h2>
        <div>
          <a href="/hotel" className="navigation">
            <span>Hotel</span>
          </a>
          <a href="#" className="navigation">
            <span>Flight</span>
          </a>
          <a href="#" className="navigation">
            <span>Car Rental</span>
          </a>
          <a href="#" className="navigation">
            <span>Tours</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
