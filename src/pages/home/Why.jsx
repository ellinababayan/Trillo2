import React, { useRef } from "react";
import "./Home.css";

const Why = (props) => {
  return (
    <div>
      <h2>Why Choose Trillo?</h2>

      <span className="why_span">
        <li>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5625/5625642.png"
            alt="Simplicity"
            className="why_img"
          />
          <h3>Simplicity</h3> Our user-friendly interface makes planning your
          trip a breeze, no matter your level of tech-savviness.
        </li>
        <li>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1438/1438060.png"
            alt="Personalization"
            className="why_img"
          />
          <h3>Personalization</h3> Tailor your journey to your preferences with
          personalized recommendations and options.
        </li>
        <li>
          <img
            src="https://cdn-icons-png.flaticon.com/512/261/261778.png"
            alt="Savings"
            className="why_img"
          />
          <h3>Savings</h3> Get access to exclusive deals and discounts that
          stretch your travel budget further.
        </li>
        <li>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2057/2057748.png"
            alt="Support"
            className="why_img"
          />
          <h3>24/7 Support</h3> Our dedicated support team is here around the
          clock to assist you, ensuring a stress-free travel experience.
        </li>
      </span>
    </div>
  );
};

export default Why;
