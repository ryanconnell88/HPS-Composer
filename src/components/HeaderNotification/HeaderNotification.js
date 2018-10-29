import React from "react";
import { Container, Jumbotron } from "reactstrap";

import "./HeaderNotification.css";

const HeaderNotification = props => {
  return (
    <div className="HeaderNotification">
      <Container>
        <Jumbotron>
          <h3>{props.header}</h3>
          <p>{props.text}</p>
        </Jumbotron>
      </Container>
    </div>
  );
};
export default HeaderNotification;
