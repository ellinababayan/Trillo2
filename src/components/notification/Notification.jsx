import React from "react";
import "./Notification.css";

const Notification = (props) => {
  return (
    <div className="notification_container">
      <button
        type="submit"
        onMouseDown={props.handleCloseNotification}
        className="btn btn_close"
      >
        x
      </button>
      <p className="notification">New Tours on Alaska</p>
      <p className="notification">Discounted Flights to India</p>
      <p className="notification">Las Palmas Hotel Opened</p>
      <p className="notification">Car Rental is available</p>
    </div>
  );
};

export default Notification;
