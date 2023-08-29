import React, { useRef } from "react";
import "./Home.css";
import Why from "./Why";

const Home = (props) => {
  const whyRef = useRef();
  const readyRef=useRef();
  const scrollToWhy = () => {
    const lastChildElement = whyRef.current?.lastElementChild;
    lastChildElement?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToReady = () => {
    const lastChildElement = readyRef.current?.lastElementChild;
    lastChildElement?.scrollIntoView({ behavior: "smooth" });
  };
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
            onClick={scrollToWhy}
          >
            &#8964;
          </button>
        </div>
      </div>

      <div className="why block" id="why" ref={whyRef}>
        <Why scrollToLast={scrollToReady} />
      </div>

      <div className="ready block" ref={readyRef}>
        <h2>
          Ready to Dive In? <br></br>Let's Get Started!
        </h2>
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
      </div>
    </div>
  );
};

export default Home;
