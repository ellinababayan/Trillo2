import React from "react";
import "./Message.css";

const Message = (props) => {
  return (
    <div className="message_container">
      <button
        type="submit"
        onMouseDown={props.handleCloseMessage}
        className="btn btn_close"
      >
        x
      </button>
      <p className="message">Sign Up or Login</p>
      <p className="message">Welcome to Trillo!</p>
    </div>
  );
};

export default Message;
