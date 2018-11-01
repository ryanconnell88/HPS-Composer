import React from "react";
import {  Jumbotron } from "reactstrap";

import "./HeaderNotification.css";

const HeaderNotification = props => {
  //A jumbotron component for notifications 
  return (
    <div className="HeaderNotification">
        <Jumbotron>
          <h3>{props.header}</h3>
          <p>{props.text}</p>
        </Jumbotron>
    </div>
  );
};
export default HeaderNotification;
